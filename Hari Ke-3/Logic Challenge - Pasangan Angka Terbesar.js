function pasanganTerbesar(num) {
    var panjangkataganda = num.toString().length - 1;
    var angkaterbesar = 0;
    for (var i = 0; i < panjangkataganda; i ++){
        if(Number(num.toString()[i]+num.toString()[i+1]) > angkaterbesar){
            angkaterbesar = Number(num.toString()[i]+num.toString()[i+1]);
        }
        else {}
    }
    return angkaterbesar;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99