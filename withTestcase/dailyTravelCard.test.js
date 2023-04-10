const { dailyTravelCard } = require("./dailyTravelCard.js");

//////////////////////////  WEEK DAYS ///////////////////////////////

// 1) weekdays peak hours (monday),zone:2-1 here the fare is less than daily cap,
test("should return 35", () => {
  const output = dailyTravelCard([
    { day: "monday", time: "10:00", fromZone: 2, toZone: 1 },
  ]);
  expect(output).toBe(35);
});
// 2) weekdays peak hours (friday),zone:1-1 here the fare is less than daily cap,
test("should return 30", () => {
  const output = dailyTravelCard([
    { day: "friday", time: "9:15", fromZone: 1, toZone: 1 },
  ]);
  expect(output).toBe(30);
});
// 3) weekdays Non peak hours (friday),zone:2-2 here the fare is less than daily cap,
test("should return 25", () => {
  const output = dailyTravelCard([
    { day: "wednesday", time: "12:00", fromZone: 1, toZone: 1 },
  ]);
  expect(output).toBe(25);
});
// 4) weekdays peak and Non hours (monday),zone:1-1,2-1 here the fare is greater than daily cap but we return daily cap of amount 120
test("should return 120", () => {
  const output = dailyTravelCard([
    { day: "monday", time: "10:20", fromZone: 2, toZone: 1 },
    { day: "monday", time: "10:45", fromZone: 1, toZone: 1 },
    { day: "monday", time: "16:15", fromZone: 1, toZone: 1 },
    { day: "monday", time: "18:15", fromZone: 1, toZone: 1 },
    { day: "monday", time: "19:00", fromZone: 1, toZone: 2 },
  ]);
  expect(output).toBe(120);
});
// 4) weekdays peak and Non hours (tuesday),zone:1-1 here the fare is greater than daily cap but we return daily cap of amount 100

test("should return 100", () => {
  const output = dailyTravelCard([
    { day: "tuesday", time: "10:20", fromZone: 1, toZone: 1 },
    { day: "tuesday", time: "10:45", fromZone: 1, toZone: 1 },
    { day: "tuesday", time: "16:15", fromZone: 1, toZone: 1 },
    { day: "tuesday", time: "18:15", fromZone: 1, toZone: 1 },
    { day: "tuesday", time: "19:00", fromZone: 1, toZone: 1 },
  ]);
  expect(output).toBe(100);
});

//////////////////////////  WEEKEND DAYS ///////////////////////////////

// 1) weekend days Non peak hours (sunday),zone:2-1 here the fare is less than daily cap,

test("should return 30", () => {
  const output = dailyTravelCard([
    { day: "sunday", time: "18:00", fromZone: 2, toZone: 1 },
  ]);
  expect(output).toBe(30);
});
// 2) weekend days peak hours (sunday),zone:1-2 here the fare is less than daily cap,

test("should return 35", () => {
  const output = dailyTravelCard([
    { day: "sunday", time: "18:00", fromZone: 1, toZone: 2 },
  ]);
  expect(output).toBe(35);
});
// 3) weekend days Non peak hours (sunday),zone:1-1 here the fare is less than daily cap,

test("should return 25", () => {
  const output = dailyTravelCard([
    { day: "sunday", time: "07:30", fromZone: 1, toZone: 1 },
  ]);
  expect(output).toBe(25);
});
// 4) weekend days peak hours (sunday),zone:1-1 here the fare is less than daily cap,

test("should return 25", () => {
  const output = dailyTravelCard([
    { day: "sunday", time: "18:00", fromZone: 2, toZone: 2 },
  ]);
  expect(output).toBe(25);
});
// 5) weekend days peak and Non hours (sunday),zone:2-1,1-1 here the fare is greater than daily cap but we return daily cap of amount 120

test("should return 120", () => {
  const output = dailyTravelCard([
    { day: "sunday", time: "10:20", fromZone: 2, toZone: 1 },
    { day: "sunday", time: "10:45", fromZone: 1, toZone: 1 },
    { day: "sunday", time: "16:15", fromZone: 1, toZone: 1 },
    { day: "sunday", time: "18:15", fromZone: 1, toZone: 1 },
    { day: "sunday", time: "19:00", fromZone: 1, toZone: 2 },
  ]);
  expect(output).toBe(120);
});
// 6) weekend days peak and Non hours (sunday),zone:2-2 here the fare is greater than daily cap but we return daily cap of amount 80

test("should return 80", () => {
  const output = dailyTravelCard([
    { day: "sunday", time: "10:20", fromZone: 2, toZone: 2 },
    { day: "sunday", time: "10:45", fromZone: 2, toZone: 2 },
    { day: "sunday", time: "16:15", fromZone: 2, toZone: 2 },
    { day: "sunday", time: "18:15", fromZone: 2, toZone: 2 },
    { day: "sunday", time: "19:00", fromZone: 2, toZone: 2 },
  ]);
  expect(output).toBe(80);
});
