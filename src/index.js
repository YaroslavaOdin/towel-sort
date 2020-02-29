
// You should implement your task here.
module.exports = function towelSort (matrix) {
    if (matrix === undefined) return [];
    var arr = [];
    for (var i = 0; i < matrix.length; i++) {
        if(i % 2 == 1){
            matrix[i] = matrix[i].reverse();
        }
        for (var j = 0; j < matrix[i].length; j++) {
            arr.push(matrix[i][j]);
        }
    }
  return arr;
}
