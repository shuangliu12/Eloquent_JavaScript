//Looping A Triangle

var pound = '#';

for (i=0; i <7; i ++){
    console.log(pound);
    pound = pound + '#';
}

//FizzBuzz

for (i= 1; i < 101; i++){
  if(i%3==0 && i % 5== 0){
    console.log("FizzBuzz");
  }else if(i % 3 == 0){
    console.log("Fizz");
  }else if(i % 5 ==0){
    console.log("Buzz");
  }else{
    console.log(i);
  }
}

//Chess Board

var space = " ";
var pound = "#";
for (i = 1; i <= 8; i++){
  if (i % 2 != 0){
    unit = space + pound;
    console.log(Array(5).join(unit));
  }else{
    unit = pound + space;
    console.log(Array(5).join(unit));
  }
}


