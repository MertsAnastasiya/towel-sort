
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newMatrix = matrix.map ( (item, index) => {
    if(index % 2 === 0) {
        return item.sort( (a, b) => a - b );
    } else {
        return item.sort( (a, b) => b - a);
    }
  });
  return newMatrix.flat();
}
