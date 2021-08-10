module.exports.fetchAccounts = function fetchAccounts(access_token, userid)
{
    return new Promise(function(resolve,reject) {

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://au-api.basiq.io/users/' + userid + '/accounts',
  headers: { 
    'Authorization': 'Bearer ' + access_token, 
    'Accept': 'application/json'
  }
};

axios(config)
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
})
    })
}