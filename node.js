const node1 = require('./node1')

console.log(node1.z());

let a = [1,2,3,4,5]

b = a.filter((item)=>{
    // console.log(item)
    return item >= 3;
})
console.log(b)