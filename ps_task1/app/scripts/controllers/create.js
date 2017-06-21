'use strict';

angularApp.controller('CreateCtrl', function ($scope, $dialog, FormService) {

    $scope.previewMode = false;

    // new form
    $scope.form = {};
    $scope.form.form_id = 1;
    $scope.form.form_name = 'Custom Form';
    $scope.form.form_fields = [];

    $scope.previewForm = {};

    // add new field
    $scope.addField = {};
    $scope.addField.types = FormService.fields;
    $scope.addField.new = $scope.addField.types[0].name;
    $scope.addField.lastAddedID = 0;

    // accordion settings
    $scope.accordion = {}
    $scope.accordion.oneAtATime = true;

    // create new field 
    $scope.addNewField = function(){

        // incr field_id
        $scope.addField.lastAddedID++;

        var newField = {
            "field_id" : $scope.addField.lastAddedID,
            "field_title" : "New field - " + ($scope.addField.lastAddedID),
            "field_type" : $scope.addField.new,
            "field_value" : "",
            "field_required" : true,
			"field_disabled" : false
        };

        // put newField into fields array
        $scope.form.form_fields.push(newField);
    }

    // deletes particular field on button click
    $scope.deleteField = function (field_id){
        for(var i = 0; i < $scope.form.form_fields.length; i++){
            if($scope.form.form_fields[i].field_id == field_id){
                $scope.form.form_fields.splice(i, 1);
                break;
            }
        }
    }

    // add new option to the field
    $scope.addOption = function (field){
        if(!field.field_options)
            field.field_options = new Array();

        var lastOptionID = 0;

        if(field.field_options[field.field_options.length-1])
            lastOptionID = field.field_options[field.field_options.length-1].option_id;

        // new option's id
        var option_id = lastOptionID + 1;

        var newOption = {
            "option_id" : option_id,
            "option_title" : "Option " + option_id,
            "option_value" : option_id
        };

        // put new option into field_options array
        field.field_options.push(newOption);
    }


    // delete particular option
    $scope.deleteOption = function (field, option){
        for(var i = 0; i < field.field_options.length; i++){
            if(field.field_options[i].option_id == option.option_id){
                field.field_options.splice(i, 1);
                break;
            }
        }
    }


    // render
    $scope.previewOn = function(){
        if($scope.form.form_fields == null || $scope.form.form_fields.length == 0) {
            var title = 'Error';
            var msg = 'No fields added yet';
            var btns = [{result:'ok', label: 'OK', cssClass: 'btn-primary'}];

            $dialog.messageBox(title, msg, btns).open();
        }
        else {
            $scope.previewMode = !$scope.previewMode;
            $scope.form.submitted = false;
            angular.copy($scope.form, $scope.previewForm);
        }
    }

    // hide preview form
    $scope.previewOff = function(){
        $scope.previewMode = !$scope.previewMode;
        $scope.form.submitted = false;
    }

   //field options for dropdown field
    $scope.showAddOptions = function (field){
        if(field.field_type == "dropdown")
            return true;
        else
            return false;
    }
//submit form
     $scope.submit = function(){
                alert('Form submitted');
                $scope.form.submitted = true;
     }
//cancel
    $scope.cancel = function(){
                alert('Form canceled');
     }
});
