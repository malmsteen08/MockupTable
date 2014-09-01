$(document).ready(function () {

    var getNumber = localStorage.length / 9;

    var helpText = localStorage.getItem('FirstData');
    var getHelpText = JSON.parse(helpText);


    if (localStorage.length === 5) {
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td>False</td>'));
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td>' + localStorage.getItem('FHelpText[0]') + '</td>'));
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td></td>'));
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td>' + localStorage.getItem('FField[0]') + '</td>'));
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td style="font-family: consolas;">' + localStorage.getItem('FName[0]') + '</td>'));
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td class="index">2</td>'));
    }
    else {
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td>False</td>'));
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td>' + $.cookie('FHelpText[' + getNumber + ']') + '</td>'));
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td></td>'));
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td>' + $.cookie('FField[' + getNumber + ']') + '</td>'));
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td style="font-family: consolas;">' + $.cookie('FName[' + getNumber + ']') + '</td>'));
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td class="index">2</td>'));
    }
});