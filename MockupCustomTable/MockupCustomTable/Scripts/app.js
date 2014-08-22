$(document).ready(function () {
    var objectNames = [{ "Name": "Teklif" }, { "Name": "Ürün" }];
    $.each(objectNames, function (key, value) {
        $('#CustomObject')
            .append($("<option value=" + value.Name + ">" + value.Name + "</option>"))
    });


    
    $('.wizard-next').click(function ()
    { 
        var dataToSave = "";
        $.each($("#CustomObject"), function(index, item) {
            dataToSave = dataToSave + ", {'Name':'" + $(this).text() + "'} ";
        });
        dataToSave = dataToSave.substring(1);
        $.ajax({
            type: 'POST',
            contentType: "application/json",
            url: "data.json",
            data: "{ 'screening':[" + dataToSave + "]}",
            success: function(d) {
                alert(d.d);
            },
            error: function(e, d) {
            },
            dataType: "json"
       });

    });






    //$('.wizard-next').click(function ()
    //{
    //    var inputValue = $('#CustomObject').val();
    //    $('input').val(inputValue);
    //});
});

