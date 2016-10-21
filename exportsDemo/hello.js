function Hello(){
    var name ;
    this.setName = function(thyName){
        this.name = thyName;
    };
    this.sayHello = function(sayword){
        console.log("说出的话是："+sayword);
    };
}
module.exports = Hello;