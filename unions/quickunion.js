class Quickunion {
  constructor() {
    this.table = [];
    for(var i=0; i<10;i++){
      this.table[i] = i;
    }
  }

  // form a union between two elements
  union(n1, n2) {
    // console.log("Union between " + n1 + ' ' + n2);
    this.table[n1] = this.table[n2];
  }

  // test if two nodes are connected in the table
  connected(n1, n2) {
    console.log("Testing connection between " + n1 + ' and ' + n2);
    while(this.table[n1] != n1){
      n1 = this.table[n1]
    }
    while(this.table[n2] != n2){
      n2 = this.table[n2]
    }
    return (n1 == n2);
  }
}

module.exports = Quickunion;
