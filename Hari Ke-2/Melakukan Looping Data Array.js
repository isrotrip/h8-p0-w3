function dataHandling(input){
    var buatparagraf = '';
    for(var i = 0; i < input.length; i ++){
        for (var j = 0; j < input[i].length; j ++){
            if (j === 0){
                console.log('Nomor ID: ' + input[i][j]);
            }
            else if (j === 1){
                console.log('Nama Lengkap: ' + input[i][j]);
            }
            else if (j === 2){
                buatparagraf += input[i][j];
            }
            else if (j === 3){
                console.log('TTL: ' + buatparagraf, input[i][j]);
            }
            else if (j === 4){
                console.log('Hobi: ' + input[i][j]);
            }
            else {}
        }
        console.log('');
        buatparagraf='';
    }

}
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
dataHandling(input);