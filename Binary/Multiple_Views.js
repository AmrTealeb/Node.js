var buf = new ArrayBuffer(4);
var view1 = new Uint32Array(buf);
var view2 = new Uint8Array(buf);
 
// write to view1 and print the value
console.log("view1.length = " + view1.length);
console.log("view2.length = " + view2.length);

view1[0] = 100;
console.log("Uint32 = " + view1[0]);
console.log(buf);
console.log("view1 = " + view1); 
// write to view2 and print view1's value
view2[2] = 1;
console.log("Uint32 = " + view1[0]); 
console.log(buf);
console.log("view2[0] = " + view2[0]);