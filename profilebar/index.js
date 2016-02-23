(function(e) {
    e.AceProfile({
        //defaults
        authkey: "97fcca7b-51ed-4e19-80d5-6f49a1e52b1a",
        server: "test",
        suppress_form_tags: true,
        _silent: true
    }, {
        //form_settings
        context: "#ace",
        fields: {
            JobTitle: {
                label: "I am a",
                placeholder: "Current Job/Status",
                typeahead: true
            },
            CareerObjective: {
                label: "looking to",
                preselect: "first"
            },
            FutureGoal: {
                label: "and become a",
                placeholder: "Future Goal",
                typeahead: true
            },
            HighestLevelOfEducation: {
                label: "My highest Level of education is"
            },
            HighSchoolGraduationYear: {
                label: "I completed in High School in"
            }
        },
        pages: [ {
            fields: [ "JobTitle", "typeahead:JobTitle", "CareerObjective", "FutureGoal", "typeahead:FutureGoal", "EducationGoal", "Concentration" ]
        }, {
            fields: [ "HighestLevelOfEducation", "HighSchoolGraduationYear" ]
        } ],
        label_submit: "Discover your paths"
    }, {
        //results_settings
        context: "#ace",
        pagerShow: true,
        pagerEnabled: true,
        pagerCycle: true,
        form: {
            message_submitted: "<h2>Submitted!</h2>",
            attach: "action",
            // try 'auto' value also
            // here is custom form instance settings.
            settings: {
                // Hide predefined fields, which was submitted with primary form,
                // or pre-populated with form settings.
                hide_predefined: true
            }
        }
    }, null);
})(this);