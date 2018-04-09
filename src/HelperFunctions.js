export const createRandomArray = arraySize =>{
  const randomArray = new Array(arraySize);
  for(let i=0; i < arraySize; i++){
    randomArray[i] = Math.floor(Math.random()*26) +5;
  }
  return randomArray;
}
