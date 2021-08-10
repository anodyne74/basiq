module.exports.getToken = function getToken(api_key)
{
  return new Promise(function(resolve,reject) {

  var axios = require('axios');
  var qs = require('qs');
  var data = qs.stringify({
    'scope': 'SERVER_ACCESS' 
  })

  var config = {
    method: 'post',
    url: 'https://au-api.basiq.io/token',
    headers: { 
      'Authorization': `Basic ` + api_key, 
      'Content-Type': 'application/x-www-form-urlencoded', 
      'basiq-version': '2.0'
    },
    data : data
  };

  axios(config)
    .then((response) => {
      console.log(response.data)
      resolve(qs.parse(response.data).access_token)
  })
    .catch((error) => {
      throw error
  })
})
}