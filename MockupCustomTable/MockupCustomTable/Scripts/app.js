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

$('.wizard-next').click(function () {

    var getNumber = localStorage.length / 2;

    if (localStorage.length === 0) {
        localStorage.setItem('Object[0]', $('#CustomObject').val());
        localStorage.setItem('Field[0]', $('[name="cfType"]:checked').data('name'));
    }
    else {

        localStorage.setItem('Object[' + getNumber + ']', $('#CustomObject').val());
        localStorage.setItem('Field[' + getNumber + ']', $('[name="cfType"]:checked').data('name'));
    }
});

$('.wizard-next2').click(function () {

    var getNumber = localStorage.length / 5;

    if (localStorage.length === 2) {
        localStorage.setItem('Name[0]', $('#Name').val());
        localStorage.setItem('Description[0]', $('#Description').val());
        localStorage.setItem('HelpText[0]', $('#HelpText').val());
    }
    else {
        localStorage.setItem('Name[' + getNumber + ']', $('#Name').val());
        localStorage.setItem('Description[' + getNumber + ']', $('#Description').val());
        localStorage.setItem('HelpText[' + getNumber + ']', $('#HelpText').val());
    }
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


