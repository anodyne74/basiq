require('dotenv').config()

var auth = require('./authenticate')
var user = require('./createuser')
var conn = require('./createconnection')
var fetch = require('./fetch')

var loginId1 = "gavinBelson"
var password1 = "hooli2016"

var loginId = "Wentworth-Smith"
var password = "whislter"

// var loginId = "Whistler"
// var password = "ShowBox"

// var loginId = "Gilfoyle"
// var password = "PiedPiper"

auth.getToken(process.env.YOUR_API_KEY)
    .then(token => user.createUser(token)
        .then(userid => conn.createConnection(token,userid, loginId, password)
            .then(connection => fetch.fetchAccounts(token, userid)
                .then(accounts => console.log(acccounts)))))
    .catch((error) => {
        throw error 
})

