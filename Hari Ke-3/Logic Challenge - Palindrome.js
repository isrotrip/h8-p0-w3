function palindrome(kata) {
    var panjangkata = kata.length;
    var statement = true;
    for (var i = 0; i < panjangkata; i ++){
        if(kata[i] === kata[panjangkata - 1 - i]){
        statement = true;
        }
        else {
        statement = false;
        return statement;
        }
    }
    return statement;
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false