class Quickfind {
  constructor() {
    this.table = [];
    for(var i=0; i<10;i++){
      this.table[i] = i;
    }
  }

  // form a union between two elements
  union(n1, n2) {
    // console.log("Union between " + n1 + ' ' + n2);
    var prev = this.table[n2];
    for(var i=0; i<this.table.length;i++){
      if(this.table[i] == prev){
        this.table[i] = this.table[n1];
      }
    }
  }

  // test if two nodes are connected in the table
  connected(n1, n2) {
    return (this.table[n1] == this.table[n2]);
  }
}

module.exports = Quickfind;
