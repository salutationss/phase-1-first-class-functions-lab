const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);

};


const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function (multiplyThis) {
    return function (num) {
        return num * multiplyThis;
    };

}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversToRun) {
    return driversToRun(drivers);
};

