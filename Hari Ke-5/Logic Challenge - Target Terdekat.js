function targetTerdekat(arr) {
    var jumlahdata = arr.length;
    var posisiX = '';
    var posisiO = '';
    var jarakterdekat;
    for(var i = 0; i < jumlahdata; i ++){
        if(arr[i] === 'o'){
            posisiO = posisiO + i.toString();
        }
        else if(arr[i] === 'x'){
            posisiX = posisiX + i.toString();
        }
    }
    var jumlahX = posisiX.length;
    var jumlahO = posisiO.length;
    jarakterdekat = Math.abs(Number(posisiX[0]) - Number(posisiO[0]));
    if (jumlahO === 0 || jumlahX === 0){
        jarakterdekat = 0;
    }
    else {
        for(var i = 0; i < jumlahX; i++){
            for(var j = 0; j < jumlahO; j++){
                if(jarakterdekat > Math.abs(Number(posisiX[i]) - Number(posisiO[j]))){
                    jarakterdekat = Math.abs(Number(posisiX[i]) - Number(posisiO[j]));
                }
            }
        }
    }
    return jarakterdekat;
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2