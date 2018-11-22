function tentukanDeretGeometri(arr) {
    var jumlahdata = arr.length;
    var rasio;
    var totalrasio = 0;
    for(var i = 0; i < jumlahdata - 1; i ++){
        rasio = arr[i + 1]/arr[i];
        totalrasio = totalrasio + rasio;
    }
    if(totalrasio/(jumlahdata-1) === rasio){
        return true;
    }
    else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false