// Leet code Math question number: 1185.

// Given a date, return the corresponding day of the week for that date.

// The input is given as three integers representing the day, month and year respectively.

// Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

// Example 1:

// Input: day = 31, month = 8, year = 2019
// Output: "Saturday"
// Example 2:

// Input: day = 18, month = 7, year = 1999
// Output: "Sunday"
// Example 3:

// Input: day = 15, month = 8, year = 1993
// Output: "Sunday"

// Constraints:

// The given dates are valid dates between the years 1971 and 2100.

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let Day = new Date(year, month - 1, day).getDay();
  // passing year , month , day to Date get info it. using Date function methods accessing Day which index from 0-6 means 1-7 days of week uing index  we acces Day from array of days
  return days[Day];
};

let testCases = [
  // [day, month, year]
  [8, 5, 2025],
  [1, 1, 2025],
  [15, 8, 2025],
  [29, 2, 2024],
  [12, 11, 2021],
  [31, 12, 2023],
  [22, 7, 2019],
  [1, 1, 2023],
  [29, 2, 2020],
  [14, 2, 2025],
];
testCases.forEach((n) => console.log(dayOfTheWeek(n[0], n[1], n[2])));
