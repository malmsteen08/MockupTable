$('.wizard-next').click(function () {
    $.cookie('TableFieldName', $('[name="cfType"]:checked').data('name'), { expires: 7 });
});

$('.wizard-next2').click(function () {
    $.cookie('TableName', $('#Name').val(), { expires: 7 });
    $.cookie('TableDescription', $('#Description').val(), { expires: 7 });
    $.cookie('TableHelptext', $('#HelpText').val(), { expires: 7 });
});