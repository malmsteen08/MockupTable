$(document).ready(function () {
    $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FED"]').prepend($('<td>false</td>'));
    $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FED"]').prepend($('<td>' + $.cookie('AddTableHelptext') + '</td>'));
    $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FED"]').prepend($('<td></td>'));
    $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FED"]').prepend($('<td>' + $.cookie('AddTableFieldName') + '</td>'));
    $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FED"]').prepend($('<td style="font-family: consolas;">' + $.cookie('AddTableName') + '</td>'));
    $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FED"]').prepend($('<td class="index">2</td>'));
});