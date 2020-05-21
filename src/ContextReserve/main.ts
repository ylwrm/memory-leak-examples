// *** objfun ref bigString, bigString will keep alive. 
const fun = ()=>{
    const bigString = new Array(10000000);
    const obj = {
        objfun: ()=>{ return bigString;}
    };
    return obj;
}
var gobj = fun();

// // *** objfun NOT ref bigString, bigString will NOT keep alive. 
// const fun = ()=>{
//     const bigString = new Array(10000000);
//     const obj = {
//         objfun: ()=>{}
//     };
//     return obj;
// }
// var gobj = fun();