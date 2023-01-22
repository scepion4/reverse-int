module.exports = function reverse (n) {
  let num=Math.abs(n)
  let arr=String(num).split('')
  let result=+(arr.reverse().join(''))
  return result
}
