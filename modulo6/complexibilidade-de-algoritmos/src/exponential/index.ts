import { login } from "./login"

const crackPassword = (
   passwordLength: number
) => {

   for (let i = 0; i < 10 ** passwordLength; i++) {
      console.count()

      const token = login(i)
      if (token) return token
   }
}
var startTime = performance.now()
crackPassword(4)
var endTime = performance.now()
console.log("tempo:", endTime - startTime)










// senha com 4
// tempo: 9.92412519454956
// senha com 5
// tempo: 1578.526249885559
// senha com 6
// tempo: 1578.526249885559
