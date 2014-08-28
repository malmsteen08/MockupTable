$(document).ready(function () {
    var objectNames = [{ 'Name': 'Teklif' }, { 'Name': 'Ürün' }];
    $.each(objectNames, function (key, value) {
        $('#CustomObject')
            .append($('<option value=' + value.Name + '>' + value.Name + '</option>'))
    });
});

var customObjectName;
var customFieldName;
var name;
var description;
var helptext;

    $('.wizard-next').click(function () {
        $.cookie('CustomObjectName', $('#CustomObject').val(), { expires: 7 });
        $.cookie('CustomFieldName', $('[name="cfType"]:checked').data('name'), { expires: 7 });

        customObjectName = $('#CustomObject').val();
        customFieldName = $('[name="cfType"]:checked').data('name');

        $.ajax({
            url: "Data/data.cshtml",
            success: function (save) {
                customObjectName = save;
            }
        });

    });

    $('.wizard-next2').click(function () {
        $.cookie('name', $('#Name').val(), { expires: 7 });
        $.cookie('description', $('#Description').val(), { expires: 7 });
        $.cookie('helptext', $('#HelpText').val(), { expires: 7 });

        name = $('#Name').val();
        description = $('#Description').val();
        helptext = $('#HelpText').val();

        console.log($.cookie('CustomObjectName'));
    });

//$(function GetData() {

//    var customObjectName = "";
//    var customFieldName = "";
//    var name = "";
//    var description = "";
//    var helptext = "";

//    $('.wizard-next').click(function () {
//        $.cookie('CustomObjectName', $('#CustomObject').val(), { expires: 7 });
//        $.cookie('CustomFieldName', $('[name="cfType"]:checked').data('name'), { expires: 7 });

//        customObjectName = $('#CustomObject').val();
//        customFieldName = $('[name="cfType"]:checked').data('name');
//    });

//    $('.wizard-next2').click(function () {
//        $.cookie('name', $('#Name').val(), { expires: 7 });
//        $.cookie('description', $('#Description').val(), { expires: 7 });
//        $.cookie('helptext', $('#HelpText').val(), { expires: 7 });

//        name = $('#Name').val();
//        description = $('#Description').val();
//        helptext = $('#HelpText').val();
//    });

//});












    //$('.wizard-next').click(function sendData() {

    //    var dataFields = {
    //        object: $("#CustomObjects").val(),
    //        field: $("//div[@data-name]").val(),
    //        name: $("#Name").val(),
    //        description : $("#Description").val(),
    //        helpText : $("#HelpText").val(),
    //        isActive : $("#IsActive").val(),
    //        isRequired : $("#IsRequired").val()
    //    }

    //    $.ajax({
    //        url: '/Data/data.json',
    //        type: 'post',
    //        dataType: 'json',
    //        success: function(data) {
    //            $('#data').html(dataFields);
    //        },
    //        data: dataFields
    //    });

    //});


    //$('.wizard-next').click(function sendData() {
    //    $.ajax({
    //        url: '../Content/Data/data.json',
    //        type: 'POST',
    //        contentType: 'application/json',
    //        data: {
    //            json: JSON.stringify({
    //                name: "Bob",
    //            })
    //        },

    //        dataType: 'json'
    //    });
    //    parseJSON.valueOf(json);
    //});








    //$('.wizard-next').click(function ()
    //{
    //    var inputValue = $('#CustomObject').val();
    //    $('input').val(inputValue);
    //});


