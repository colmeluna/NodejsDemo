var fs = require('fs-extra')

// assume this directory has a lot of files and folders
fs.emptyDir('./tmp/', function (err) {
    if (!err) console.log('success!')
})