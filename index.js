let arr = [];
const returnFirstTwoDrivers = function (arr) {
  return arr.slice(0, 2);
};

console.log(returnFirstTwoDrivers(["AZZAM", "FAHD", "QAID", "ALSULMI"]));

let arrOne = [];
const returnLastTwoDrivers = function (arrOne) {
  return arrOne.slice(arrOne.length - 2);
};

console.log(returnLastTwoDrivers(["AZZAM", "FAHD", "QAID", "ALSULMI"]));

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function (num2) {
    return num * num2;
  };
}

const fareDoubler = createFareMultiplier(2);
fareDoubler(10);

const fareTripler = createFareMultiplier(3);
fareTripler(12);
let drivers = [];
function selectDifferentDrivers(drivers, fun) {
  return fun(drivers);
}

selectDifferentDrivers(
  ["AZZAM", "FAHD", "QAID", "ALSULMI"],
  returnFirstTwoDrivers()
);
