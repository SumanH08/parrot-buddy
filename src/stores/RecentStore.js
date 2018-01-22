var RecentStore = {
  recentItems: [{
      date: "2017-11-24",       //YYYY-MM-DD format
      dayExists: true,       // Boolean. True if any data has been keyed in for the day. False if there is no data for that day.
      dayType: 'Good',        // 3 Possible values: ‘Good’, ‘Okay’, ‘Mig’ or null
                              // if dayExists = false, this will be null
      activeLevel: 'Full',    // 3 Possible values: ‘Full’, ‘Half’, ‘None’
                              // How the user selection should be mapped to the data:
                              //      "No Activities Affected" -> 'Full'
                              //      "Slowed Down" -> 'Half'
                              //      "Missed Actitivies" ->  'None'
      treatment: [ 'Sumatriptan', 'Topiramate'], // an array of string of treatment names. This represents the treatments selected for this day.
      notes: ''
  },
  {
      date: "2017-11-23",
      dayExists: true,
      dayType: 'Good',
      activeLevel: 'Full',
      treatment: ['Sumatriptan', 'Running'],
      notes: ''
  },
  {
      date: "2017-11-22",
      dayExists: true,
      dayType: 'Bad',
      activeLevel: 'Full',
      treatment: ['Sleeping', 'Lemon Tea'],
      notes: ''
  },
  {
      date: "2017-11-21",
      dayExists: true,
      dayType: 'Mig',
      activeLevel: 'Full',
      treatment: ['Dark Room Rest'],
      notes: ''
  },
  {
      date: "2017-11-20",
      dayExists: true,
      dayType: 'Good',
      activeLevel: 'Full',
      treatment: [ ],
      notes: ''
  }
]
}

export default RecentStore;
