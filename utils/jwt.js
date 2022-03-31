//json web token
const jwt = require('jsonwebtoken')

//生成
const token = jwt.sign({
"foo":"bar"
},'dfssdfds')

console.log(token)


