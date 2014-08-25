$(document).ready(function() {
    var objectNames = [{ "Name": "Teklif" }, { "Name": "Ürün" }];
    $.each(objectNames, function(key, value) {
        $('#CustomObject')
            .append($("<option value=" + value.Name + ">" + value.Name + "</option>"))
    });
});


$('.wizard-next').click(function sendData() {

    var dataFields = {
        object: $("#CustomObjects").val(),
        field: $("//div[@data-name]").val(),
        name: $("#Name").val(),
        description : $("#Description").val(),
        helpText : $("#HelpText").val(),
        isActive : $("#IsActive").val(),
        isRequired : $("#IsRequired").val()
    }

    $.ajax({
        url: '/Data/data.json',
        type: 'post',
        dataType: 'json',
        success: function(data) {
            $('#data').html(dataFields);
        },
        data: dataFields
    });

});


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


