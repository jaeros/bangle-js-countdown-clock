// -----------------------------------------
//  RESOURCES
// -----------------------------------------

var babyIcon = atob("Hh6DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///wAAAAAAAAAAP+AAP/+AAAAAAABwPwAAAOAAAAAAAOPxwAAAOAAAAAAB//xwBwB+AAAAAABwP/wB+BwAAAAAABwP+B/wB+AAAAAABwAAAAAAOAAAAAABwABwAAB+AAAAAABwB/wBwB/wAAAAABwB+BxwBx+AAAAAOAAAB/wPx/wAAAAOAAAAAB+OBwAAAAB/+AAAPwOB+AAAAAAB///wAOOBwAAAAAAB+AABwOAOAAAAAAAP///wOAPwAAAAAAP///x///wAAAAAABwABxwABwAAAAAAAOAOBwAB+AAAAAAAPwOBwABwAAAAAAABwOOAABwAAAAAAAB/wOAABwAAAAAAAAPwOAAOAAAAAAAAAB/+ABwAAAAAAAAAAP//+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

var holidayIcons = {
  "Halloween": atob("IyOBAAAAAAAAAcAAAAA8AAAAB8AAAAB8AAAAA8AAAAB4AAAADwAAAAHgAAB8Ph8AP///+A////+B////8H////8P////4/////5/n/5/z/H/j/v8P/D//4P8H///////////////////8//+f34//4/P4HcB+fwEQH8fwAAPw/+EP/g/+e/+A////4A////gAcf8cAAAPgAAAAAAAAA="),
  "Thanksgiving": atob("IyOBAAAAAAAAAAAAAAYADAAD4AfgAP4B/AA/4D/AB7wP+Ab/gf8Az/A/7gD+B/ngD8D/fA3wD++DvgA78OfP8H498/+fh3z/+eDvv/85yff/wPw+//s/j91ub/D5g938H7/3vwP7+eeAf4B8AAf8fz8Af//v4Af/+fwAP/w/gAH+AMAAHwAAAAHAAAAAAAAAAA+AAAAD8AAAAAAAAAA="),
  "Christmas": atob("IyODBbbbbbbbbaLbbbbbbbbbbbbbbbaMLbbbbbbbbbbbbbbbd9bbbbbbbbbbbbbaAJvoALbbbbbbbbbbbRt/99hbbbbbbbbbbbbRtv9hbbbbbbbbbbbbbR9/hbbbbbbbbbbbbbbN9+LbbbbbbbbbbbbbZttpbbbbbbbbbbbbbbMANLbbbbbbbbbbbbbQE0hbbbbbbbbbbbbbQG22hbbbbbbbbbbbbaG22k/xbbbbbbbbbbaEk2kP/7bbbbbbbbbbQ0k2v//bbbbbbbbbbQ0k0kP+LbbbbbbbbbQEAk22EBbbbbbbbbbaEGyk2mkLbbbbbbbbaEm2w0200LbbbbbbbaEg3+E02mwLbbbbbbbQkw2U2mm2xbbbbbbbQGmgkmk20mhbbbbbbaEmmk200022rbbbbbbQAAAAAAEgABbbbbbbaAgkkkkkkEgLbbbbbbQkkkkkmmkkMLbbbbbQkm0kkkkkmN8LbbbaAAEk0mmmk2tv9bbbaJJAk0k0kkkhN8LbbbRJIEmkmk2k0wMALbbaJNAmm22mmk0kkxbbbQJAkkk0kk2kkk2hbbQEAkk00kkkk0kkkBbaEkkkkkkkkkkm0mkLbQAAAAAgAAAAAAAABaA="),
  "New Year's Day": atob("IyOBAAAAAAAAAAAAAAAAAD8AAAB/4AAA//wAAD+DgAADwHAAAPwMAAA/w4AADzxwAAPjzgAA/D2AAD2D8AAPOD4AA8cHwADwcfAAPg5wAA/A/AAD2B8AAHODwAAccHAAA4ccAABw5wAADg/AABjh8AADnjwAAH//AAAH78AAAADwAAAAHAAAAAcAAAABwAAAAHAAAAAcAAAAAQAAAAA="),
  "MLK Day": atob("IyOBAAAAAAAAAH8AAAAP4AAAAAAAAAAAAAH/////////////////////////////+958z/4xz5H/xjnwf/jHPh//EOfH/8Ac+P/5A58P/yMz4P/kZgyP/MzBmf/////////////////////////////gAAAAAAAAAAAAAfwAAAA/gAAAB/AAAAD+AAAAH8AAAAP4AAAAfwAAAAAAAAA="),
  "Valentine's Day": atob("IyOBAAAAAAAAAAAAAA/gD+AD/wf+Af/x//B//3//D////+P////+f////9////////////////////////////////////////9/////z/////j////+H////8H////wH////AH///8AH///wAH///AAH//8AAH//wAAH//AAAH/8AAAD/gAAAD+AAAAD4AAAADgAAAAAAAAAAAAAAA="),
  "St. Patrick's Day": atob("IyOBAAADwAAAAPwAAAAfgwAAP/n4AA//fwAD/+/gAH///AAP/3/AAP/v/gAf/f/AAf8//AAH5/+AH4D/4Af8D/wB/+A+AD/8/AAH/7/gAP/3/gAP///gAH+//AAP9//AAf7/8AA/n/4AA+P/AAA4fwAAAEfgAAAIcAAABgAAAAGAAAAA4AAAAHgAAAB+AAAAH4AAAAHAAAAAIAAAAAA="),
  "Easter": atob("IyOBAAAB8AAAAP+AAAA/+AAAD/+AAAP/+AAA//+AAD//+AAH//8AAf//8AA8fx4ADwfB4AHAcBwAEcRxAAB8HwABH8fxADf9/2AH///8AP///4A////4B////wD/f9/gD8fx+ADwfB4ADEcRgAAcBwAAB8HwABn8fzAB///8AD///4AD///gAD//+AAH//8AAD//gAAD/+AAAA/gAAA="),
  "Mother's Day": atob("IyOBAAAAAAAAAAgAAYYHwMIwwQQYZxhAQxylCAhSlLEBElLSICJajkQETnGIQQjGMQfBGIAAAAAAAAAAAAAAAAAABwHAAAc45wABgOAwAGAAAwAIAAAgAwAABgBAAABADAAAGACAAAIAGAAAwAGAADAAGAAMAAGAAwAAGADAAACAIAAACAgAAACCAAAADYAAAADgAAAAAAAAAAAAAAA="),
  "Memorial Day": atob("IyOBAAGAAAAAMAAAAAIAAAAAQAAAAAgAAAABAAAAACAAAAAEAAAAAIAAAAAf+AAAAgP4AABACf8ACUHAYAEAL/wAIAYBgAfg//AAj/AGABAD/8AD/4D4AEAfwwAP/A/gAQD8DAA/4P+ABAfgMACAB/4AEAAAAAIAAAAAQAAAAAgAAAABAAAAACAAAAAEAAAAAIAAAAAQAAAAH8AAAAA="),
  "Father's Day": atob("IyOBAB+P/+AD+f//AGfwH/AM/gP/AZ/Af/Az+A/+Bn8B/8DP4D/4GfwHBwP7/8AAfj/4AAAB/AAAAD+AAAAH8AAAAP4AAAAfwAAAA/gAAAB/AAAAD+AAAAH8AAAAP4AAAAYwAAAAxgAAABjAAAAH/AAAAP+AAAAf8AAAA/4AAAB/wAAAD/gAAAP/gAAAf/AAAA/+AAAA/4AAAA/gAAA="),
  "Independence Day": atob("IyOBAHgAAAAfgAAAAz////5n////7MADgA+YADAA80kn//5gAP//zAAYAPmkkwAPMAB//eYAD//80kmAD5gAMADz////3n/////OAAAB+YAAAA8////55/////zv///fmAAAAPOAAAAef////8/////5gAMADzAAYAHmAAwAPMABgA+YAD//swAH/8ZgAAAAzAAAAB+AAAAD8AAAAAA="),
  "Labor Day": atob("IyOBAAMGDBgP////+//////hgwYMPCAAAIeAAAAA8AAAAB////////////gAAAAPAAAAAeAf4AA8B//AB4DM/4DwGZ34HgMzG4PAZmMweA/8Zg8D/4zB4OA7mDwYB/cHgwP/wPBj4HAeDHgGA8GAAMB4MAAYDwcAAwHgYADAPA8AOAeA8AYA8AYAwB4AwBgDwBgDAH///////////4A=")
};
// TODO - Date has some formatting that should be able to handle this
var monthNamesShortened = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

var dayInMillis = 1000 * 60 * 60 * 24;
const months = {
  JANUARY: 0,
  FEBRUARY: 1,
  MARCH: 2,
  APRIL: 3,
  MAY: 4,
  JUNE: 5,
  JULY: 6,
  AUGUST: 7,
  SEPTEMBER: 8,
  OCTOBER: 9,
  NOVEMBER: 10,
  DECEMBER: 11
};

const weekdays = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6
};

var holidata = [
  // name: String description of holiday
  // date: {month: 0-11, day: 1-<end of month>}
  // relative: {month: 1-11, weekday: 0-6, n: -1, 1-4?}
  // enumerated: {<year>: {month: 0-11, day: 1-<end of month>}}
  {
    name: "New Year's Day",
    date: {
      month: months.JANUARY,
      day: 1
    },
    color: {r: 0, g: 1, b: 1}
  },
  {
    name: "MLK Day",
    relative: {
      month: months.JANUARY,
      weekday: weekdays.MONDAY,
      n: 3
    },
    color: {r: 0, g: 0, b: 0}
  },
  {
    name: "Valentine's Day",
    date: {
      month: months.FEBRUARY,
      day: 14
    },
    color: {r: 1, g: 0, b: 0}
  },
  {
    name: "St. Patrick's Day",
    date: {
      month: months.MARCH,
      day: 17
    },
    color: {r: 0, g: 1, b: 0}
  },
  {
    // Easter day calculations are *weird*. We'll cop out and just
    // enumerate the next 10 years.
    name: "Easter",
    enumerated: {
      2024: {month: months.MARCH, day: 31},
      2025: {month: months.APRIL, day: 20},
      2026: {month: months.APRIL, day: 5},
      2027: {month: months.MARCH, day: 28},
      2028: {month: months.APRIL, day: 16},
      2029: {month: months.APRIL, day: 1},
      2030: {month: months.APRIL, day: 21},
      2031: {month: months.APRIL, day: 13},
      2032: {month: months.MARCH, day: 28},
      2033: {month: months.APRIL, day: 17},
      2034: {month: months.APRIL, day: 9}
    },
    color: {r: 0, g: 1, b: 1}
  },
  {
    name: "Mother's Day",
    relative: {
      month: months.MAY,
      weekday: weekdays.SUNDAY,
      n: 2
    },
    color: {r: 1, g: 0, b: 1}
  },
  {
    name: "Memorial Day",
    relative: {
      month: months.MAY,
      weekday: weekdays.MONDAY,
      n: -1 // Last monday of the month
    },
    color: {r: 0, g: 0, b: 0}
  },
  {
    name: "Father's Day",
    relative: {
      month: months.JUNE,
      weekday: weekdays.SUNDAY,
      n: 3
    },
    color: {r: 0, g: 0, b: 1}
  },
  {
    name: "Independence Day",
    date: {
      month: months.JULY,
      day: 4
    },
    color: {r: 1, g: 0, b: 0}
  },
  {
    name: "Labor Day",
    relative: {
      month: months.SEPTEMBER,
      weekday: weekdays.MONDAY,
      n: 1
    },
    color: {r: 0, g: 0, b: 0}
  },
  {
    name: "Halloween",
    date: {
      month: months.OCTOBER,
      day: 31
    },
    color: {r: 0, g: 0, b: 0}
  },
  {
    name: "Thanksgiving",
    relative: {
      month: months.NOVEMBER,
      weekday: weekdays.THURSDAY,
      n: 4
    },
    color: {r: 0, g: 0, b: 0}
  },
  {
    name: "Christmas",
    date: {
      month: months.DECEMBER,
      day: 25
    },
    color: {r: 1, g: 0, b: 0}
  }
];

require("FontDylex7x13").add(Graphics);

// -----------------------------------------
//  CODE
// -----------------------------------------

var dueDateTimestamp = 1724079600000;
var holidays;

function init() {
  g.clear();
  holidays = getOrderedHolidays();

  // Initial render on load
  draw();

  // Update every minute
  setInterval(draw, 1000 * 60);

  // Make the button open the launcher
  Bangle.setUI("clock");

  // Load widgets
  Bangle.loadWidgets();
}

// Returns the next holiday, given the current date and an ordered list of holidays
function getNextHoliday(orderedHolidays) {
  // Remove any past holidays
  // TODO - recalculate next year's and add to the end of the list!
  var today = new Date();
  while (orderedHolidays && orderedHolidays.length && !isCurrentOrFutureDate(today, orderedHolidays[0])) {
    orderedHolidays.shift();
  }

  // Validate there are holidays left in the list
  if (orderedHolidays == null || orderedHolidays.length < 1) {
    throw new Error("Ran out of holidays!");
  }

  return orderedHolidays[0];
}

// Returns a sorted list of holidays. This list should only be calculated
// once per run, and cached. This assumes the watch app will not run continuously for more
// than one year, which is hopefully a safe assumption
function getOrderedHolidays() {
  // TODO - load birthday list from a json file!
  
  var today = new Date();

  // Convert holiday definitions list to a list of holidays with dates
  var holidayList = holidata.map((holiday) => {
    return {
      name: holiday.name,
      date: getNextDateForHoliday(today, holiday),
      color: holiday.color,
    };
  });

  // Sort list by date
  holidayList.sort((a, b) => {
    return a.date.valueOf() - b.date.valueOf();
  });

  return holidayList;
}

// Given the current date, returns the next (future) date for the given holiday definition
function getNextDateForHoliday(today, holiday) {

  var year = today.getFullYear();
  var d;

  if (holiday.enumerated) {
    // For enumerated holidays, use the current year and retrieve the date. If it's in the past 
    // for the present year, then use next year's holiday instead

    if (! (year in holiday.enumerated)) {
      throw new Error("Can't find holiday for current year!");
    }

    var dateInfo = holiday.enumerated[year];
    d = new Date(year, dateInfo.month, dateInfo.day);

    // Use next year's date if this year's date is already past
    if (!isCurrentOrFutureDate(today, d)) {
      d = new Date(year + 1, dateInfo.month, dateInfo.day);
    }

    return d;
  } else if (holiday.relative) {
    // For relative dates, calculate the exact date for this year. If it's already in the past
    // for the present year, then calculate the exact date for next year instead and return.
    d = getRelativeDate(year, holiday.relative);

    if (!isCurrentOrFutureDate(today, d)) {
      d = getRelativeDate(year + 1, holiday.relative);
    }

    return d;

  } else if (holiday.date) {

    // Just plug in the numbers, increment the year if the date is already past
    d = new Date(year, holiday.date.month, holiday.date.day);

    if (!isCurrentOrFutureDate(today, d)) {
      d = new Date(year + 1, holiday.date.month, holiday.date.day);
    }

    return d;

  } else {
    throw new Error ("Unexpected holiday data format!");
  }
}

function isCurrentOrFutureDate(today, dateInQuestion) {
  return dateInQuestion.valueOf() >= today.valueOf();
}

function getRelativeDate(year, relativeDateInfo) {
  var d = new Date(year, relativeDateInfo.month, 1);
  var desiredWeekday = relativeDateInfo.weekday;
  var daysInMonth = getDaysInMonth(relativeDateInfo.month, year);

  if (relativeDateInfo.n < 0) {
    // For n < 0, we want n-to-last weekday specified. Examples:
    // for n = -1 for weekday FRIDAY, we want the last friday of the month
    // for n = -2 for weekday MONDAY, we want the second-to-last monday

    // Set the day to the last day of the month, check what the weekday is for that date,
    // then calculate the required offset to reach the desired date

    d.setDate(daysInMonth);
    var lastWeekday = d.getDay();

    // Calculate how many days back we need to go to get to the correct weekday
    var daysBack;
    if (desiredWeekday < lastWeekday) {
      daysBack = lastWeekday - desiredWeekday;
    } else if (desiredWeekday > lastWeekday) {
      // Calculate difference
      daysBack = lastWeekday + (6 - desiredWeekday);
    } else {
      // Last day of the month is the correct weekday, no change
      daysBack = 0;
    }

    // Now add on each week for n < -1
    daysBack += 7 * (relativeDateInfo.n + 1);

    // Finally, calculate the resulting date and verify it's valid
    var newDate = daysInMonth - daysBack;

    if (newDate < 1) {
      throw new Error("Bad date calculated for relative date with n < 0");
    }

    d.setDate(newDate);
    return d;

  } else if (relativeDateInfo.n > 0) {
    // Set the date to the first day of the specified month. Then calculate how many days to add
    // to get to the desired weekday, then add weeks for each n > 1 to reach desired date

    d.setDate(1);

    var firstWeekday = d.getDay();

    var daysToAdd;
    if (firstWeekday > desiredWeekday) {
      daysToAdd = (6 - firstWeekday) + desiredWeekday + 1;
    } else if (firstWeekday < desiredWeekday) {
      daysToAdd = desiredWeekday - firstWeekday;
    } else {
      // First day of the month is the desired weekday
      daysToAdd = 0;
    }

    // Add a week for each n > 1
    daysToAdd += 7 * (relativeDateInfo.n - 1);

    // Validate we didn't go over the number of days in the month
    if (1 + daysToAdd > daysInMonth) {
      throw new Error("Bad date calculated for relative date with n > 0");
    }

    // Return the date
    d.setDate(1 + daysToAdd);
    return d;
  } else {
    throw new Error("Unsupported relative date info value");
  }
}

function getDaysInMonth(month, year) {
  // Setting day to 0 will return the last day of the previous month
  // The date constructor also seems to be okay passing 12 for the month value
  // (which should be limited at 11, as it's 0-indexed month), so no issues with 
  // using it this way for December.
  return new Date(year, month + 1, 0).getDate();
}

function draw() {
  // Clear screen with white
  g.setColor(1,1,1).fillRect({x:0,y:0,w:g.getWidth(),h:g.getHeight()});

  // Draw widgets
  Bangle.drawWidgets();

  // Create formatted date string
  var d = new Date();
  var h = d.getHours(), 
      m = d.getMinutes();
  var isAm = h <= 12;
  h = h > 12 ? h - 12 : h;
  var time = h + ":" + m.toString().padStart(2,"0");

  var month = d.getMonth(),
      dayOfWeek = d.getDay(),
      dayOfMonth = d.getDate();

  // Set fonts options
  g.setColor(0, 0, 0);
  g.setFont("Vector",60);

  // Calculate position based on screen and string widths
  var timeWidth = g.stringWidth(time);
  var xPosition = Math.round((g.getWidth() / 2) - (timeWidth / 2)) + 2;
  var yPosition = Math.round((g.getHeight() / 2) - 30);

  // Draw time
  g.drawString(time, xPosition, yPosition);

  // Draw am/pm
  g.setFont("Dylex7x13");
  g.drawString(isAm ? "AM" : "PM", (g.getWidth() / 2) + (timeWidth / 2) - 22, (g.getHeight() / 2) + 25);

  // Draw day/date/month
  var dateString = dayNames[dayOfWeek] + ", " + dayOfMonth + " " + monthNamesShortened[month];
  g.setFont("Dylex7x13", 2);
  xPosition = Math.round((g.getWidth() / 2) - (g.stringWidth(dateString) / 2));
  g.drawString(dateString, xPosition, (g.getHeight() / 2 - 60));

  // Draw days until
  var nextHoliday = getNextHoliday(holidays);
  var c = nextHoliday.color;
  g.setColor(c.r,c.g,c.b).fillRect({x:0, y:133, w: 176, h: 43});
  g.setColor(1,1,1).setFont("Dylex7x13", 2);
  var daysUntilHoliday = getDaysToHoliday(d, nextHoliday);
  var dueString = daysUntilHoliday + " day" + (daysUntilHoliday == 1 ? "" : "s");

  xPosition = Math.round((g.getWidth() / 2) - ((g.stringWidth(dueString) + 35 + 5) / 2));
  g.drawString(dueString, xPosition + 35 + 5, 142);
  
  var image = nextHoliday.name in holidayIcons ? holidayIcons[nextHoliday.name] : babyIcon;
  
  g.drawImage(image, xPosition, 138);
}

function getDaysToHoliday(now, holiday) {
  // Get "today", at the beginning of the day to get a round number of days to holiday
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var diff = holiday.date.valueOf() - today.valueOf();
  return Math.floor(diff / dayInMillis);
}

init();
