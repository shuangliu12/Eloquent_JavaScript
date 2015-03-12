// The sum of a range
function range(start, end, direction){
  var array = [];
  if (direction == null){
    for(i = start; i <= end; i++){
      array.push(i);
    }
  }else{
      if (direction > 0){
        for(i = start; i <= end; i= i + direction){
          console.log(i);
          array.push(i);
        }
      }else{
         for(i = start; i >= end; i= i + direction){
          console.log(i);
          array.push(i);
        }

      }
  }
  return array;
}

// Reversing and Array
function reverseArray(array){
  var reversed = [];
  for(i= array.length - 1; i >= 0; i--){
    reversed.push(array[i]);
  }
  return reversed;
}

function reverseArrayInPlace(array){
  var swap = "";
  for (i = 0 ; i < array.length/2; i++){
    swap = array[array.length - i - 1];
    array[array.length - i - 1] = array[i];
    array[i] = swap;
  }
  return array;
}

//list
function arrayToList(array){
  var list = {};
  list["value"] = array[0];
  array.shift();
  if (array.length > 0){
    list["rest"]=  arrayToList(array);
  }else{
      list["rest"]= null;
  }
  return list;
};

var array = [];
function listToArray(list){
 array.push(list.value);
 if(list.rest != null){
    listToArray(list.rest);
 }
  return array;
};


function prepend(element, list){
    var newList = {};
    newList.value = element,
    newList.rest = list;
    return newList;
};

var count = 0;
function nth(list, number){  
  while (count < number){
    count += 1;
    console.log(list.rest);
    list = list.rest;
    nth(list, number);
  }
  return list.value;
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

//Deep Comparison

function deepEqual(value1, value2){
  for (key1 in value1){
    for (key2 in value2){
      if (key1 === key2){
        if (typeof value1[key1] == "object" && typeof value2[key2] == "object"){
          deepEqual(value1[key1], value2[key2]);
        }else{
          if (value1[key1] == value2[key2]){
            return true;
          }
        }
        return true; 
      }
      else{
        console.log("hit else");
        return false;
      }
    }
  } 
  return true;
}




