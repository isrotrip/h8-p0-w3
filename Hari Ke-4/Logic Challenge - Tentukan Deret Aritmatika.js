function tentukanDeretAritmatika(arr) {
    var bedaderet = 0;
    var totalbeda = 0;
    var jumlahdata = arr.length;
    for(var i = 0; i < jumlahdata - 1; i ++){
        bedaderet = Number(arr[i + 1]) - Number(arr[i]);
        totalbeda = totalbeda + bedaderet;
    }
    if (totalbeda / (jumlahdata - 1) === bedaderet){
        return true;
    }
    else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false