
const ages = [15,16,19,23,18,1,2,65,6]
// const result = ages.filter(checkAdult)
// function checkAdult(age){
//  return age >= 18
// }
const result  = ages.filter(item => {
  return item >= 18
})
console.log("result ",result)

const resultNotAdult = ages.filter( age => {
  return age < 9
})
console.log("resultNotAdult ",resultNotAdult)
