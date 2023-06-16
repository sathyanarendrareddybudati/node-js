const os = require('os')

//for checking the bit of system
console.log(os.arch())

//for checking the ram of system
console.log(os.freemem()/(1024*1024*1024))

//for checking total memory
console.log(os.totalmem()/(1024*1024*1024))

//for checking the hosting name
console.log(os.hostname())

//for checking the window or linux or mac
console.log(os.platform())

//for checking the user info
console.log(os.userInfo())