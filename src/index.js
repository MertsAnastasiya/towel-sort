
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined) return [];
  if(matrix.length === 0) return [];
  let newMatrix = matrix.map ( (item, index) => {
    if(index % 2 === 0) {
        return item.sort( (a, b) => a - b );
    } else {
        return item.sort( (a, b) => b - a);
    }
  });
  newMatrix.flat()
  return newMatrix.flat();
}
