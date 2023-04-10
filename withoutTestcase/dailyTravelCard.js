function toMinutes(time) {
  const [hours, minutes] = time.split(":");
  const totalMinutes = parseInt(hours, 10) * 60 + parseInt(minutes, 10);
  return totalMinutes;
}
function dailyTravelCard(trips) {
  let dailyFare = 0;
  let dailyCap = 0;
  let weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  let fare = {
    peakHours: {
      "1-1": 30,
      "2-2": 25,
      "1-2": 35,
    },
    NonPeakHours: {
      "1-1": 25,
      "2-2": 20,
      "1-2": 30,
    },
  };

  for (let trip of trips) {
    const { day, time: timeInHours, fromZone, toZone } = trip;
    const time = toMinutes(timeInHours);
    /////////////////////////////////////// ZONE 1  //////////////////////////////
    if (fromZone == 1 && toZone == 1) {
      if (dailyCap < 100) dailyCap = 100;
      if (weekDays.includes(day)) {
        ///////////////////////////////////FOR WEEKDAYS////////////////////////////////////
        if (
          //FOR PEAK HOURS
          (time >= toMinutes("07:00") && time <= toMinutes("10:30")) ||
          (time >= toMinutes("17:00") && time <= toMinutes("20:00"))
        ) {
          dailyFare = dailyFare + fare.peakHours["1-1"];
        } else {
          //FOR NON-PEAK HOURS
          dailyFare = dailyFare + fare.NonPeakHours["1-1"];
        }
      } else {
        ///////////////////////////////////FOR WEEKEND//////////////////////////////////////
        if (
          //FOR PEAK HOURs
          (time >= toMinutes("09:00") && time <= toMinutes("11:00")) ||
          (time >= toMinutes("18:00") && time <= toMinutes("22:00"))
        ) {
          dailyFare = dailyFare + fare.peakHours["1-1"];
        } else {
          //FOR NON-PEAK HOURS
          dailyFare = dailyFare + fare.NonPeakHours["1-1"];
        }
      }
    } else if (fromZone == 2 && toZone == 2) {
      //////////////////////////////////////// ZONE-2 ///////////////////////////////////
      if (dailyCap < 80) dailyCap = 80;

      if (weekDays.includes(day)) {
        ////////////////////////////////////////// FOR WEEKDAYS///////////////////////////////
        if (
          //FOR PEAK HOURS
          (time >= toMinutes("07:00") && time <= toMinutes("10:30")) ||
          (time >= toMinutes("17:00") && time <= toMinutes("20:00"))
        ) {
          dailyFare = dailyFare + fare.peakHours["2-2"];
        } else {
          //FOR NON-PEAK HOURS
          dailyFare = dailyFare + fare.NonPeakHours["2-2"];
        }
      } else {
        /////////////////////////////////////////// FOR WEEKENDS////////////////////////////////
        if (
          //FOR PEAK HOURS
          (time >= toMinutes("09:00") && time <= toMinutes("11:00")) ||
          (time >= toMinutes("18:00") && time <= toMinutes("22:00"))
        ) {
          dailyFare = dailyFare + fare.peakHours["2-2"];
        } else {
          //FOR NON-PEAK HOURS
          dailyFare = dailyFare + fare.NonPeakHours["2-2"];
        }
      }
    } else if (fromZone == 1 && toZone == 2) {
      //////////////////////////////////////// ZONE 1-2 ///////////////////////////////////

      if (dailyCap < 120) dailyCap = 120;

      if (weekDays.includes(day)) {
        ////////////////////////////////////////// FOR WEEKDAYS///////////////////////////////

        if (
          //FOR PEAK HOURS
          (time >= toMinutes("07:00") && time <= toMinutes("10:30")) ||
          (time >= toMinutes("17:00") && time <= toMinutes("20:00"))
        ) {
          dailyFare = dailyFare + fare.peakHours["1-2"];
        } else {
          //FOR NON-PEAK HOURS
          dailyFare = dailyFare + fare.NonPeakHours["1-2"];
        }
      } else {
        /////////////////////////////////////////// FOR WEEKENDS////////////////////////////////
        if (
          //FOR PEAK HOURS
          (time >= toMinutes("09:00") && time <= toMinutes("11:00")) ||
          (time >= toMinutes("18:00") && time <= toMinutes("22:00"))
        ) {
          dailyFare = dailyFare + fare.peakHours["1-2"];
        } else {
          //FOR NON-PEAK HOURS
          dailyFare = dailyFare + fare.NonPeakHours["1-2"];
        }
      }
    } else if (fromZone == 2 && toZone == 1) {
      //////////////////////////////////////// ZONE 2-1 ///////////////////////////////////
      if (dailyCap < 120) dailyCap = 120;

      if (weekDays.includes(day)) {
        ////////////////////////////////////////// FOR WEEKDAYS///////////////////////////////
        if (
          //FOR PEAK HOURS
          time >= toMinutes("07:00") &&
          time <= toMinutes("10:30")
        ) {
          dailyFare = dailyFare + fare.peakHours["1-2"];
        } else {
          //FOR NON PEAK HOURS
          dailyFare = dailyFare + fare.NonPeakHours["1-2"];
        }
      } else {
        ////////////////////////////////////////// FOR WEEKENS///////////////////////////////

        if (
          //FOR PEAK HOURS
          time >= toMinutes("09:00") &&
          time <= toMinutes("11:00")
        ) {
          dailyFare = dailyFare + fare.peakHours["1-2"];
        } else {
          ///FOR NON PEAK HOURS
          dailyFare = dailyFare + fare.NonPeakHours["1-2"];
        }
      }
    }
  }
  let results = Math.min(dailyCap, dailyFare);
  console.log(results);
}

//////////////////ZONE 1//////////////////////////
dailyTravelCard([
  { day: "wednesday", time: "10:20", fromZone: 1, toZone: 1 },
  { day: "wednesday", time: "10:45", fromZone: 1, toZone: 1 },
  { day: "wednesday", time: "18:15", fromZone: 1, toZone: 1 },
]); // output=85  because results less than dailycap

//////////////////ZONE 1-2//////////////////////////
dailyTravelCard([
  { day: "monday", time: "10:20", fromZone: 2, toZone: 1 },
  { day: "monday", time: "10:45", fromZone: 1, toZone: 1 },
  { day: "monday", time: "16:15", fromZone: 1, toZone: 1 },
  { day: "monday", time: "18:15", fromZone: 2, toZone: 1 },
  { day: "monday", time: "19:00", fromZone: 1, toZone: 1 },
  { day: "monday", time: "16:00", fromZone: 1, toZone: 1 },
]); // output=120  because results greater than dailycap so its return dailycap

//////////////////ZONE 2//////////////////////////
dailyTravelCard([
  { day: "sunday", time: "10:20", fromZone: 2, toZone: 2 },
  { day: "sunday", time: "10:45", fromZone: 2, toZone: 2 },
  { day: "sunday", time: "16:15", fromZone: 2, toZone: 2 },
  { day: "sunday", time: "18:15", fromZone: 2, toZone: 2 },
  { day: "sunday", time: "19:00", fromZone: 2, toZone: 2 },
  { day: "sunday", time: "16:00", fromZone: 2, toZone: 2 },
]); // output=80  because results greater than dailycap so its return dailycap
