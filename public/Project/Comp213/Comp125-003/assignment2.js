document.getElementById('drawbutton').onclick = function () {
    var tableDiv = document.getElementById('table');
    var table = document.createElement("table");
    for (var i = 1; i <= 15; i++) {
        var row = document.createElement("tr");
        for (var j = 1; j <= 15; j++) {
            var tableData = document.createElement('td');
            tableData.innerHTML = i + "," + j + " ";
            row.appendChild(tableData);
        }
        table.appendChild(row);
    }
    tableDiv.append(table);
}