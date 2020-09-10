window.onload = loadData;

var numbers = [10, 20, 34, 32, 45];
var months = ["Jan", "Feb", "Mar", "Apr"];

/*
    numbers[0] = 10
    numbers[1] = 20

    numbers.length = 5

    <table>
        <tr>
            <td>1</td>
            <td>abc</td>
            <td>male</td>
        </tr>
        <tr>
            <td>1</td>
            <td>abc</td>
            <td>male</td>
        </tr>
    </table>
*/
var students = [{
    id: 1,
    name: 'Shubha',
    gender: 'Female'
}, {
    id: 2,
    name: 'Mishthi',
    gender: 'Female'
}, {
    id: 3,
    name: 'Vibhu',
    gender: 'Male'
}, {
    id: 4,
    name: 'Tonu',
    gender: 'Female'
}, {
    id: 5,
    name: 'Dev',
    gender: 'Male'
}];

function loadData() {
    var str = '';

    for (var i = 0; i < numbers.length; i = i + 1) {
        str = str + numbers[i] + '<br/>';
    }

    document.getElementById("divNumbers").innerHTML = str;

    str = '';

    for (var i = 0; i < students.length; i++) {
        str = str + '<tr>';

        str = str + '<td>' + students[i].id + '</td>';
        str = str + '<td>' + students[i].name + '</td>';
        str = str + '<td>' + students[i].gender + '</td>';

        str = str + '</tr>';
    }

    document.getElementById("tab").innerHTML = str;
}