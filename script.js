//namePerson = prompt("Kak тебя зовут?"); 
//alert("Hello" + " " + namePerson  + "! " + "How are you?");
 //console.log("how much");

 //a = 5
 //b = 7
 //z = a + b
 //console.log(z)

 
 //nameUser = prompt("Whats your name?");
 //alert("Hello" + " " + nameUser +" !How are you?" );

 //confirm("Тебе есть 18?");

 //date = new Date();
 //year = date.getFullYear();
 //console.log(date);

 //yearOfBirth = +prompt("You year of birth?")
 //userAge = year + yearOfBirth;
 //console.log(year,yearOfBirth)
 //console.log(userAge);

 //userName = prompt("What is your name?");
 //age = prompt("How old are you?");
 //alert(`Hello ${userName}! Your age is ${age}. How are you?` );


 //document.write("Hello World!");
 //document.write("<h1>Hello world!</h1>");
 //document.write(`<ul>
   // <li>Title</li>
    //<li>Title</li>
    //<li>Title</li>
    //<li>Title</li>
    //<li>Title</li>
  //<ul>`);

  //userName = prompt("What is your name?");
  //age = prompt("How old are you?");
  //document.write(`
  //<h1 class= red>CV</h1>
  //<h3>My name is ${userName} </h3>
  //<h5>I m ${age} years old! </h5>
//`);


//userName = prompt("What is your name?").trim();
//console.log(`My name is ${userName}!`);

//animal = "Elephant";
//console.log(animal.length);
//console.log(animal[3]);
//console.log(animal[animal.length-1]);//t


    //indexOf();
//color = "Yellow"
//console.log(color.indexOf("e"));//1
//console.log(color.indexOf("p"));//-1
//console.log(color.indexOf("o"));//4

     //NUMBER METHODS
     //Math.floor  (уменьшает до меньшего значения)
     //Math.ceil   (увеличивает до большего значения)
     //Math.round  (округляет математическим способом)
     //Math.trunc  (убирает все значения после точки)


//value = 12.48098868589
//console.log(Math.floor(value));//12
//console.log(Math.ceil(value));//13
//console.log(Math.round(value));//12
//console.log(Math.trunc(value));//12

           //% остаток от деления  (чтобы узнать остаток от деления)
  //x = 10%3
  //console.log(x);          
           
        //isNAN(value);(проверяет является ли значение числом)
//isNaN(10); //false
//isNaN("10"); //false
//isNAN("ddddfg"); //true

          //typeof (строгая проверка типа)
  //typeof 10  //number
  //typeof "10"  //string
 //typeof "Hello"  //string
 //typeof null  //object
 //typeof undefined //undefined


              //null - является обьектом
     //hello = null
     //hello = prompt("Anithing?");
     //alert(hello);        

            //undefined
 //let hello
 //console.log(hello);//undefined
 
// number1 = +prompt("Write the first number");
 //number2 = +prompt("Write the second number");
 //alert(`User entered ${number1} and ${number2}`);
  //result1 = (number1 + number2);
  //result2 = (number1 - number2);
  //result3 = (number1 * number2);
  //result4 = (number1 / number2);
  //alert(result1);
 

//a = +prompt("Write the first number");
//b = +prompt("Write the second number"); 
  //alert(`${a} + ${b} = ${a + b}`);
  //alert(`${a} - ${b} = ${a - b}`);
  //alert(`${a} * ${b} = ${a * b}`);
  //alert(`${a} / ${b} = ${a / b}`);

//time = +prompt("What time is it?");
//seconds = time * 3600;
//alert(`It\`s ${seconds} seconds`);

//email = prompt("Please add your e-mail?").replaceAll(" ","");
//if (!email) {
  //  console.log("Email can't be empty?");
//} else if(email.length < 6) {
  //  console.log("Email must be have more than 5 simbols!");
//} else if (email.indexOf("@") === -1) {
  //  console.log("Email need @");
//} else if (email.indexOf("@")===0) {
  //  console.log("@ can't be like first letter");
//} else if(email.indexOf("@")===email.length -1) {
  //  console.log("@ can't be like last letter");
//} else {
  //  document.write(`Your email is ${email}`);
//}

             // Home_Work 4
//firstNumber = +prompt("Please enter first number!");
//secondNumber = +prompt("Please enter second number!");
//thirdNumber = +prompt("Please enter third number!");
//sum = firstNumber + secondNumber + thirdNumber;
//arithmeticMean =sum / 3;
//alert(arithmeticMean);


// englishColor = prompt("Enter rgb English color?");

// if(englishColor.toLowerCase() === "red") {
//     console.log("Червоний");
// } else if(englishColor.toLowerCase() === "blue") {
//     console.log("Блакитний");
// } else if(englishColor.toLowerCase() === "green") {
//     console.log("Зелений");
// } else {
//     console.log("Такого кольору не існує!");
// }


// switch...case
//englishColor = prompt("Enter rgb English color?");

//switch(englishColor.toLowerCase()) {
  //  case "red":
    //    console.log("Червоний");
      //  break;
    //case "blue":
      //  console.log("Блакитний");
        //break;
    //case "green":
      //  console.log("Зелений");
        //break;
    //default:
      //  console.log("Такого кольору не існує!");
//}

//let numOrStr = prompt('input number or string');
//console.log(numOrStr)

//if(numOrStr === null) {
  //console.log('ви скасували')
//} else if( numOrStr.trim() === '' ) {
  //console.log('Empty String');
//} else if ( isNaN( +numOrStr ) ) {
  //console.log(' number is Ba_NaN')
//} else {
  //console.log('OK!')
//}

//let numOrStr = prompt('input number or string');
  //switch(numOrStr) {
   //   case (null):
     //     console.log('ви скасували');
      //    break;
     // case (' ').trim():
     //     console.log('Empty String');
     //     break;
     // case !isNaN( numOrStr ) || numOrStr:
     //     console.log( 'number is Ba_NaN');
     //     break;
     // default:
      //    console.log('OK!');
  //}

             //Home_Work 6 Test



/*    question1 = +prompt("How much will 2 + 3?");
    question2 = prompt("Is the ball round? (yes/no)");
    question3 = +prompt("How many weeks in a month?");
    question4 = prompt("What color is the sky?");
    question5 = prompt("What color is our teacher hair?");
    question6 = +prompt("How many fingers are on the hand?");
    question7 = +prompt("How much will 10 / 5?");

   points = 0;
   correct = 0;

if(+question1 === 5) {
    points += 10;
    correct += 1;
}
if(question2?.toLowerCase() === "yes") {
    points += 10;
    correct += 1;
}
if(+question3 === 4) {
    points += 10;
    correct += 1;
}
if(question4?.toLowerCase() === "blue") {
    points += 10;
    correct += 1;
}
if(question5?.toLowerCase() === "red") {
    points += 10;
    correct += 1;
}
if(+question6 === 5) {
    points += 10;
    correct += 1;
}
if(+question7 === 2) {
    points += 10;
    correct += 1;

    document.write(`You have ${points} points. You answered correctly for ${correct}/7`);*/
//}
//if(question3?.toLowerCase() === "nan" || thiQuestion?.toLowerCase() === "can't delay on 0") {
  //  points += 10;
    //correct += 1;
//}

//document.write(`You have ${points} points. You answered correctly for ${correct}/7`);
 //How much will 2+2?
 //The sun rises in the east?
 //How much will 5 / 0 be?
 //What color is the sky?
 //What is the correct answer to the ultimate question of life, the universe and all that. (42)
 //firstQuestion = prompt("How much will 2+2?");
// secQuestion = prompt("The sun rises in the east?");
// thiQuestion = prompt("How much will 5 / 0 be?");

 //points = 0;
 //correct = 0;

 //if(+firstQuestion === 4) {
//     points += 10;
 //    correct += 1;
 //}
 //if(secQuestion?.toLowerCase() === "yes") {
 //    points += 10;
   //  correct += 1;
 //}
 //if(thiQuestion?.toLowerCase() === "nan" || thiQuestion?.toLowerCase() === "can't delay on 0") {
 //    points += 10;
 //    correct += 1;
 //}

 //document.write(`You have ${points} points. You answered correctly for ${correct}/3`);


         //DZ_7
     // answer = prompt("What do you want to do: + , - , / , * ?");
       //do {
        //answer = prompt("What do you want to do: + , - , / , * ?");
         //if (answer !== "+" || "-" || "/" || "*") {
           //  alert("Answer is wrong!Try again");
         //}while (answer !== "+" || "-" || "/" || "*");
      //}



 // function sumFactorials (`${firstValue}, ${secValue}`) {
      //let sum = 0;
      //for (let i = 1; i <= ; i += step) {
         // let factorial = 1;
         // for (let j = 2; j <= i; j++) {
         //     factorial *= j;
         // }
         // sum += factorial;
     // }
    //  return sum;
//}
//sumFactorials();

                                       // DZ_8

   //  let a = parseInt( prompt("Enter first number?"));
     // let b = parseInt( prompt("Enter second number?Must be > first number"));

          //  if (a >= b){
          //      b = parseInt( prompt("Enter second number?Must be > first number"));
          //  } else {
          //      alert(("It's right!!!"))
          //  }
             //(b !== a) ;




/*
let operators = ["+", "-", "*", "/"],
    count = 0,
    total = 0;
while (!operators.includes(operation = prompt(`Enter operation (+, -, * or /)`)));

do {
    str = prompt(`How many operands do you want? (> 1 but < 7)`);
    count = +str;
} while (count !== parseInt(str) || count < 2 || count > 6);

let x = [];
for (let i = 1; i <= count; i++) {
    do {
        str = prompt(`Enter ${i} number`);
        operand = +str;
    } while (operand !== parseFloat(str) || !Number.isFinite(operand));
    x.push(operand);
}

total = x[0];
for (let i = 1; i < count; i++) {
    switch (operation) {
        case "+":
            total += x[i];
            break;
        case "-":
            total -= x[i];
            break;
        case "*":
            total *= x[i];
            break;
        case "/":
            total /= x[i];
            break;
    }
}
console.log(total);
*/


//let firNumber = parseInt( prompt("Enter first number?"));
//let secNumber = parseInt( prompt("Enter second number?Must be > first number"));


//  do {
//     firNumber = parseInt( prompt("Enter first number?"));
// } while (isNaN(firNumber) || firNumber < 1 || secNumber < firNumber) {
//     firNumber =
// }

//function factorial(num) {
// let result = 1;
// for (result; num > 1; num--) {
//     console.log();
//     result = result * num;
//     console.log(result);
// }

// }
// factorial(a);


function sumFactorials(start, finish, step) {
    let sum = 0;
    let factorial = 1;
    for (let i = start; i <= finish; i += step) {

        for (let j = 1; j <= i; j++) {
            factorial = factorial * j;

        }
    }
}

sumFactorials(1, 5, 3);