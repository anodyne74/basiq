module.exports.createUser = function createUser(access_token)
{
    return new Promise(function(resolve,reject) {

    var axios = require('axios');
    var qs = require('qs');
    var data = JSON.stringify({
    "email": "dok@zero.com",
    "mobile": "+61400100780"
    });

    var config = {
    method: 'post',
    url: 'https://au-api.basiq.io/users',
    headers: { 
        'Authorization': 'Bearer ' + access_token, 
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
    },
    data: data
    };

    axios(config)
    .then(function (response) {
        console.log(response.data);
        resolve(qs.parse(response.data).id)
    })
    .catch(function (error) {
        throw error
    });

})
}
