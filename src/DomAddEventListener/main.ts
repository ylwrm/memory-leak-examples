// // *** bigString will keep
// const div = document.createElement('div');
// document.body.appendChild(div);
// div.style.width = '300px';
// div.style.height = '300px';
// div.style.border = 'solid green 2px';
// const add =()=>{
//     const bigString = new Array(10000000);
//     let funhandler = () => {
//         console.log('funhandler');
//         bigString.push();
//     }
//     div.addEventListener('click', funhandler);
// }
// add();



// // *** bigString will keep, even div has removed from body
// let div = document.createElement('div');
// document.body.appendChild(div);
// div.style.width = '300px';
// div.style.height = '300px';
// div.style.border = 'solid green 2px';
// const add =()=>{
//     const bigString = new Array(10000000);
//     let funhandler = () => {
//         bigString.push();
//     }
//     div.addEventListener('click', funhandler);
// }
// add();
// document.body.removeChild(div);  // !!! new line


// // *** bigString will clear by removeEventListener
// const div = document.createElement('div');
// document.body.appendChild(div);
// div.style.width = '300px';
// div.style.height = '300px';
// div.style.border = 'solid green 2px';
// const add =()=>{
//     const bigString = new Array(10000000);
//     let funhandler = () => {
//         bigString.push();
//     }
//     div.addEventListener('click', funhandler);
//     div.removeEventListener('click', funhandler); // !!! new line: solve by removeEventListener 
// }
// add();


// *** bigString will clear by removeChild && set div to null
let div = document.createElement('div');
document.body.appendChild(div);
div.style.width = '300px';
div.style.height = '300px';
div.style.border = 'solid green 2px';
const add =()=>{
    const bigString = new Array(10000000);
    let funhandler = () => {
        bigString.push();
    }
    div.addEventListener('click', funhandler);
}
add();
document.body.removeChild(div); // !!! new line
div = null; // !!! new line
