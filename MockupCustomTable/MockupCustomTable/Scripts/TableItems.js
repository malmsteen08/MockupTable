$('.wizard-next').click(function () {

    var length = localStorage.length;
    var getNumber = localStorage.length / 5 + 1;

    if (localStorage.length === 5) {
        localStorage.setItem('SObject[2]', $('label').val());
        localStorage.setItem('SField[2]', $('[name="cfType"]:checked').data('name'));
    }
    if (localStorage.length === 10) {
        localStorage.setItem('SObject[' + getNumber + ']', $('label').val());
        localStorage.setItem('SField[' + getNumber + ']', $('[name="cfType"]:checked').data('name'));
    }
});

$('.wizard-next2').click(function () {

    var length = localStorage.length;
    var getNumber = (localStorage.length + 3) / 5;

    if (localStorage.length === 7) {
        localStorage.setItem('SName[2]', $('#Name').val());
        localStorage.setItem('SDescription[2]', $('#Description').val());
        localStorage.setItem('SHelpText[2]', $('#HelpText').val());
    }
    else {
        localStorage.setItem('SName[' + getNumber + ']', $('#Name').val());
        localStorage.setItem('SDescription[' + getNumber + ']', $('#Description').val());
        localStorage.setItem('SHelpText[' + getNumber + ']', $('#HelpText').val());
    }
});