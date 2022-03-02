console.log("Hello world");
console.warn("This is a warning message");
console.error("Error connecting to server");

let name="Naqui";
let email= "a@a.com"
let password=1929349;
let age=28;
let country="United States"
let salary=46000
let taxes= salary*0.11
let color= "Royal Blue"
let college= "Yes"
let siblings= 6;
let dog= "Haze"
let job= "Marketing Specialist"
let run= "Yes"
let cellPhone= "Verzion"
let mom= "Valerie"
let book="Yes"
let computer="Yes"
let sport= "Basketball"
let walk= "Yes"
let experience= "Yes"
let spouse= "No"

let template=`
<p><b>Name:</b>${name}</p>
<p><b>Email:</b> ${email}</p>
<p><b>Salary:</b> ${salary}</p>
<p><b>Taxes:</b> ${taxes}</p>
<p><b>Favorite Color:</b>${color}</p>
<p><b>Previous College:</b> ${college}</p>
<p><b>Siblings:</b> ${siblings}</p>
<p><b>Pet Name:</b> ${dog}</p>
<p><b>Job Title:</b>${job}</p>
<p><b>Do you run daily?:</b> ${run}</p>
<p><b>Cell Phone Carrier:</b> ${cellPhone}</p>
<p><b>Mother's Name:</b> ${mom}</p>
<p><b>Do you read daily:</b>${book}</p>
<p><b>Any computer experience:</b> ${computer}</p>
<p><b>Favorite sport:</b> ${sport}</p>
<p><b>Walk at least 30 minutes:</b> ${walk}</p>
<p><b>Coding experience:</b>${experience}</p>
<p><b>Spouse:</b> ${spouse}</p>
<p><b>Passcode:</b> ${password}</p>
<p><b>Age:</b> ${age}</p>

`
console.log(template);

console.log(`My name is ${name}, email ${email}, salary ${salary}.`);
document.write(template);