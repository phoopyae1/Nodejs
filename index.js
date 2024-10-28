// globalThis.setTimeout(function(){
//     console.log('This will run after 30 seconds');
// },3000)
let interval = global.setInterval(function () {
    console.log('This will run every 2 seconds');
}, 2000)

global.setTimeout(function () {
    clearInterval(interval);
}, 3000)
console.log(__dirname)
console.log(__filename)