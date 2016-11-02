var fs = require('fs-extra')



fs.move('./tmp/', './tmp/oooo', function (err) {
    if (err) return console.error(err)
    console.log("success!")
})