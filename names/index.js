const namesList = require("../country/state/city/index");

const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (nameslist) => {
  return getFirstNames(nameslist);
};

module.exports = getPeopleInCity;
