const printUntil = (n: number) => {
   for (let i = 0; i < n; i++) {
      console.log({ i })
   }
}
var startTime = performance.now()
printUntil(20000)
var endTime = performance.now()

console.log("tempo:", endTime - startTime)