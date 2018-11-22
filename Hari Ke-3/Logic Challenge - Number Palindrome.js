function angkaPalindrome(num) {
    var panjangnum = num.toString().length;
    var i = 0;
    var statement = 0;
        for (var i = 0 ; i < panjangnum ; i++){
            num = num + 1;
            for (var j = 0; j < panjangnum ; j++){
              if (num.toString()[j] === num.toString()[panjangnum - j -1]){
              }
              else {
                  statement = statement + 1;
              }
            }
            if (statement === 0) {
                return num;
            }
            else {
                j = 0;
                statement = 0;
                i = 0;
            }
        }
    
  }

  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001