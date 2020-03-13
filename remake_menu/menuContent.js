/* 

    Name: Nicole Garay
    Date: March 11, 2020
    This is going to be the JavaScript file that will insert the menu content into the div
    element within the HTML.

*/
//Global Variables
//this variable declares the div element with #menuContent id as a the container
var menuContainer = document.querySelector("div#menuContainer");
var presentMenu = "";

welcome();

function welcome(){
    var welcomeMsg;
    welcomeMsg = "<div id='welcomeMessage'>"
    welcomeMsg += "<h2>欢迎</h2>";
    welcomeMsg += "<h3>(welcome)</h3>";
    welcomeMsg += "<h2>Select a menu to get started</h2>";
    welcomeMsg += "</div>";

    menuContainer.innerHTML = welcomeMsg;
}

//Content Functions
function appetizerContent() {
    presentMenu = "<div class='appetizerBox' id='menuContainer'>";

    presentMenu += "<div id='menuTitleBox' class='centeredHorBox'>";
    presentMenu += "<h2 id='menuTitle'>Appetizers</h2>";
    presentMenu += "</div>"

    presentMenu += "<div id='appetizerMeal' class='subSectionBox'>";
    presentMenu += "<div id='menuItems' class='leftHorBox'>";

    presentMenu += "<dl id='menuItemList'>";

    presentMenu += "<dt id='name' class='menuItem'>Combination Plate</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Paper wrapped chicken (2), BBQ ribs (2), skewered beef (2), egg rolls (2), fried wonton (4), and fried shrimp (2)</dd>"

    presentMenu += "<dt id='name' class='menuItem'>Egg Rolls (4)</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Crispy and filled with carrots and cabbage.</dd>"

    presentMenu += "<dt id='name' class='menuItem'>Tottie Rolls (4)</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Vietnamese style egg rolls. A real treat wrapped in cool lettuce.</dd>"

    presentMenu += "<dt id='name' class='menuItem'>Shanghai Egg Rolls (4)</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Filled with pork, shiitake mushrooms and napa cabbage.</dd>"

    presentMenu += "<dt id='name' class='menuItem'>Spring Rolls (4)</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Vietnamese Goi Cuon: Soft rice paper rolls with bean sprouts, herbs and rice vermicelli.  Served wiith peanut sauce.</dd>"
    presentMenu += "<dd> Traditional (pork & shrimp)</dd>";
    presentMenu += "<dd>Salmon</dd>";
    presentMenu += "<dd>Shrimp Tempura</dd>";
    presentMenu += "<dd>Soft Shell</dd>";
    presentMenu += "<dd>Vegetarian</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Sugarcane Chicken</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Chicken meatballs skewered on sugarcane and served with cilantro, mint, cucumber, and rice vermicelli. Wrap it all in cool lettuce and dip in peanut sauce.</dd>"

    presentMenu += "<dt id='name' class='menuItem'>Beef on Skewers (4)</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'></dd>"

    presentMenu += "<dt id='name' class='menuItem'>Chicken Satay Sticks (2)</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Marinated chicken on a bamboo skewer, served with peanut sauce.</dd>"

    presentMenu += "<dt id='name' class='menuItem'>Soft Shell Crab with Ponzu Sauce</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'></dd>"

    presentMenu += "<dt id='name' class='menuItem'>Edamame</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'></dd>"
    
    presentMenu += "<dt id='name' class='menuItem'>Shrimp Puffs (6)</dt>";;
    presentMenu += "<dd id='desc' class='menuItemDesc'></dd>"

    presentMenu += "<dt id='name' class='menuItem'>BBQ Pork Ribs (4)</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'></dd>"

    presentMenu += "<dt id='name' class='menuItem'>Fried Wonton (10)</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'></dd>"

    presentMenu += "<dt id='name' class='menuItem'>Fried Tofu (8)</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Fried tofu wedges served with peanut or cucumber sauce.</dd>"

    presentMenu += "<dt id='name' class='menuItem'>Potstickers (5)</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'></dd>"

    presentMenu += "<dt id='name' class='menuItem'>Spicy Cucumber</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'></dd>"

    presentMenu += "</dl>"
    presentMenu += "</div"
    presentMenu += "</div>"
    presentMenu += "</div>"

    menuContainer.innerHTML = presentMenu;
    return presentMenu;
}

function soupContent() {
    presentMenu = "<div class='soupBox' id='menuContainer'>";

    presentMenu += "<div id='menuTitleBox' class='centeredHorBox'>";
    presentMenu += "<h2 id='menuTitle'>Soups</h2>";
    presentMenu += "</div>"

    presentMenu += "<div id='appetizerMeal' class='subSectionBox'>";
    presentMenu += "<div id='menuItems' class='leftHorBox'>";

    presentMenu += "<dl id='menuItemList'>";

    presentMenu += "<dt id='name' class='menuItem'>Sizzling Rice Soup</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Wonton Soup</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Egg Drop Soup</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Hot & Sour Soup Δ</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Chicken Corn Soup</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Spicy Seafood Noodle Soup Δ</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Mussels, fish, shrimp, scallops and vegetables with rice noodles.</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Tom Yum Δ</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Classic Thai soup made with lemon grass and Thai herbs.</dd>";
    presentMenu += "<dd>Chicken</dd>";
    presentMenu += "<dd>Shrimp</dd>";
    presentMenu += "<dd>Seafood (scallops white fish, mussels & shrimp)</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Tom Kha Gai Δ</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Thai herbs in coconut milk broth.</dd>";
    presentMenu += "<dd>Chicken</dd>";
    presentMenu += "<dd>Shrimp</dd>";
    presentMenu += "<dd>Seafood (scallops white fish, mussels & shrimp)</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Pho</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Vietnamese rice noodle soup.</dd>";
    presentMenu += "<dd>Tai (beef)</dd>";
    presentMenu += "<dd>Ga (chicken)</dd>";
    presentMenu += "<dd>Tai Bo Veien (beef with meatballs)</dd>";

    presentMenu += "</dl>"
    presentMenu += "</div"
    presentMenu += "</div>"
    presentMenu += "</div>"

    menuContainer.innerHTML = presentMenu;
    return presentMenu;
}

function thaiContent() {
    presentMenu = "<div class='thaiBox' id='menuContainer'>";

    presentMenu += "<div id='menuTitleBox' class='centeredHorBox'>";
    presentMenu += "<h2 id='menuTitle'>Thai and Vietnamese Entrees</h2>";
    presentMenu += "</div>"

    presentMenu += "<div id='appetizerMeal' class='subSectionBox'>";
    presentMenu += "<div id='menuItems' class='leftHorBox'>";

    presentMenu += "<dl id='menuItemList'>";

    presentMenu += "<dt id='name' class='menuItem'>Larb Δ</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Spicy minced meat salad with fresh mint and Thai herbs.</dd>";
    presentMenu += "<dd>Tofu</dd>";
    presentMenu += "<dd>Chicken (Gai) or Beef (Nua)</dd>";
    presentMenu += "<dd>Shrimp or Mussels</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Cucumber Chicken Salad</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Chicken and cool cucumber seasoned with mint, ginger and lemon. Topped with crispy rice noodles.</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Bun Tom</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Charbroiled pork, shrimp and Tottie rolls with fresh lettuce, fresh mint, peanuts and rice vermicelli.</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Papaya Salad Platter Δ</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Green papaya salad with Thai grilled chicken and sticky rice.</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Pad Thai Δ</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Traditional Thai stir fried rice noodles.</dd>";
    presentMenu += "<dd>Chicken, beef or shrimp</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Panang Δ</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Spicy Thai curry with your choice of the following:</dd>";
    presentMenu += "<dd>Chicken, beef, shrimp, or fish</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Kang Keo Wan Δ</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Spicy Thai green curry with your choice of the following:</dd>";
    presentMenu += "<dd>Chicken, beef, shrimp, fish, or mussels</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Pad Kra Pao Δ</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Stir fried w/Thai basil in chili sauce, onions, red bell peppers & bamboo shoots.</dd>";
    presentMenu += "<dd>Chicken, beef, shrimp, fish, or mussels</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Pad Khing Δ</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Choice of chicken, pork, beef or shrimp stir fried with fresh ginger, mushrooms and onion.</dd>";
    presentMenu += "<dd>Chicken, beef, shrimp, pork, or shrimp</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Lemon Grass Stir-Fry Δ</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Stir fried with lemon grass, pea pods, red bell peppers, onions and mushrooms.</dd>";
    presentMenu += "<dd>Chicken, beef, or shrimp</dd>";
    
    presentMenu += "<dt id='name' class='menuItem'>Thai Stir-Fry Δ</dt>";;
    presentMenu += "<dd id='desc' class='menuItemDesc'>With mixed vegetables and Thai basil sauce.</dd>";
    presentMenu += "<dd>Chicken, beef, or shrimp</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Crispy Chicken with Thai Basil</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'></dd>";

    presentMenu += "<dt id='name' class='menuItem'>Crispy Beef with Thai Basil</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'></dd>";

    presentMenu += "<dt id='name' class='menuItem'>Dragonfly Noodles</dt>";
    presentMenu += "<dd>Chicken or beef</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Shoji Noodles</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Stir-fried rice noodles with broccoli, bean sprouts, onions and Thai basil.</dd>";
    presentMenu += "<dd>Chicken, beef, or shrimp</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Chiang Mai Noodles Δ</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Thai curry chicken, Thai basil and bamboo shoots with rice noodles.</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Pad Se Ew Δ</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Spicy chow fun noodles with broccoli and bok choy.</dd>";
    presentMenu += "<dd>Chicken, beef, or shrimp</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Pad Kee Mao Δ</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Sautéed vegetables with chow fun noodles, basil, Thai spices.</dd>";
    presentMenu += "<dd>Chicken, beef, or shrimp</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Pad Lard Na</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Chow fun noodles topped with onion, broccoli, bok choy, pea pods, stir-fried with brown sauce.</dd>";
    presentMenu += "<dd>Chicken, beef, or shrimp</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Salmon with Basil-Ginger Sauce</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Grilled salmon with a Thai basil and ginger sauce. Served with steamed mixed vegetables.</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Red Curry Salmon Δ</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Grilled salmon with Thai red curry sauce. Served with steamed mixed vegetables.</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Thai Curry Salmon w/ Rice Noodles Δ</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'></dd>";

    presentMenu += "<dt id='name' class='menuItem'>Spicy Thai Seafood Δ</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>White fish, shrimp and mussels stir-fried with mushrooms, bamboo shoots, red bell peppers, onions and Thai basil.</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Thai Fish Filet Δ</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Braised white fish with Thai basil, mushrooms, onions, red bell peppers and bamboo shoots.</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Soft Shell Crab with Curry Δ</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Soft shell crab, Thai basil, bamboo shoots, mushrooms, onions and red bell peppers stir-fried with yellow curry.</dd>";

    presentMenu += "</dl>";
    presentMenu += "</div";
    presentMenu += "</div>";
    presentMenu += "</div>";

    menuContainer.innerHTML = presentMenu;
    return presentMenu;
}

function entreeContent() {
    presentMenu = "<div class='entreeBox' id='menuContainer'>";

    presentMenu += "<div id='menuTitleBox' class='centeredHorBox'>";
    presentMenu += "<h2 id='menuTitle'>Chinese Entrees</h2>";
    presentMenu += "</div>"

    presentMenu += "<div id='entreeMeal' class='subSectionBox'>";
    presentMenu += "<div id='menuItems' class='leftHorBox'>";

    presentMenu += "<dl id='menuItemList'>";

    presentMenu += "<dt id='name' class='menuItem'>Chicken with Vegetables</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Chicken Chop Suey</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Chicken with Broccoli</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Chicken with Pea Pods</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Curry Chicken Δ</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Chicken with Cashew Nuts</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Kung Pao Chicken Δ</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Chicken with Garlic Sauce Δ</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Chicken with Black Bean Sauce</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Sesame Chicken</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Tangerine Chicken</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Lemon Chicken</dt>";

    presentMenu += "<dt id='name' class='menuItem'>General Tao’s Chicken Δ</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Moo Shu Chicken</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Sweet and Sour Chicken</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Chicken Egg Fu Yong</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Tangerine Beef</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Kung Pao Beef  Δ</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Beef with Broccoli</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Mongolian Beef</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Beef or Pork with Vegetables</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Beef with Green Peppers</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Beef with Oyster Sauce</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Beef or Pork Chop Suey</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Shredded Pork Szechwan Style Δ</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Sweet and Sour Pork</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Pork Egg Fu Yong</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Kung Pao Shrimp Δ</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Shrimp with Pea Pods</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Shrimp Chop Suey</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Shrimp with Garlic Sauce Δ</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Hot Braised Shrimp Δ</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Tangerine Shrimp</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Shrimp with Lobster Sauce</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Moo Shu Shrimp</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Shrimp with Black Bean Sauce</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Scallops with Black Bean Sauce</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Mussels with Black Bean Sauce</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Sweet and Sour Shrimp</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Shrimp Egg Fu Yong</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Ginger Fish</dt>";

    presentMenu += "</dl>"
    presentMenu += "</div"
    presentMenu += "</div>"
    presentMenu += "</div>"

    menuContainer.innerHTML = presentMenu;
    return presentMenu;
}

function noodleContent() {
    presentMenu = "<div class='noodleBox' id='menuContainer'>";

    presentMenu += "<div id='menuTitleBox' class='centeredHorBox'>";
    presentMenu += "<h2 id='menuTitle'>Chinese Noodles</h2>";
    presentMenu += "</div>"

    presentMenu += "<div id='noodleMeal' class='subSectionBox'>";
    presentMenu += "<div id='menuItems' class='leftHorBox'>";

    presentMenu += "<dl id='menuItemList'>";

    presentMenu += "<dt id='name' class='menuItem'>Chow Mein</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Chicken, beef, pork, shrimp, vegetables or</dd>";
    presentMenu += "<dd>House Special (chicken, beef and shrimp)</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Chow Fun</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Chicken, beef, shrimp, or</dd>";
    presentMenu += "<dd>House Special (chicken, beef and shrimp)</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Tottie’s Pan Fried Noodles</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Egg noodles pan fried until crispy; smothered with shrimp, chicken, beef, broccoli, mushrooms, snow peas and brown sauce.</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Seafood Pan Fried Noodles</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Egg noodles pan fried until crispy; with scallops, white fish, shrimp and mixed vegetables.</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Pork Pan Fried Noodles</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Egg noodles pan fried until crispy; with pork, shiitake mushrooms and napa cabbage.</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Spicy Seafood Noodle Soup Δ</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Mussels, fish, shrimp, scallops and vegetables with rice noodles.</dd>";

    presentMenu += "</dl>"
    presentMenu += "</div"
    presentMenu += "</div>"
    presentMenu += "</div>"

    menuContainer.innerHTML = presentMenu;
    return presentMenu;
}


function veggieContent() {
    presentMenu = "<div class='veggieBox' id='menuContainer'>";

    presentMenu += "<div id='menuTitleBox' class='centeredHorBox'>";
    presentMenu += "<h2 id='menuTitle'>Chinese Veggies</h2>";
    presentMenu += "</div>"

    presentMenu += "<div id='veggieMeal' class='subSectionBox'>";
    presentMenu += "<div id='menuItems' class='leftHorBox'>";

    presentMenu += "<dl id='menuItemList'>";

    presentMenu += "<dt id='name' class'menuItem'>Mixed Steamed Vegetables</dt>";

    presentMenu += "<dt id='name' class'menuItem'>Vegetable Chop Suey</dt>";

    presentMenu += "<dt id='name' class'menuItem'>String Beans with Brown Sauce</dt>";

    presentMenu += "<dt id='name' class'menuItem'>Hot and Spicy Eggplant Δ</dt>";

    presentMenu += "<dt id='name' class'menuItem'>Home Style Bean Curd</dt>";

    presentMenu += "<dt id='name' class'menuItem'>Szechwan Style Bean Curd Δ</dt>";

    presentMenu += "<dt id='name' class'menuItem'>Vegetable Moo Shu</dt>";

    presentMenu += "<dt id='name' class'menuItem'>Vegetable Egg Fu Yong</dt>";

    presentMenu += "<dt id='name' class'menuItem'>Sautéed Baby Bok Choy</dt>";

    presentMenu += "</dl>";
    presentMenu += "</div";
    presentMenu += "</div>";
    presentMenu += "</div>";

    menuContainer.innerHTML = presentMenu;
    return presentMenu;
}

function riceContent() {
    presentMenu = "<div class='riceBox' id='menuContainer'>";

    presentMenu += "<div id='menuTitleBox' class='centeredHorBox'>";
    presentMenu += "<h2 id='menuTitle'>Rice</h2>";
    presentMenu += "</div>"

    presentMenu += "<div id='riceMeal' class='subSectionBox'>";
    presentMenu += "<div id='menuItems' class='leftHorBox'>";

    presentMenu += "<dl id='menuItemList'>";

    presentMenu += "<dt id='name' class='menuItem>Tottie’s Fried Rice</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc>Combination of shrimp, chicken and beef</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Shrimp Fried Rice</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Beef Fried Rice</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Chicken or Pork Fried  Rice</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Vegetable Fried Rice</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Egg Fried Rice</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Thai Fried Rice</dt>"; 
    presentMenu += "<dt id='name' class='menuItem'>Seasoned with Thai basil.</dt>";                         
    presentMenu += "<dd>Chicken, Pork or Beef</dd>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Shrimp</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Steamed Brown Rice</dt>";

    presentMenu += "</dl>";
    presentMenu += "</div";
    presentMenu += "</div>";
    presentMenu += "</div>";

    menuContainer.innerHTML = presentMenu;
    return presentMenu;
}

function dessertContent() {
    presentMenu = "<div class='dessertBox' id='menuContainer'>";

    presentMenu += "<div id='menuTitleBox' class='centeredHorBox'>";
    presentMenu += "<h2 id='menuTitle'>Desserts</h2>";
    presentMenu += "</div>"

    presentMenu += "<div id='dessertMeal' class='subSectionBox'>";
    presentMenu += "<div id='menuItems' class='leftHorBox'>";

    presentMenu += "<dl id='menuItemList'>";

    presentMenu += "<dt id='name' class='menuItem'>Fried Honey Banana (4)</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Served with homemade coconut ice cream.</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Homemade Ice Cream</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Ask your server for available flavors.</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Homemade Ice Cream Sampler</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Can’t decide on a flavor? Try the sampler!</dd>";

    presentMenu += "<dt id='name' class='menuItem'>Mango with Sticky Rice</dt>";
    presentMenu += "<dd id='desc' class='menuItemDesc'>Sticky rice topped with sliced mango and sweetened coconut milk.</dd>";

    presentMenu += "</dl>";
    presentMenu += "</div";
    presentMenu += "</div>";
    presentMenu += "</div>";

    menuContainer.innerHTML = presentMenu;
    return presentMenu;
}

function specialsContent() {
    presentMenu = "<div class='specialsBox' id='menuContainer'>";

    presentMenu += "<div id='menuTitleBox' class='centeredHorBox'>";
    presentMenu += "<h2 id='menuTitle'>Lunch Specials</h2>";
    presentMenu += "</div>"

    presentMenu += "<div id='specialsMeal' class='subSectionBox'>";
    presentMenu += "<div id='menuItems' class='leftHorBox'>";

    presentMenu += "<dl id='menuItemList'>";

    presentMenu += "<dt id='name' class='menuItem'>Available Tuesday though Friday 11 AM to 3 PM</dt>";
    presentMenu += "<dt id='name' class='menuItem'>Served with  an Egg Roll and your choice of Steamed or Fried Rice</dt>";
    presentMenu += "<dt id='name' class='menuItem'>Dine-In Lunch Specials Include Egg  Drop or Hot & Sour Soup</dt>";
    presentMenu += "</br>";

    presentMenu += "<dt id='name' class='menuItem'>Pad Thai Chicken Δ</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Panang or Kang Keo Wan Chicken Δ</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Pad Kra Pao Chicken Δ</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Kung Pao Chicken Δ</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Chicken Chop Suey</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Chicken, beef or pork with vegetables</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Chicken with cashews</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Chicken with black bean sauce</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Sliced chicken with garlic sauce Δ</dt>";

    

    presentMenu += "<dt id='name' class='menuItem'>Pad Thai Beef Δ</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Panang or Kang Keo Wan Beef Δ</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Pad Kra Pao Beef Δ</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Kung Pao Beef Δ</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Beef with broccoli</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Beef Chop Suey</dt>";

    

    presentMenu += "<dt id='name' class='menuItem'>Vegetable Chow Mein</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Chicken Chow Mein</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Beef Chow Mein</dt>";

    presentMenu += "<dt id='name' class='menuItem'>Shrimp Chow Mein</dt>";

    presentMenu += "</dl>";
    presentMenu += "</div";
    presentMenu += "</div>";
    presentMenu += "</div>";

    menuContainer.innerHTML = presentMenu;
    return presentMenu;     
}