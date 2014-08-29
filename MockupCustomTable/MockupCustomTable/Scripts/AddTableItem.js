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
    var getNumber = localStorage.length / 9;

    if (localStorage.length === 6) {
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