

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


// hero = ['Ivan'];
// native = ['York','Of'];
// destination = ['Poltava','In'];
// rainbow = hero.concat(native,destination);
// console.log(rainbow.reverse());

// rainbow.splice(0,2,'Richard');
// rainbow.splice(3,1,'Gave','Battle','In','Vain');
// console.log(rainbow);


// colors = ['firebrick','saddlebrown','yellow','green','dodgerblue','darkslateblue','darkviolet'];

// for (i = 0; i < colors.length; i++) {
//         document.write(`
//         <div class="wrapper">
//         <div class = "circle" style = "background-color: ${colors[i]}"></div>
//         <div class="rainbow">${rainbow[i]}</div>
//         </div>
//    `)
// }




// let dinosaurs = [
//     'Tiranosaur',
//     'Velociraptor',
//     'Mouse',
//     'Krocodile',
//     'Snake',
//     'Stegozavr',
//     'Triceraptors',
//     'Barihozaur'
// ]
//
// console.log(dinosaurs);
//  for (let i = 0; i < dinosaurs.length; i++) {
//      console.log('New' + dinosaurs[i]);
//  }




// Для элементов массивов monday и tuesday необходимо выполнить следующие методы:
//
//
//
//     Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
//     Оставить только те задачи, на выполнение которых нужно более 2-х часов.
//     Умножить результат на часовую ставку (amount) и добавить полученное значение в качестве третъего элемента в массив.
//     Вывести в html таблицу, которая состоит из ячеек с задачами в виде:
//     <tr>
// <td>Task name: Write a tutorial</td>
// <td>Taks duration: 3 hours</td>
// <td>Task amount: $300</td>
// </tr>
// Используем только методы concat/forEach/map/filter/join (по надобности, все не нужно).


                                      //DZ_21

// let amount = 100;
//
// let monday = [
//     ['Write a tutorial',180],
//     ['Some web development',120]
// ];
//
// let tuesday = [
//     ['Keep writing that tutorial',240],
//     ['Some more web development',360],
//     ['A whole lot of nothing',240]
// ];


// function newTime(monday, tuesday) {
//      for(let i = 0; i < monday.length; i++) {
//          monday[i][1] / 60.push[2];
//      }
// }

 //newTime = monday.map(function () { return monday[0][1] / 60 });
// console.log(newTime);

//console.log(monday[0][1] / 60);

//monday.filter(element => element.[0][1] > 2)




// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму та кількість позитивних елементів.
//     Знайти мінімальний елемент масиву та його порядковий номер.
//     Знайти максимальний елемент масиву та його порядковий номер.
//     Визначити кількість негативних елементів.
//     Знайти кількість непарних позитивних елементів.
//     Знайти кількість парних позитивних елементів.
//     Знайти суму парних позитивних елементів.
//     Знайти суму непарних позитивних елементів.
//     Знайти добуток позитивних елементів.
//     Знайти найбільший серед елементів масиву, ост альні обнулити.


                                        //DZ_20

let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]


let positive = arr.filter(elem =>(elem > 0));
let sumPositive = positive.reduce(function (x,y) {return x + y},0);
let maxElem = positive.reduce(function (x,y) {return (x > y) ? x : y  });
let negative = arr.filter(elem =>(elem < 0));
let withOutdoublePositive = positive.filter((v, i, a) => a.indexOf(v) == i)
.map(v => [v, positive.filter(x => x == v).length]);


let double = positive.filter(item => x === x).length


console.log(positive.length); //14
console.log(sumPositive); //438
console.log(maxElem); //76
console.log(negative.length); //10
console.log(positive);
console.log(withOutdoublePositive);
console.log(double);
