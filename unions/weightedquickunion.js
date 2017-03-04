class Weightedquickunion {
  constructor() {
    this.table = [];
    this.sizes = [];
    for(var i=0; i<10;i++){
      this.table[i] = i;
    }
    for(var i=0; i<10;i++){
      this.sizes[i] = 1;
    }
  }

  // form a union between two elements
  union(n1, n2) {
    // console.log("Union between " + n1 + ' ' + n2);
    n1 = this.root(n1);
    n2 = this.root(n2);
    if(this.sizes[n1] < this.sizes[n2]){
        this.table[n1] = this.root(n2);
        this.sizes[n2] += this.sizes[n1];
    }else{
      this.table[n2] = this.root(n1);
      this.sizes[n1] += this.sizes[n2];
    }
  }

  root(n){
    while(this.table[n] != n){
      n = this.table[n];
    }
    return n;
  }

  // test if two nodes are connected in the table
  connected(n1, n2) {
    console.log("Testing connection between " + n1 + ' and ' + n2);
    return (this.root(n1) == this.root(n2));
  }
}

module.exports = Weightedquickunion;
