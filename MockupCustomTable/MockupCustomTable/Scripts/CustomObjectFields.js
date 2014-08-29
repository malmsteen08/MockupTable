$(document).ready(function () {

    var getNumber = localStorage.length / 9;

    if (localStorage.length === 9) {
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td>False</td>'));
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td>' + localStorage.getItem('HelpText[0]') + '</td>'));
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td></td>'));
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td>' + localStorage.getItem('Field[0]') + '</td>'));
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td style="font-family: consolas;">' + localStorage.getItem('Name[0]') + '</td>'));
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td class="index">2</td>'));
    }
    else {
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td>False</td>'));
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td>' + $.cookie('HelpText[' + getNumber + ']') + '</td>'));
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td></td>'));
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td>' + $.cookie('Field[' + getNumber + ']') + '</td>'));
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td style="font-family: consolas;">' + $.cookie('Name[' + getNumber + ']') + '</td>'));
        $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td class="index">2</td>'));
    }
});