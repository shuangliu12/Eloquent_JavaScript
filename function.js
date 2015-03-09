//minimum

function min(a,b){
  if (a >= b){
    return b
  }else{
    return a
  }
}

//recursion

function isEven(num){
  if(num == 0){
    return true
  }else if(num == 1){
    return false
  }else{
    if(num > 1){
      return isEven(num - 2)
    }
  }
}


//Bean counting

function countBs(string){
  count = 0;
  for(i = 0; i < string.length; i++){
    if(string.charAt(i) == 'B'){
      count += 1;
    }
  }
  return count;
}

function countChar(string, letter){
  count = 0;
  for(i = 0; i < string.length; i++){
    if(string.charAt(i) == letter){
      count += 1;
    }
  }
  return count;
}
