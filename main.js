//Assigning a random number to runners
let raceNumber = Math.floor(Math.random(1)*1001);
console.log(raceNumber);
//Early registered runners
let earlyRegistred = true;
//Runners age
let runnersAge = 17;
//Checking if runners are adults
runnersAge > 18 && earlyRegistred  ? raceNumber += 1000 : raceNumber;
console.log(raceNumber);
/*Checking and displaying age and registration time, in correspondence
 with runners age and registration time*/
if (runnersAge > 18 && earlyRegistred) { 
console.log(`The race will start at 9:30 am. Your race is:
 number ${raceNumber}`);
} else if (runnersAge > 18 && earlyRegistred === false) {
    console.log(`The race will start at 11:am. Your race is:
     number ${raceNumber}`);
}else if (runnersAge < 18) {
    console.log(`The race will start at 12:30 am. Your race
     number is: ${raceNumber}`);
} else {
    console.log('Please contact the organisers to find out your running time and race number.');
    };
