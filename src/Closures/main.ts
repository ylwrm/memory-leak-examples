// var newvalue;
// function outFun() {
//     var array = new Array(1000000);
//     var value = newvalue;
//     function innFun() {
//         if (value) return array;
//     }
//     return function () { };
// }
// setInterval(function () {
//     newvalue = outFun();
// }, 2000);




var outer = function () {
    let name = new Array(10000000);
    return function () {    // inner fun
        return name;
    };
};
// // *** after outer(), 'inner fun' reference clear, name clear.
// outer();

// // *** after next line, window.a will keep, CAN NOT clear 'inner fun' and 'name'.
// var a = outer();

// // *** after 'a = null;', window.a reference to null,
// // *** no one object reference to 'inner fun',
// // *** 'inner fun' reference clear, name clear.
// var a = outer();
// a = null;
// // a = undefined; // or
// // a = {}; // or