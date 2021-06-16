// Display alert types
// window.alert('hello!')
// alert('hello');

// if(confirm('Do you want to continue?')) {
// console.log('confirmed');
// } else {
//     console.log('not confirmed');
// }

// console.log(prompt('what is your name?'));

//display browser info

console.log('browser type: ' + window.navigator.userAgent);
console.log('file location: ' + window.location.href);
console.log('protocol type: ' + window.location.protocol); //protocol type
console.log('domain name and port: ' + window.location.host); //domain name and port
console.log('file path: ' + window.location.pathname); //file path

// window.location.reload(); //reloads the page However the way this is set will reload forever....

//document.write('<h1>Hello</h1>');

//const popup = window.open('https://sitepoint.com','SitePoint','width=400,height=400,resizable=yes'); // create new window

// popup.close();

console.log('Height: ' + window.screen.height + 'width:' + window.screen.width);

document.cookie = 'name=I am a cookie!; secure';
console.log(document.cookie)

// const cookies = document.cookie.split("; ");
// for (crumb of cookies){
//     const [key,value] = crumb.split("=");
//     console.log(`The value of ${key} is ${value}`);
// }

// const expiryDate = new Date(); 
// const tomorrow = expiryDate.getTime() + 1000 * 60 * 60 * 24;
// expiryDate.setTime(tomorrow);
// document.cookie = `name=Batman; expires=${ expiryDate.toUTCString()}`;

// window.setTimeout( () => alert("Time's Up!"), 3000);