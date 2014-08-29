$(document).ready(function () {

    var getNumber = localStorage.length / 13;

    if (localStorage.length == 9) {
        $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FDE"]').prepend($('<td>false</td>'));
        $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FDE"]').prepend($('<td>' + localStorage.getItem('TableHelpText[0]') + '</td>'));
        $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FDE"]').prepend($('<td></td>'));
        $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FDE"]').prepend($('<td>' + localStorage.getItem('TableField[0]') + '</td>'));
        $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FDE"]').prepend($('<td style="font-family: consolas;">' + localStorage.getItem('TableName[0]') + '</td>'));
        $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FDE"]').prepend($('<td class="index">2</td>'));
    }
    else {
        $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FDE"]').prepend($('<td>false</td>'));
        $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FDE"]').prepend($('<td>' + localStorage.getItem('TableHelpText[' + getNumber + ']') + '</td>'));
        $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FDE"]').prepend($('<td></td>'));
        $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FDE"]').prepend($('<td>' + localStorage.getItem('TableField[' + getNumber + ']') + '</td>'));
        $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FDE"]').prepend($('<td style="font-family: consolas;">' + localStorage.getItem('TableName[' + getNumber + ']') + '</td>'));
        $('tr[data-id="8E939E0C64F34ECCAA85CB9CE0554FDE"]').prepend($('<td class="index">2</td>'));
    }
});