document.getElementById('button').addEventListener('click', function(event) {
    event.preventDefault()
})
var id = 0;
var tol = 0;
function sellFunction(){
    var pname = document.getElementById('pname').value ;
    var pqty = document.getElementById('pqty').value ;
    var pprice = document.getElementById('pprice').value ;
    parseInt(pprice);
    var sub = pqty * pprice;
    parseInt(sub)
    tol  += sub;
    var row = "<tr>";
    id ++;
    row+= "<td>" + id + "</td>";
    row+= "<td>" + pname + "</td>";
    row+= "<td>" + pqty + "</td>";
    row+= "<td>" + pprice + "</td>";
    row+= "<td>" + sub + "</td>";
    row += "</tr>";
    document.getElementById('my_table').innerHTML += row;
    document.getElementById('total').innerHTML = tol;
    
}