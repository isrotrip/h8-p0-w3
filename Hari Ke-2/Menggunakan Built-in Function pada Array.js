function dataHandling2(input){
    input.splice(1, 2);
    input.splice(1, 0, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung'); 
    input.splice(4, 1);
    input.splice(4, 0, 'Pria', 'SMA Internasional Metro');
    console.log (input);
    var ambiltanggal;
    ambiltanggal = input.slice(3,4) + '';
    ambiltanggal = ambiltanggal.split('/');
    var namaBulan=ambiltanggal[1];
    switch (namaBulan){
        case '01':
        namaBulan = 'Januari';
        break;
        case '02':
        namaBulan = 'Februari';
        break;
        case '03':
        namaBulan = 'Maret';
        break;
        case '04':
        namaBulan = 'April';
        break;
        case '05':
        namaBulan = 'Mei';
        break;
        case '06':
        namaBulan = 'Juni';
        break;
        case '07':
        namaBulan = 'Juli';
        break;
        case '08':
        namaBulan = 'Agustus';
        break;
        case '09':
        namaBulan = 'September';
        break;
        case '10':
        namaBulan = 'Oktober';
        break;
        case '11':
        namaBulan = 'November';
        break;
        case '12':
        namaBulan = 'Desember';
        break;
        default:;
    }
    console.log(namaBulan);
    var susuntanggal = ambiltanggal;
    susuntanggal.sort(function(value1,value2){return Number(value1) < Number(value2)});
    console.log (susuntanggal);
    ambiltanggal = input.slice(3,4) + '';
    ambiltanggal = ambiltanggal.split('/');
    var jointanggal = ambiltanggal;
    console.log (jointanggal.join('-'));
    var nama = input[1];
    console.log (nama.slice(0,15));
}

var input = ['0001', 'Roman Alamsyah ', 'Bandar Lampung', '21/05/1989', 'Membaca'];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */