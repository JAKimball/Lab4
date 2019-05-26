var userColumnResponse = prompt("How many articles accross each page?");
var numColumns = Number(userColumnResponse); 

function articleWidth() {
    return 100 / numColumns;
};

function article1() {
    var output = '<article style="width: ' + articleWidth() + '%;">';
    output += '<section>';
    output += '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas quisquam doloremque, quas sequi laudantium voluptate. Veniam quia veritatis eius animi natus dolorem nulla accusantium maiores at praesentium! Cupiditate, enim?</p>';
    output += '<p>Assumenda quibusdam vero placeat esse eius odit hic tempora adipisci eum officia dolores maxime a voluptates, quisquam, vitae perferendis unde, eligendi molestiae labore quos velit soluta dolor iure. Inventore, quaerat?</p>';
    output += '</section>';
    output += '</article>';
    return output;
};

function article2() {
    var output = '<article style="width: ' + articleWidth() + '%;">';
    output += '<section>';
    output += '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas quisquam doloremque, quas sequi laudantium voluptate. Veniam quia veritatis eius animi natus dolorem nulla accusantium maiores at praesentium! Cupiditate, enim?</p>';
    output += '<p>Nulla, quaerat culpa odit illo, dolore harum doloribus corporis obcaecati iste assumenda tempora veritatis nam nesciunt quibusdam, dolorem enim eum cupiditate deserunt! Animi impedit suscipit unde iusto debitis eveniet nulla!</p>';
    output += '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero possimus, voluptates debitis atque qui accusamus labore doloribus consequuntur! At quasi doloribus itaque voluptas nesciunt excepturi possimus minus fugiat quo ea!</p>';
    output += '</section>';
    output += '</article>';
    return output;
};

function article3() {
    var output = '<article style="width: ' + articleWidth() + '%;">';
    output += '<section>';
    output += '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas quisquam doloremque, quas sequi laudantium voluptate. Veniam quia veritatis eius animi natus dolorem nulla accusantium maiores at praesentium! Cupiditate, enim?</p>';
    output += '<p>Et netus et malesuada fames. Mattis rhoncus urna neque viverra justo nec ultrices. Amet massa vitae tortor condimentum lacinia quis vel. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Eu scelerisque felis imperdiet proin fermentum leo vel. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo.</p>';
    output += '<img src="images/logo.jpg" alt="logo">';
    output += '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero possimus, voluptates debitis atque qui accusamus labore doloribus consequuntur! At quasi doloribus itaque voluptas nesciunt excepturi possimus minus fugiat quo ea!</p>';
    output += '</section>';
    output += '</article>';
    return output;
};

function articles() {
    var output = '';
    var articlePick = 0;

    for (let i = 0; i < numColumns * 3; i++) {
        let articlePick = Math.floor(Math.random() * 3);

        if (articlePick == 0) {
            output += article1();
        } else if (articlePick == 1) {
            output += article2();
        } else {
            output += article3();
        };

    };
    return output;
};
