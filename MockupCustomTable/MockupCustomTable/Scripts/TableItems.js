$('.wizard-next').click(function () {

    var getNumber = localStorage.length / 5;

    if (localStorage.length === 5) {
        localStorage.setItem('TableField[0]', $('[name="cfType"]:checked').data('name'));
    }
    else {
        localStorage.setItem('TableField[' + getNumber + ']', $('[name="cfType"]:checked').data('name'));
    }
});

$('.wizard-next2').click(function () {

    var getNumber = localStorage.length / 6;

    if (localStorage.length === 6) {
        localStorage.setItem('TableName[0]', $('#Name').val());
        localStorage.setItem('TableDescription[0]', $('#Description').val());
        localStorage.setItem('TableHelpText[0]', $('#HelpText').val());
    }
    else {
        localStorage.setItem('TableName[' + getNumber + ']', $('#Name').val());
        localStorage.setItem('TableDescription[' + getNumber + ']', $('#Description').val());
        localStorage.setItem('TableHelpText[' + getNumber + ']', $('#HelpText').val());
    }
});