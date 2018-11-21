function balikString(input){
    var returnString = '';
    for(var i = 0; i < input.length; i ++){
        returnString += input[input.length-i-1];
    }
    console.log(returnString)
}
balikString ('hello world!');