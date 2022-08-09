const insertionSort = (array: number[]) => {
   
   for (let j = 1; j < array.length; j++) {
      const value = array[j];
      let i = j - 1;
      while (i >= 0 && array[i] >= value) {
         array[i + 1] = array[i];
         i--;
      }
      array[i + 1] = value
   }
};

const numbers = [
   8, 7, 6, 5, 4, 3, 2, 1,8, 7, 6, 5, 4, 3, 2, 1, 
]
var startTime = performance.now()
insertionSort(numbers)
var endTime = performance.now()
console.log("tamanho:", numbers.length);
console.log("tempo: ", endTime-startTime);



// const poly = (n: number) => {
//    for (let i = 0; i < n; i++) {
//      for (let j = 0; j < n; j++) {
//        for (let k = 0; k < n; k++) {
//          console.count()
//        }
//      }
//    }
//   };
  
//   poly(2)

