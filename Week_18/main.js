// Challenge => 01
let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";
let re = /^((https?):\/\/)?\w+\.\w+(\.\w+)?(:\d+)?(\/.*)?$/gi;
console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));

// Assignment => 01
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
re = /^\d+:\w+:\d+:\d+:\d+:\d+:\d+:\d+$/;
console.log(ip.match(re));

// Assignment => 02
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
re = /Os\d*O/g;
console.log(specialNames.match(re)); // ['Os10O', 'OsO', 'Os100O']

// Assignment => 03
let phone = "+(995)-123 (4567)";
re = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/;
console.log(phone.match(re));

// Assignment => 04
re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// Assignment => 05
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";
re = /\d{2}(\/| | - )\d{2}(\/| | - )\d{2,4}/;
console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
