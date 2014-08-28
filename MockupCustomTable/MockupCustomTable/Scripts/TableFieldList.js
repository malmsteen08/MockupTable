$(document).ready(function () {
    $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FDE"]').prepend($('<td>false</td>'));
    $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FDE"]').prepend($('<td>' + $.cookie('TableHelptext') + '</td>'));
    $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FDE"]').prepend($('<td></td>'));
    $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FDE"]').prepend($('<td>' + $.cookie('AddTableFieldName') + '</td>'));
    $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FDE"]').prepend($('<td style="font-family: consolas;">' + $.cookie('TableName') + '</td>'));
    $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FDE"]').prepend($('<td class="index">2</td>'));
});