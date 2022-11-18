                            //DZ_10
vegetablesList = ['cabbage', 'avocado', 'tomato'];
fruitsList = ['grapes', 'raspberry' ,'çoconut'];
vegetablesPrice = [8,30,10];
fruitsPrice = [20,25,50];
    finalSum = 0;
do {
    period = prompt('Enter period: winter or summer').replaceAll(" ","").toLowerCase();
} while (period !== "winter" && period !== "summer");
    if (period === "winter") {
        coefficiient = 2;
    } else {
        coefficiient = 0.8;
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

finalSum = countOfProduct * coefficiient * priceOfProduct;

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
  `);