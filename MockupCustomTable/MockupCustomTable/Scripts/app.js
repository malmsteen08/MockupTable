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
    
    var getNumber = localStorage.length;
    
    localStorage.setItem('FObject[0]', $('#CustomObject').val());
    localStorage.setItem('FField[0]', $('[name="cfType"]:checked').data('name'));

    //var tableFirstStepArray = [];

    //if (localStorage.length === 0) {

    //    tableFirstStepArray.push({
    //        i : 1,
    //        FObject: $('#CustomObject').val(),
    //        FField: $('[name="cfType"]:checked').data('name')
    //    });
        
    //    localStorage.setItem('FirstData', JSON.stringify(tableFirstStepArray));

        //localStorage.setItem( 'FObject[0]', $('#CustomObject').val());
        //localStorage.setItem( 'FField[0]', $('[name="cfType"]:checked').data('name'));
    //}
    //else {

    //    localStorage.setItem('FObject[' + getNumber + ']', $('#CustomObject').val());
    //    localStorage.setItem('FField[' + getNumber + ']', $('[name="cfType"]:checked').data('name'));
    //}
});

$('.wizard-next2').click(function () {

    //var getNumber = localStorage.length / 5;


    localStorage.setItem('FName[0]', $('#Name').val());
    localStorage.setItem('FDescription[0]', $('#Description').val());
    localStorage.setItem('FHelpText[0]', $('#HelpText').val());


    
    //if (localStorage.length === 1) {
    //    var push = localStorage.getItem('FirstData');

    //    var pushItem = JSON.parse(push)
        
    //    pushItem.push({
    //        i:1,
    //        FName: $('#Name').val(),
    //        FDescription: $('#Description').val(),
    //        FHelpText: $('#HelpText').val()
    //    });


    //    localStorage.setItem('FirstData', JSON.stringify(pushItem));

        //localStorage.setItem('FName[0]', $('#Name').val());
        //localStorage.setItem('FDescription[0]', $('#Description').val());
        //localStorage.setItem('FHelpText[0]', $('#HelpText').val());
    //}
    //else {
    //    localStorage.setItem('FName[' + getNumber + ']', $('#Name').val());
    //    localStorage.setItem('FDescription[' + getNumber + ']', $('#Description').val());
    //    localStorage.setItem('FHelpText[' + getNumber + ']', $('#HelpText').val());
    //}
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


