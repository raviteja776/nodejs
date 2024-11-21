function calculateSum(a,b) {
    const sum = a+b;
    console.log(sum);
}
const x = 10;
// module.exports = calculateSum;
/* module.exports = {
    x:x,
    csum : calculateSum
}; */
/* module.exports = {
   x,
   calculateSum
}; */

module.exports = {x, calculateSum};