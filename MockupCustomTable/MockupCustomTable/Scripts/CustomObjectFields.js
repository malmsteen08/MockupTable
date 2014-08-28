$(document).ready(function () {

    $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td>False</td>'));
    $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td>' + $.cookie('helptext') + '</td>'));
    $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td></td>'));
    $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td>' + $.cookie('CustomFieldName') + '</td>'));
    $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td style="font-family: consolas;">' + $.cookie('name') + '</td>'));
    $('tr[data-id="6C50A2BB184343A6B21FA83F275B3146"]').prepend($('<td class="index">2</td>'));

});