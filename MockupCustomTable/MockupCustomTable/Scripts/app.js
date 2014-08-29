$(document).ready(function () {
    var objectNames = [{ 'Name': 'Teklif' }, { 'Name': 'Ürün' }];
    $.each(objectNames, function (key, value) {
        $('#CustomObject')
            .append($('<option value=' + value.Name + '>' + value.Name + '</option>'));


        var asd = localStorage.getItem('FirstTableCFName');
        var array = $.makeArray(asd);
        console.log(array.length);




    });
});

//have index page values
var tableSecondStepArray = [];

$('.wizard-next').click(function () {
    var tableFirstStepArray = [];

    $.cookie('CustomObjectName', $('#CustomObject').val(), { expires: 7 });
    $.cookie('CustomFieldName', $('[name="cfType"]:checked').data('name'), { expires: 7 });

    tableFirstStepArray.push({ Name: 'Ali', Pass: '123456' });
    tableFirstStepArray.push({ Name: 'Veli', Pass: '*****' });

    localStorage.setItem('Users', JSON.stringify(tableFirstStepArray));
    console.log(JSON.stringify(tableFirstStepArray));


    var osman = localStorage.getItem('Users');
    console.log(osman);

    var veli = JSON.parse(osman);
    veli.push({ Name: $.cookie('CustomObjectName'), Pass: $.cookie('CustomFieldName') });
    console.log(JSON.stringify(veli));

    localStorage.setItem('Users', veli);

    //var mistafa = localStorage.getItem('FirstTableCFName');
    //console.log(mistafa);



});

$('.wizard-next2').click(function () {
    $.cookie('name', $('#Name').val(), { expires: 7, path: '/' });
    $.cookie('description', $('#Description').val(), { expires: 7, path: '/' });
    $.cookie('helptext', $('#HelpText').val(), { expires: 7, path: '/' });

    tableSecondStepArray.push($.cookie('name'));
    tableSecondStepArray.push($.cookie('description'));
    tableSecondStepArray.push($.cookie('helptext'));

    localStorage.setItem('SecondTableFieldName', tableSecondStepArray);

    alert(localStorage.getItem('SecondTableFieldName'));
});














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


