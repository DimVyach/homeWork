

/*
                                         //DZ_10
vegetablesList = ['cabbage', 'avocado', 'tomato'];
fruitsList = ['grapes', 'raspberry' ,'coconut'];
vegetablesPrice = [8,30,10];
fruitsPrice = [20,25,50];
    finalSum = 0;
do {
    period = prompt('Enter period: winter or summer').replaceAll(" ","").toLowerCase();
} while (period !== "winter" && period !== "summer");
    if (period === "winter") {
        coefficient = 2;
    } else {
        coefficient = 0.8;
    }
do {
    category = prompt("Choose category in which you want to buy products : vegetables or fruits").replaceAll(" ","").toLowerCase();
} while (category !== "vegetables" && category !== "fruits");

if (category === "vegetables") {
    do {
        product = prompt("Choose product from category vegetables : cabbage,avocado,tomato").replaceAll(" ","").toLowerCase();
        vegetablesType = vegetablesList.indexOf(product);
        priceOfProduct = vegetablesPrice[vegetablesType];
    } while (product !== "cabbage" && product !== "avocado" && product !=="tomato" );
} else {
    do {
        product = prompt("Choose category fruits: grapes,raspberry,coconut").replaceAll(" ","").toLowerCase();
        fruitsType = fruitsList.indexOf(product);
        priceOfProduct = fruitsPrice[fruitsType];
    } while (product !== "grapes" && product !== "raspberry" && product !=="coconut");
}
do {
    countOfProduct = parseInt(prompt(`Enter count of ${product}` ).replaceAll(" ",""));
} while (isNaN(countOfProduct) || countOfProduct <= 1);

finalSum = countOfProduct * coefficient * priceOfProduct;

if (category === "vegetables") {
    productImg = `<img src = "images/vegetables/${product}.svg" alt = "${product}" width = "100" height = "100"></img>`;
} else {
    productImg = `<img src = "images/fruits/${product}.svg" alt = "${product}" width = "100" height = "100"></img>`;
}

document.write(`
      <div class = "product" align = "center">
      ${productImg}
      <p>Selected product:<b>${product}</b></p>
      <p>Count of${product}:<b>${countOfProduct}</b></p>
      <p>Selected period:<b>${period}</b></p>
      <p>Final sum:<b>${finalSum} UAH</b></p>
      </div>
  `);*/





                                // DZ_12

/*
sports = [
    ['skier','⛷'],
    ['snowboarder','🏂'],
    ['apple','🍎'],
    ['hockey','🏒'],
    ['ice skate','⛸'],
    ['swimmer','🏊'],
    ['surfer','🏄‍'],
    ['watermelon','🍉'],
    ['lemon','🍋'],
    ['rowboat','🚣'],
    ['bicyclist','🚴‍']
];
 summer_sports = sports.splice(5,11);
 winter_sports = sports.splice(0,);
 fruits = [];
 fruits = fruits.concat(summer_sports.splice(2,2));
 fruits = fruits.concat(winter_sports.splice(2,1));
    console.log("*** Summer sports ***");
for (i = 0; i < summer_sports.length; i++) {
    console.log(summer_sports[i].join(" : "));
}
    console.log("*** Winter sports ***");
for (i = 0; i < winter_sports.length; i++) {
    console.log(winter_sports[i].join(" : "));
}
    console.log("*** Fruits ***");
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i].join(" : "));
}*/

//DZ_14

/*
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement = array.indexOf(5);
if (removeElement > -1) {
    array.splice(removeElement, 1);
}
console.log(array);
*/


                                       //DZ_11


hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];
rainbow = hero.concat(native,destination);
console.log(rainbow.reverse());

rainbow.splice(0,2,'Richard');
rainbow.splice(3,1,'Gave','Battle','In','Vain');
console.log(rainbow);


colors = ['firebrick','saddlebrown','yellow','green','dodgerblue','darkslateblue','darkviolet'];

for (i = 0; i < colors.length; i++) {
        document.write(`
        <div class="wrapper">
        <div class = "circle" style = "background-color: ${colors[i]}"></div>
        <div class="rainbow">${rainbow[i]}</div>
        </div>
   `)
}




