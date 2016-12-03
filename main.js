var textNode;
var m;
////////////////ITEM_CLASS////////////////

////////////////MENU_MODULE////////////////
var dmmenu = document.getElementById("dm-menu");
//med, item, tm, berries, key items, z
var menu = ["Pokedex","Pokemon", 
            "Bag", "Options"];
var menuCategories = {"Pokedex":0, "Pokemon":1, "Bag":2, "Options":3}
//Populate Menu list
//TODO: create whole LI inside for loop
var menuOptions = dmmenu.getElementsByClassName("menuOpt");
for (m = 0; m < menuOptions.length; m++) {
    textNode = document.createTextNode(menu[m]);
    menuOptions[m].appendChild(textNode);
    menuOptions[m].tabIndex=1;
}
//Give default focus to Pokedex
menuOptions[menuCategories.Pokedex].focus();
/////////////////////////////////////////////////Menu Keyboard Controls Event Listener & Handler
dmmenu.addEventListener('keydown', function kd(event) {
    //Press the Left direction key
    if(event.keyCode == 37) {
      menuOptions[(m+menuOptions.length-1) % menuOptions.length].focus();
      m = (m+menuOptions.length-1) % menuOptions.length;
    }
    //Press the Right direction key
    else if(event.keyCode == 39) {
      menuOptions[(m+menuOptions.length+1) % menuOptions.length].focus();
      m = (m+menuOptions.length+1) % menuOptions.length;
    }
    //Press the Up direction key
    else if(event.keyCode == 38) {
      menuOptions[(m+menuOptions.length-1) % menuOptions.length].focus();
      m = (m+menuOptions.length-1) % menuOptions.length;
    }
    //Press the Down direction key
    else if(event.keyCode == 40) {
      menuOptions[(m+menuOptions.length+1) % menuOptions.length].focus();
      m = (m+menuOptions.length+1) % menuOptions.length;     
    }
    //Press the Z (action) key
    else if(event.keyCode == 90) {
      dmmenu.style.display = "none";
  //NOTE: hardcoded to go to bag
      //TODO: make generic
      dmbag.style.display = "inline-block";
      bagOptions[bagCategories.Medicine].focus();
    }
    //Press the X (action) key
    else if(event.keyCode == 88) {
      dmmenu.style.display = "none";
      document.getElementById("demo").focus();
    }
  event.stopPropagation();
});
////////////////BAG_MODULE////////////////
//TODO: add, remove, & sort items functions
var dmbag = document.getElementById("dm-bag");
//med, item, tm, berries, key items, z
var bag = [
  ["Potion","Hyper potion","Revival herb"],
  ["Pokeball", "Leaf Stone", "Mach Belt"],
  ["TM 18", "TM 35", "TM 36", "TM 108"],
  ["Chesto Berry", "Razz Berry", "Mago Berry"],
  ["Old Rod", "Acro Bike", "VS Recorder"],
  ["nothing"]
];
var bagCategories = {"Medicine":0, "Items":1, "TM":2, "Berries":3,"KeyItems":4, "FreeSpace":5}

var bagOptions = dmbag.getElementsByClassName("bagOpt");
//Create the medicine html list
bagOptions[bagCategories.Medicine].appendChild(makeUL(bag[bagCategories.Medicine],"medOpt"));
//Create the item html list
bagOptions[bagCategories.Items].appendChild(makeUL(bag[bagCategories.Items],"itemOpt"));
//Create the tm html list
bagOptions[bagCategories.TM].appendChild(makeUL(bag[bagCategories.TM],"tmOpt"));
//Create the berries html list
bagOptions[bagCategories.Berries].appendChild(makeUL(bag[bagCategories.Berries],"berOpt"));
//Create the key items html list
bagOptions[bagCategories.KeyItems].appendChild(makeUL(bag[bagCategories.KeyItems],"keyOpt"));
//Create the free space html list
bagOptions[bagCategories.FreeSpace].appendChild(makeUL(bag[bagCategories.FreeSpace],"fspOpt"));

/////////////////////////////////////////////////Bag Category Keyboard Controls Event Listener & Handler
dmbag.addEventListener('keydown', function kd(event) {
    //Press the Left direction key
    if(event.keyCode == 37) {
      bagOptions[(m+bagOptions.length-1) % bagOptions.length].focus();
      m = (m+bagOptions.length-1) % bagOptions.length;
    }
    //Press the Right direction key
    else if(event.keyCode == 39) {
      bagOptions[(m+bagOptions.length+1) % bagOptions.length].focus();
      m = (m+bagOptions.length+1) % bagOptions.length;
    }
    //Press the Up direction key
    else if(event.keyCode == 38) {

    }
    //Press the Down direction key
    else if(event.keyCode == 40) {

    }
    //Press the Z (action) key
    else if(event.keyCode == 90) {
    }
    //Press the X (action) key
    else if(event.keyCode == 88) {
      dmbag.style.display = "none";
      dmmenu.style.display = "inline-block";
      menuOptions[menuCategories.Bag].focus();
    }
  event.stopPropagation();
});


//===========================================//
////////////////UTILITY_LIBRARY////////////////
/*----Turns array into HTML ul----*/
function makeUL(array, clsName) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');
        // Set its class name:  
        item.className = clsName;
        // Set its contents:
        var tNode = document.createTextNode(array[i]);
        item.appendChild(tNode);
        item.tabIndex = 1;
        // Add it to the list:
        list.appendChild(item);
    }
    // Finally, return the constructed list:
    return list;
}
