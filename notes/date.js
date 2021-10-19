// create a Date() object
let now = new Date();

// create array
let day = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday');
let month = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');

// get the day
let dayToday = now.getDay();
dayToday = day[dayToday];

// get the date
let date = now.getUTCDate();

// get the month
let Month = now.getUTCMonth();
Month = month[Month];

// get the year
let year = now.getUTCFullYear();

let today = dayToday + " " + Month + " " + date + " " + year;
document.getElementById('day').innerHTML = today;