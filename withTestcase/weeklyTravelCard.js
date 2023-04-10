function weeklyTravel(trips) {
  /////////////// GROUP THE ARRAY OF OBJECT BY WEEK USING REDUCE MEDTHOD ///////////////////////
  const weekIntrip = trips.reduce((acc, cur) => {
    const { week } = cur;
    if (!acc[week]) acc[week] = [];
    acc[week].push(cur);
    return acc;
  }, {});

  console.log(weekIntrip);
  console.log(Object.values(weekIntrip));

  let results = 0;
  for (let week of Object.values(weekIntrip)) {
    let maxZone = 0;
    let totalFare = 0;
    for (let trip of week) {
      const { week, day, zone, fare } = trip;

      let zoneDict = {
        "1-1": 500,
        "1-2": 600,
        "2-1": 600,
        "2-2": 400,
      };
      if (zoneDict[zone] > maxZone) {
        maxZone = zoneDict[zone];
      }
      totalFare = totalFare + fare;
    }
    let finalFare = Math.min(totalFare, maxZone);

    results = results + finalFare;
  }
  return results;
}

module.exports = {
  weeklyTravel,
};

weeklyTravel([
  { week: 1, day: "monday", zone: "1-2", fare: 120 },
  { week: 1, day: "tuesday ", zone: "1-2", fare: 120 },
  { week: 1, day: "wednesday ", zone: "1-2", fare: 120 },
  { week: 1, day: "thursday ", zone: "1-2", fare: 120 },
  { week: 1, day: "friday", zone: "1-1", fare: 80 },
  { week: 1, day: "Saturday ", zone: "1-2", fare: 40 },
  { week: 1, day: "Sunday ", zone: "1-2", fare: 0 },
  { week: 2, day: "monday ", zone: "1-2", fare: 100 },
]); //output 700  -----> week 1 = 600,week 2 = 100 Here total =700

weeklyTravel([
  { week: 1, day: "monday", zone: "1-2", fare: 120 },
  { week: 1, day: "tuesday ", zone: "1-2", fare: 120 },
  { week: 1, day: "wednesday ", zone: "1-2", fare: 120 },
  { week: 1, day: "thursday ", zone: "1-2", fare: 120 },
  { week: 1, day: "friday", zone: "1-1", fare: 80 },
  { week: 1, day: "Saturday ", zone: "1-2", fare: 40 },
  { week: 1, day: "Sunday ", zone: "1-2", fare: 0 },
  { week: 2, day: "monday ", zone: "1-2", fare: 120 },
  { week: 2, day: "tuesday ", zone: "1-2", fare: 120 },
  { week: 2, day: "wednesday ", zone: "1-2", fare: 120 },
  { week: 2, day: "thursday ", zone: "1-2", fare: 120 },
  { week: 2, day: "friday", zone: "1-1", fare: 80 },
  { week: 2, day: "Saturday ", zone: "1-2", fare: 40 },
  { week: 2, day: "Sunday ", zone: "1-2", fare: 0 },
  { week: 3, day: "monday ", zone: "1-2", fare: 100 },
  { week: 3, day: "tuesday ", zone: "1-2", fare: 100 },
]); //output 1400  -----> week 1 = 600,week 2 = 600,week 3=100 Here total =1300

weeklyTravel([
  { week: 1, day: "monday", zone: "1-2", fare: 120 },
  { week: 1, day: "tuesday ", zone: "1-2", fare: 120 },
  { week: 1, day: "wednesday ", zone: "1-2", fare: 120 },
  { week: 1, day: "thursday ", zone: "1-2", fare: 120 },
  { week: 1, day: "friday", zone: "1-1", fare: 80 },
  { week: 1, day: "Saturday ", zone: "1-2", fare: 40 },
  { week: 1, day: "Sunday ", zone: "1-2", fare: 0 },
  { week: 2, day: "monday ", zone: "1-2", fare: 120 },
  { week: 2, day: "tuesday ", zone: "1-2", fare: 120 },
  { week: 2, day: "wednesday ", zone: "1-2", fare: 120 },
]); //output 960 -----> week 1 = 600,week 2 = 360 Here total = 960
