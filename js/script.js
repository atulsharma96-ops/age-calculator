// alert("jkl;");
const today = new Date();
console.log(today);

let day = today.getDate();
console.log(day);

let month = today.getMonth() + 1;
console.log(month);

let year = today.getFullYear();
console.log(year);

function currentDate() {
    document.getElementById("currentdate").innerHTML = `${day}-${month}-${year}<i class="fa-solid fa-calendar fw-semibold ms-3"></i>`;
}
currentDate();

let para = document.getElementById("para");
let bday = document.getElementById("bday");
// console.log(bday.innerHTML);
function chk() {
    // alert("hii hiii");
    let dt = document.getElementById("userdate").value;

    const userDate = new Date(dt);

    console.log(userDate);
    let userDay = userDate.getDate();
    // console.log(userDay);
    let userMonth = userDate.getMonth() + 1;
    // console.log(userMonth);
    let userYear = userDate.getFullYear();
    // console.log(userYear);

    // alert(para.innerHTML);
    if (year >= userYear) {

        // agr usermonth aur user date dono current month aue day se chhote hote hai tab
        if ((month >= userMonth) && (day >= userDay)) {
            console.log("usermonth and  userdate dono chhote hai");
            let dobday = day - userDay;
            let dobmonth = month - userMonth;
            let dobyear = year - userYear;
            // console.log(`${dobyear} : year ${dobmonth} : month ${dobday} : din`);
            para.innerHTML = ` You are ${dobyear} year, ${dobmonth} month, ${dobday} days old...😉😒`;
            bday.innerHTML = `🎂 your birthday is coming in : ${365 - ((dobmonth * 30) + dobday)} days`;
        }
        // sgr usermonth chhota aur userday bada hota hai tab
        else if ((month >= userMonth) && (day < userDay)) {
            console.log(" usermonth chhota hai aur userday bada hai");
            let dobday = (day + 30) - userDay;
            let dobmonth = (month - 1) - userMonth;
            let dobyear = year - userYear;
            // console.log(`${dobyear} : year ${dobmonth} : month ${dobday} : din`);
            para.innerHTML = ` You are ${dobyear} year, ${dobmonth} month, ${dobday} days old...😉😒`;
            bday.innerHTML = `🎂 your birthday is coming in : ${365 - ((dobmonth * 30) + dobday)} days`;
        }
        // agr usermonth bada aur user day chhota hota hai tab
        else if ((month < userMonth) && (day >= userDay)) {
            console.log("usermonth bada hai userday chhota hai");
            let dobday = day - userDay;
            let dobmonth = (month + 12) - userMonth;
            let dobyear = (year - 1) - userYear;
            // console.log(`${dobyear} : year ${dobmonth} : month ${dobday} : din`);
            para.innerHTML = ` You are ${dobyear} year, ${dobmonth} month, ${dobday} days old...😉😒`;
            bday.innerHTML = `🎂 your birthday is coming in : ${365 - ((dobmonth * 30) + dobday)} days`;
        }
        // agr usermonth aur userday dono bade hote hai tab
        else if ((month < userMonth) && (day < userDay)) {
            console.log("usermonth aur userday dono bade hai");
            let dobday = (day + 30) - userDay;
            let dobmonth = ((month - 1) + 12) - userMonth;
            let dobyear = (year - 1) - userYear;
            // console.log(`${dobyear} : year ${dobmonth} : month ${dobday} : din`);
            para.innerHTML = ` You are ${dobyear} year, ${dobmonth} month, ${dobday} days old...😉😒`;
            bday.innerHTML = `🎂 your birthday is coming in : ${365 - ((dobmonth * 30) + dobday)} days`;

        }
        else {
            console.log("else condition me ho bhai");
        }

    }
    else {
        alert("Please enter valid date");

    }
}