'use strict';

var __indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++) {
            if (i in this && this[i] === item) return i;
        }
        return -1;
    };

angularApp.directive('fieldDirective', function($http, $compile) {

    var getTemplateUrl = function(field) {
        var type = field.field_type;
        var templateUrl = './views/field/';
        var supported_fields = [
            'textfield',
            'date',
            'dropdown'
        ]

        if (__indexOf.call(supported_fields, type) >= 0) {
            return templateUrl += type + '.html';
        }
    }

    var linker = function(scope, element) {
        var templateUrl = getTemplateUrl(scope.field);
        $http.get(templateUrl).success(function(data) {
            element.html(data);
            $compile(element.contents())(scope);
        });
    }

    return {
        template: '<div ng-bind="field"></div>',
        restrict: 'E',
        scope: {
            field: '='
        },
        link: linker
    };
});