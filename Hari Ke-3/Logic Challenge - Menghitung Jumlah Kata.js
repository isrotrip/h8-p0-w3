function hitungJumlahKata(kalimat) {
    var jumlahkata = 1;
    var panjangkata = kalimat.length;
    for (var i = 0; i < panjangkata ; i ++) {
        if(kalimat[i] === ' '){
            jumlahkata = jumlahkata + 1;
        }
        else{}
    }
    return jumlahkata;
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5