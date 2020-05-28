let menu = [
    "Paneer Tikka",
    "Garlic Naan",
    "Chicken Masala",
    "Potato Onion Rings",
    "Paneer Butter Masala"
]

function isVeg (food) {
    if(food.toLowerCase().indexOf("chicken") !== -1) return false;
    if(food.toLowerCase().indexOf("egg") !== -1) return false;
    return true;
}

function onionGarlicFree (food) {
    if(food.toLowerCase().indexOf("onion") !== -1) return false;
    if(food.toLowerCase().indexOf("garlic") !== -1) return false;
    return true;
}

let vegmenu = menu.filter(isVeg)
let jainmenu = menu.filter(isVeg).filter(onionGarlicFree)

console.log(vegmenu)
console.log(jainmenu)