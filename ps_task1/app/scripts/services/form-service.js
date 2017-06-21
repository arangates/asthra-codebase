'use strict';

angularApp.service('FormService', function FormService($http) {
    return {
        fields:[
            {
                name : 'textfield',
                value : 'Name'
            },
            {
                name : 'dropdown',
                value : 'City'
            },
            {
                name : 'date',
                value : 'DOB'
            }
        ]
    };
});
