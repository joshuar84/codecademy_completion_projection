// Variable representing the completion percentage
let percentCompleted = 11;

const progressBarFullElement = document.getElementById('progressBarFull');
console.log(progressBarFullElement);
const maxPercentage = 100;

progressBarFullElement.style.width = `${(percentCompleted/maxPercentage) * 100}%`;

// Html element variables sure
const startDateElement = document.getElementById('start_date');
const percentElement = document.getElementById('percent_completed');
const projectionElement = document.getElementById('completion_projection');
const sinceElement = document.getElementById('days_since');
const daysLeftElement = document.getElementById('days_left');

// This function returns a date object with my estimated start date
const getStartDate = () => {
    const date = new Date('December 21, 2020 12:00:00');
    return date;
};

// This variable stores the start date object
const startDateObject = getStartDate();

// This function will return a current date object
const currentDateFunction = () => {
    const date = new Date();
    return date;
};

// This variable stores the current date object
const dateNowObject = currentDateFunction();

// This function should take in a date object and convert it into a human readable string format without hours of the day
const dateObjectToString = (dateObject) => {
    const stringDate = dateObject.toDateString();
    return stringDate;
}

// This variable stores the start date into readable string format
const startDateString = dateObjectToString(startDateObject);

// Start date element gets the start date string
startDateElement.innerText = startDateString;

// This function will take in the start date object and current date object and return the difference in milliseconds
const timeDifference = (nowObj = dateNowObject, startObj = startDateObject) => {
    const difference = nowObj - startObj;
    return difference;
};

// This function will take in milliseconds and convert it into days rounded up or down
const millisecondsIntoDays = (milliseconds = timeDifference()) => {
    const days = milliseconds / (1000 * 60 * 60 * 24);
    return Math.round(days);
}

// Storing the days since I started up til now
const daysSince = millisecondsIntoDays();

// sinceElement gets daysSince variable
sinceElement.innerText = daysSince;

// function will convert a number and convert it into a string representing percentage
const numToPercentString = (num = percentCompleted) => {
    const string = `${num}%`;
    return string;
};

// The percent element inner text gets a string representation of percentage completed
percentElement.innerText = numToPercentString();

// This function should take in the percentage completed as a number and the amount of days since start as a number in milliseconds and based on the rate of completion project how much more time in milliseconds until 100 percent
const totalMillisecondsProjection = (percent, milliseconds) => {
    const rateOfCompletion = milliseconds / percent;
    const totalTime = rateOfCompletion * 100;
    return totalTime;
};

// The total projected time it would take to complete the course from start to finish in milliseconds
const timeTotalInMilliseconds = totalMillisecondsProjection(percentCompleted, timeDifference());

// Variable that is the difference between the projected time in milliseconds and the amount of time since start in milliseconds
const timeDifferenceInMilliseconds = timeTotalInMilliseconds - timeDifference();

// Days left until projected completion
const daysRemaining = millisecondsIntoDays(timeDifferenceInMilliseconds);

// Function should take in a date object and time to add in milliseconds and return the future date object
const futureDateCalculator = (obj, msToAdd) => {
    const futureDate = new Date(obj.getTime() + msToAdd);
    return futureDate;
};

// This is the projected future date object saved to a variable
const dateInTheFuture = futureDateCalculator(dateNowObject, timeDifferenceInMilliseconds);

// This is a readable string of the future date
const futureDateString = dateObjectToString(dateInTheFuture);

// projection element gets the future date string
projectionElement.innerText = futureDateString;

// Variable that stores the milliseconds remaining converted into days
const daysLeft = millisecondsIntoDays(timeDifferenceInMilliseconds);

// daysLeftElement inner text gets amount of days left
daysLeftElement.innerText = daysLeft;
