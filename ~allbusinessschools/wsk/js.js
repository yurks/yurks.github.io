;(function(window) {
    'use strict';

    window.axdStart = function(submission) {

        Ace('product', {
            _silent: true,
            context: '#wsk-context',

            server: 'test', //change to 'public' after going live

            authkey: submission.authkey,
            id: submission.id,

            url_addon: submission.addon,

            // settings for results form
            form: {
                attach: 'auto', // try 'action' value also
                settings: {
                    values: submission.values,
                    suppress_form_tags: true,
                    label_submit: 'Request Info',
                    fields: {
                        'custom:Disclaimer': {
                            create: true,
                            field_type: 'Custom',
                            local: true,
                            render: function() {
                                var form = this;
                                return form.dom.html(form.dom.get('#wsk-disclaimer'));
                            }
                        }
                    },
                    pages: [
                        {fields: 'auto'},
                        {fields: ['custom:Disclaimer']}
                    ]
                }
            }


        }).

        on('ace-item-prepare', function(e, results, item) {
            item.renderContent = function() {
                var item = this;
                return '<h2>' + item.getName() + '</h2>';
            }
        }).

        on('ace-attached-form', function (e, results, form, result) {

            form.on('ace-initialized', function(e, form) {
                var formWrapper = form.wrpr;
                form.dom.classname.add('asd-rfi-inputs', formWrapper);
                form.dom.classname.add('asd-button', form.dom.get('.ace-action-form-submit', formWrapper));

                form.control.all().forEach(function(controlWrapper) {
                    form.dom.classname.add('asd-error', form.dom.get('.ace-validation-message', controlWrapper));
                });
            });
        });

    };

})(window);

