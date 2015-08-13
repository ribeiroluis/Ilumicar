var Product = function(){
  this.product = {};  
  
  this.set = function(data) {
    this.product = data;
  };
  
  this.get = function(data){
    return this.product;
  };
};