var hNode;
var m;
////////////////ITEM_CLASS////////////////

////////////////MENU_MODULE////////////////
var dmmenu = document.getElementById("menu");
//med, item, tm, berries, key items, z
var menu = ["Pokedex","Pokemon", 
            "Bag", "Options"];
var menuCategories = {"Pokedex":0, "Pokemon":1, "Bag":2, "Options":3}
//Populate Menu list
//TODO: create whole LI inside for loop
var mo = dmmenu.getElementsByClassName("menuOpt");
for (m = 0; m < mo.length; m++) {
    hNode = document.createTextNode(menu[m]);
    mo[m].appendChild(hNode);
    mo[m].tabIndex=1;
}
//Give default focus to Pokedex
mo[menuCategories.Pokedex].focus();
/////////////////////////////////////////////////Menu Keyboard Controls Event Listener & Handler
dmmenu.addEventListener('keydown', function kd(event) {
    //Press the Left direction key
    if(event.keyCode == 37) {
      mo[(m+mo.length-1) % mo.length].focus();
      m = (m+mo.length-1) % mo.length;
    }
    //Press the Right direction key
    else if(event.keyCode == 39) {
      mo[(m+mo.length+1) % mo.length].focus();
      m = (m+mo.length+1) % mo.length;
    }
    //Press the Up direction key
    else if(event.keyCode == 38) {
      mo[(m+mo.length-1) % mo.length].focus();
      m = (m+mo.length-1) % mo.length;
    }
    //Press the Down direction key
    else if(event.keyCode == 40) {
      mo[(m+mo.length+1) % mo.length].focus();
      m = (m+mo.length+1) % mo.length;     
    }
    //Press the Z (action) key
    else if(event.keyCode == 90) {
      dmmenu.style.display = "none";
      dmbag.style.display = "block";
      dmbag.focus();
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
var dmbag = document.getElementById("dm-bag")
var i = 0;
var j = 0;
var pNode;

/* hash setup 
var bag = {
    "berries": ["mago","chesto", "razz"], 
    "items": ["pokeball", "mach belt"],
    "free space": ["nothing"]
};
document.getElementById("demo").innerHTML =
bag.berries + "<br>" + bag.items[2]; */
//med, item, tm, berries, key items, z
var bag = [
  ["Potion","Hyper potion","Revival herb"],
  ["Pokeball", "Leaf Stone", "Mach Belt"],
  ["TM 18", "TM 35", "TM 36", "TM 108"],
  ["Chesto Berry", "Razz Berry", "Mago Berry"],
  ["Old Rod", "Acro Bike", "VS Recorder"],
  ["nothing"]
];
var bagCategories = {"Medicine":0, "Items":1, "TM":2, "Berries":3,"Key Items":4, "Free Space":5}

//Display list (Medicine) as default
pNode = document.createElement('div');
pNode.innerHTML = bag[(i+bag.length) % bag.length] + "<br>";
      //rmv class itmframe when looking at list
      pNode.className = pNode.className.replace(/(?:^|\s)itmframe(?!\S)/g , '' );
      dmbag.appendChild(pNode);

////////////////////////////////////////////////
//Bag Keyboard Controls Event Listener & Handler
//
dmbag.addEventListener('keydown', function kd(event) {
/*limits list to linear traversal, not circular
    if ((i % bag.length) === 0) { 
      i = 0
    } */
//Press the Left direction key
    if(event.keyCode == 37) {
      pNode.innerHTML = bag[(i+bag.length-1) % bag.length] + "<br>";
      //rmv class itmframe when looking at list
      pNode.className = pNode.className.replace(/(?:^|\s)itmframe(?!\S)/g , '' );
      dmbag.appendChild(pNode);      
      i = (i+bag.length-1) % bag.length;
    }
//Press the Right direction key
    else if(event.keyCode == 39) {
      pNode.innerHTML = bag[(i+bag.length+1) % bag.length] + "<br>";
      //rmv class itmframe when looking at list
      pNode.className = pNode.className.replace(/(?:^|\s)itmframe(?!\S)/g , '' );      
      dmbag.appendChild(pNode);      
      i = (i+1) % bag.length;
    }
//Press the Up direction key
    else if(event.keyCode == 38) {
      pNode.innerHTML = bag[(i+bag.length) % bag.length][(j+bag[(i+bag.length) % bag.length].length-1) % bag[(i+bag.length) % bag.length].length] + "<br>";
      //add class itmframe when looking at item
      pNode.className = "itmframe";
//      dmbag.appendChild(pNode);
      j = (j-1) % bag[(i+bag.length) % bag.length].length
   }
//Press the Down direction key
    else if(event.keyCode == 40) {
      pNode.innerHTML = bag[(i+bag.length) % bag.length][(j+bag[(i+bag.length) % bag.length].length+1) % bag[(i+bag.length) % bag.length].length] + "<br>";
      //add class itmframe when looking at item 
      pNode.className = "itmframe";
//      dmbag.appendChild(pNode);
      j = (j+1) % bag[(i+bag.length) % bag.length].length
   }
  //Press the Z (action) key
    else if(event.keyCode == 90) {
      
   }
  //Press the X (action) key
    else if(event.keyCode == 88) {
      pNode.innerHTML = bag[(i+bag.length) % bag.length][(j+bag[(i+bag.length) % bag.length].length+1) % bag[(i+bag.length) % bag.length].length] + "<br>";
      //add class itmframe when looking at item 
      pNode.className = "itmframe";
//      dmbag.appendChild(pNode);
      j = (j+1) % bag[(i+bag.length) % bag.length].length
   }
  event.stopPropagation();
});
