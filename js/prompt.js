var userColumnResponse = prompt("How many articles on each page?");
var numColumns = Number(userColumnResponse); 

function articleWidth() {
    return 1 / numColumns;
}