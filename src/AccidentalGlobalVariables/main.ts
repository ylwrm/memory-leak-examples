// *** Accidental global variables
function myArray() {
    window['languages'] = new Array(10000000);
}
myArray();

// // *** Solve
// function myArray() {
//     let languages = new Array(10000000);
// }
// myArray();
