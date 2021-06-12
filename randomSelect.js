function randomFromArray(arr){
   let chosen = Math.floor(Math.random()*arr.length);
   return arr[chosen];
}


//TODO: Export the randomFromArray function.
module.exports = randomFromArray;