
/*
 * This might not be needed anymore, the simple Python server is already recognizing that it shoul request an application/wasm
 */

const express = require('express')
const app = express()

app.use(express.static(__dirname + '/'))

express.static.mime.types['.wasm'] = 'application/wasm'

port = 9021
app.listen(port, () => { console.log(`app listening on http://localhost:${ port }`) } )
