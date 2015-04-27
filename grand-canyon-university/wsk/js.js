;(function(Eggshell, $) {
    'use strict';

    var Wsk = window.Wsk = {
        context: $('<div></div>'),

        initialize: function(submission, parent) {
            Wsk.context[0].innerHTML = '';

            var finish = function() {
                parent.close();
                parent.submitted();
                finish = $.noop;
                parent = null;
            };

            if (!submission.pubkey) {
                finish();
                return;
            }

            Wsk.context.ace('results', {
                /*
                 server will need to be changed to public.axdapi.com once you go live.
                 Server can be passed as URL argument. I.E http://test.com?server=public.axdapi.com
                 */
                server: 'test.axdapi.com',

                /*
                 please update authkey with the one provided to you by an Account Manager. Testing and Production authkeys are different.
                 AuthKey determines a product type as well as the type of flow.
                 AuthKey can be passed as URL argument. I.E http://test.com?authkey=6eca3c93-d606-4e0c-8f1c-28ddc0f3ee22
                 */
                authkey: '1fa47340-f969-4fa5-8287-41c5231de412',

                follow_session: submission.pubkey,

                render: false

            }).on('ace-prepare', function(e, results) {
                Wsk.customize(results);

            }).on('ace-error', function(e, results) {
                finish();

            }).on('ace-initialized', function(e, results) {
                var school = results.getItem(0);
                var form_url = school && school.getFormUrl();
                if (form_url) {
                    results.wrapper.ace('form', {
                        url: form_url,
submit: false // TODO: disable submission only for testing

                    })
                        .on('ace-prepare', function(e, form) {
                            Wsk.customize(form);
                            if (parent) {
                                parent.close();
                                WskDialog.open(form, parent.submitted);
                            }

                        }).on('ace-submitting', function(e, form) {
                            WskDialog.close();
                        });
                } else {
                    finish();
                }
            });
        },

        customize: function(instance) {
            instance.container
                .on('ace-busy-started', WskDialog.busyStart)
                .on('ace-busy-finished', WskDialog.busyFinish)
                .on('ace-submitted', WskDialog.busyFinish);
        }
    };

    var WskDialog = {
        instance: null,

        open: function(WskInstance, finishCallback) {
            WskDialog.instance = Eggshell.create("C.common.dialog", {
                headline: '<strong>Final Step:</strong> Provide some additional information that is requested by college',
                control:{
                    primaryText: 'Submit',
                    secondaryText:'',
                    primaryCallback: function() {
                        WskInstance.actions.fire('form-submit');
                    }
                },
                html: Wsk.context

            })
                .on('show', function() {
                    this.$(".dialog").addClass('wsk-dialog');
                })
                .on('hidden', function() {
                    if (finishCallback) {
                        finishCallback();
                    }
                })
                .trigger('disable screen blocker click')
                .trigger('show');
        },

        close: function() {
            if (WskDialog.instance) {
                WskDialog.instance.trigger('hide');
                WskDialog.instance = null;
            }
        },

        _busyTimeout: null,
        busyStart: function() {
            if (WskDialog.instance) {
                clearTimeout(WskDialog._busyTimeout);
                WskDialog.instance.trigger('show loading');
            }
        },
        busyFinish: function() {
            if (WskDialog.instance) {
                WskDialog._busyTimeout = setTimeout(function() {
                    WskDialog.instance.trigger('hide loading');
                }, 10);
            }
        }
    };

})(Eggshell, jQuery);

