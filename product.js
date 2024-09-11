document.getElementById('button').addEventListener('click', function(event) {
event.preventDefault()
});
var id = 0;
function sell(){
    id++
    var name = document.getElementById('pname').value ;
    var qty = document.getElementById('qty').value;
    var price = document.getElementById('price').value;
    var disc = document.getElementById('disc').value;
    var sub = qty * price * (1 - disc/100);
    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + name + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + price + "</td>";
    row += "<td>" + disc + "</td>";
    row += "<td>" + sub + "</td>";
    row += "</tr>";
    document.getElementById('product_table').innerHTML += row;


}