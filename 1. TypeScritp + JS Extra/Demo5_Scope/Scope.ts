let myName = "nguyxnhung20"; // Global scope
//
//
//
console.log(`MyName: ${myName}`);

function a() {
  console.log(`MyName: ${myName}`);
  let x = 10; // Local scope
  console.log(`x: ${x}`);
}

function b() {
  console.log(`MyName: ${myName}`);
}
