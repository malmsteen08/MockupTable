$('.wizard-next').click(function () {
    $.cookie('AddTableFieldName', $('[name="cfType"]:checked').data('name'), { expires: 7 });
});

$('.wizard-next2').click(function () {
    $.cookie('AddTableName', $('#Name').val(), { expires: 7 });
    $.cookie('AddTableDescription', $('#Description').val(), { expires: 7 });
    $.cookie('AddTableHelptext', $('#HelpText').val(), { expires: 7 });
});