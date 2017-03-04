
const Quickunion = require('./quickunion')
const Quickfind = require('./quickfind')
const Weightedquickunion = require('./weightedquickunion')
const Weightedqucompression = require('./weightedqucompression')

var q = new Weightedqucompression();
var index = [];
for(var i=0; i<10;i++){
  index[i] = i;
}

console.log(index);
console.log(q.table);
q.union(4, 3)
q.union(3, 8)
q.union(6, 5)
q.union(9, 4)
q.union(2, 1)
console.log(index);
console.log(q.table);
console.log(q.connected(0, 7))  // Shoule be false
console.log(q.connected(8, 9)) // Should be true
q.union(5, 0)
q.union(7, 2)
q.union(6, 1)
q.union(1, 0)
console.log(index);
console.log(q.table);
console.log(q.connected(0, 7)) //should be true
