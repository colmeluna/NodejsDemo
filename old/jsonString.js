var a={"name":"tom","sex":"男","age":"24"};

var b='{"name":"Mike","sex":"女","age":"29"}';

var aToStr=JSON.stringify(a);

var bToObj=JSON.parse(b);

console.log(typeof(aToStr)+aToStr);  //string

console.log(typeof(bToObj)+bToObj);//object

console.log(bToObj.name);



var student = new Object();
student.name = "Lanny";
student.age = "25";
student.location = "China";

// var json = JSON.stringify(student);
console.log(student);