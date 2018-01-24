var request = require('request');
var SettingsStore = {
  settings: [],

  getSettingsFromAPI: function() {
    var api = 'http://localhost:3000/api/settings';
    console.log("getting settings from api");
    var self = this;
    request(api, function (error, response, body) {
      if(error){
        //todo: show notification
      } else {
        self.settings = JSON.parse(body);
      }
      console.log(self.settings);
    });
  },

  putSettingsToAPI: function(obj) {
    var url = 'http://localhost:3000/api/settings';
    var options = {
      method: 'put',
      body: obj,
      json: true,
      url: url
    }
    var self = this;
    request(options, function (err, res, body) {
      if (err) {
        //todo: show notification
        console.error('error posting json: ', err)
        throw err
      } else {
        self.getSettingsFromAPI();
      }
    })
  }
}

export default SettingsStore;
