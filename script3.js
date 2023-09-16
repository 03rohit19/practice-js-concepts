// what is JSON : It stands for javascript object notation , used to store and exchange data.Its a data exchange format.
//slice method: The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

var array = ["rahul", "ravi", "raj", "sonam", "swati"];
var new_array = array.slice(1, 3);
document.write(new_array);

//Splice method : This method changes the contents of an array by removing the existing elements or adding the new elements. This method changes the original array.
var array1 = ["rahul", "ravi", "raj", "sonam", "swati", "ram"];
var new_array1 = array1.splice(2, 2, "dell", "witch");
document.write(new_array2);

//Prototype
var mobile = function (model_no) {
  //instance member
  this.model = model_no;
  this.cost = 30000;
};

// classname.prototype.key = 'value';
// prototype member
mobile.prototype.color = "white";
var samsung = new mobile("galaxy");
var nokia = new mobile("310");

//Object constructor
var fees = new Object();
fees["ra"] = 200;
fees["sa"] = 300;
fees["total"] = function () {
  return 100 + 200;
};
