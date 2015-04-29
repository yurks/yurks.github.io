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

            if (!submission.authkey || !submission.campaign) {
                finish();
                return;
            }

            Wsk.context.ace('results', {
                server: 'test.axdapi.com',

                authkey: submission.authkey,

                // tell plugin that we want to fetch one campaign directly
                url_source: 'product',
                url_placeholder: submission.campaign,

                // settings for results form
                form: {
                    attach: 'auto', // try 'action' value also
                    settings: {
                        values: submission.values
                    }
                }

            }).on('ace-prepare', function(e, results) {
                Wsk.customize(results);

            }).on('ace-error', function(e, results) {
                finish();

            }).on('ace-attached-form', function(e, results, customform) {

                customform.container.on('ace-initialized', function(e, customform) {
                    customform.ace('zip', {
                        field_zip: 'PostalCode',
                        field_city: 'City',
                        field_state: 'State',
                        autofetch: 'if_visible'
                    });


                }).on('ace-prepare', function(e, form) {
                    Wsk.customize(form);
                    if (parent) {
                        parent.close();
                        WskDialog.open(form, parent.submitted);
                    }

                }).on('ace-submitting', function(e, form) {
                    WskDialog.close();

                });
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

