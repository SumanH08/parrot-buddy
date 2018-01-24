// var RecentStore = {
//   recentItems: [{
//       date: "2017-11-24",       //YYYY-MM-DD format
//       dayExists: true,       // Boolean. True if any data has been keyed in for the day. False if there is no data for that day.
//       dayType: 'Good',        // 3 Possible values: ‘Good’, ‘Okay’, ‘Mig’ or null
//                               // if dayExists = false, this will be null
//       activeLevel: 'Full',    // 3 Possible values: ‘Full’, ‘Half’, ‘None’
//                               // How the user selection should be mapped to the data:
//                               //      "No Activities Affected" -> 'Full'
//                               //      "Slowed Down" -> 'Half'
//                               //      "Missed Actitivies" ->  'None'
//       treatment: [ 'Sumatriptan', 'Topiramate'], // an array of string of treatment names. This represents the treatments selected for this day.
//       notes: 'Hola amigo'
//   },
//   {
//       date: "2017-11-23",
//       dayExists: true,
//       dayType: 'Good',
//       activeLevel: 'Half',
//       treatment: ['Sumatriptan', 'Running'],
//       notes: ''
//   },
//   {
//       date: "2017-11-22",
//       dayExists: true,
//       dayType: 'Okay',
//       activeLevel: 'Full',
//       treatment: ['Sleeping', 'Lemon Tea'],
//       notes: ''
//   },
//   {
//       date: "2017-11-21",
//       dayExists: true,
//       dayType: 'Mig',
//       activeLevel: 'None',
//       treatment: ['Dark Room Rest'],
//       notes: ''
//   },
//   {
//       date: "2017-11-20",
//       dayExists: true,
//       dayType: 'Good',
//       activeLevel: 'Full',
//       treatment: [ ],
//       notes: ''
//   }
// ]
// }


var request = require('request');
var RecentStore = {
  recentItems: [],

  getRecentFromAPI: function() {
    var api = 'http://localhost:5000/api/recent';
    console.log("getting recent from api");
    var self = this;
    request(api, function (error, response, body) {
      if(error){
        //todo: show notification
      } else {
        self.recentItems = JSON.parse(body);
      }
      console.log("Printing recent store items");
      console.log(self.recentItems);
    });
  },

  putRecentToAPI: function(obj) {
    var url = 'http://localhost:5000/api/recent';
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
        self.getRecentFromAPI();
      }
    })
  }
}

export default RecentStore;
