module.exports.createConnection = function createConnection(access_token, userid, loginId, password)
{
    return new Promise(function(resolve,reject) {
  
var axios = require('axios');
var qs = require('qs');
var data = JSON.stringify({
  "loginId": loginId,
  "password": password,
  "institution": {
    "id": "AU00000"
  }
});

var config = {
  method: 'post',
  url: 'https://au-api.basiq.io/users/' + userid + '/connections',
  headers: { 
    'Authorization': 'Bearer ' + access_token, 
    'Accept': 'application/json', 
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config)
.then(function (response) {
  console.log(response.data)
  resolve(qs.parse(response.data).id)
})
.catch(function (error) {
  throw error
})
    })
  }
