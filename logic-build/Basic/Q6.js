function isLeapYear(year) {
  if (year % 4 === 0) {
    console.log("year:- " + year + " is leap year");
  } else {
    console.log("year:-" + year + "is not a leap year");
  }
}

isLeapYear(2020);
