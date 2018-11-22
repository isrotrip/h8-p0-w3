function groupAnimals(animals){
    var alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var simpan = [];
    var susun = [];
    for(var i = 0; i < alfabet.length; i ++){
      for(var j = 0; j < animals.length; j++){
        if(alfabet[i][0] === animals[j][0]){
          simpan.push(animals[j]);
        }
      }
      if(simpan.length > 0){
        susun.push(simpan);
      }
      simpan = [];
    }
    return susun;
  }

  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
  