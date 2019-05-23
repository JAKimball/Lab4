var userColumnResponse = prompt("How many articles on each page?");
var numColumns = Number(userColumnResponse); 

function articleWidth() {
    return 100 / numColumns;
};

function article() {
    var output = '<article style="width: ' + articleWidth() + '%;">';
    output += '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas quisquam doloremque, quas sequi laudantium voluptate. Veniam quia veritatis eius animi natus dolorem nulla accusantium maiores at praesentium! Cupiditate, enim?</p>';
    output += '<p>Assumenda quibusdam vero placeat esse eius odit hic tempora adipisci eum officia dolores maxime a voluptates, quisquam, vitae perferendis unde, eligendi molestiae labore quos velit soluta dolor iure. Inventore, quaerat?</p>';
    output += '</article>';
    return output;
};

function articles() {
    var output = '';
    for (let i = 0; i < numColumns * 2; i++) {
        output += article();
    };
    return output;
};

