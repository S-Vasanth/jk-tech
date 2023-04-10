const { weeklyTravel } = require("./weeklyTravelCard.js");

test("should return 480", () => {
  const output = weeklyTravel([
    { week: 1, day: "monday", zone: "1-1", fare: 100 },
    { week: 1, day: "tuesday ", zone: "1-1", fare: 50 },
    { week: 1, day: "wednesday ", zone: "1-1", fare: 50 },
    { week: 1, day: "thursday ", zone: "1-2", fare: 120 },
    { week: 1, day: "friday", zone: "2-2", fare: 80 },
    { week: 1, day: "Saturday ", zone: "2-2", fare: 40 },
    { week: 1, day: "Sunday ", zone: "2-2", fare: 40 },
  ]);
  expect(output).toBe(480);
}); //Here,this weeklycap is 600 but he/she spend 480

test("should return 600", () => {
  const output = weeklyTravel([
    { week: 1, day: "monday", zone: "1-2", fare: 120 },
    { week: 1, day: "tuesday ", zone: "1-2", fare: 120 },
    { week: 1, day: "wednesday ", zone: "1-2", fare: 120 },
    { week: 1, day: "thursday ", zone: "1-2", fare: 120 },
    { week: 1, day: "friday", zone: "1-1", fare: 80 },
    { week: 1, day: "Saturday ", zone: "1-2", fare: 40 },
    { week: 1, day: "Sunday ", zone: "1-2", fare: 0 },
  ]);
  expect(output).toBe(600);
}); //Here,it reach a weeklycap

test("should return 1300", () => {
  const output = weeklyTravel([
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
  ]);
  expect(output).toBe(1300);
}); //Here first week reach a weeklycap 600 and second week reach a weeklycap 600 and third week its reach only 100 so total 1300

test("should return 960", () => {
  const output = weeklyTravel([
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
  ]);
  expect(output).toBe(960);
}); //first week reach a weeklycap 600 and second week reach a 360 so total 960

test("should return 1080", () => {
  const output = weeklyTravel([
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
    { week: 2, day: "thursday ", zone: "2-2", fare: 40 },
    { week: 2, day: "friday", zone: "2-2", fare: 40 },
    { week: 2, day: "Saturday ", zone: "2-2", fare: 40 },
    { week: 2, day: "Sunday ", zone: "1-2", fare: 0 },
  ]);
  expect(output).toBe(1080);
}); //Here,first week reach a weeklycap 600 but second week reach only 480 so total 1080
