"use strict";

var _Programmer = _interopRequireDefault(require("./classes/Programmer"));

var _Junior = _interopRequireDefault(require("./classes/Junior"));

var _Mid = _interopRequireDefault(require("./classes/Mid"));

var _Senior = _interopRequireDefault(require("./classes/Senior"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//uwaga, uwaga - dodać node_modules do .gitignore chyba
var features = {
  skills: 10,
  experience: 10,
  willingness: 10
};
var task = {
  difficult: 1,
  size: 1
};
var programmer = new _Programmer["default"](features);
var time = programmer.getApproximateTimeTaskDoneInHours(task);
console.log(time);
var junior = new _Junior["default"]({});
var mid = new _Mid["default"]({});
var senior = new _Senior["default"]({});
var juniorTime = junior.getApproximateTimeTaskDoneInHours(task);
var midTime = mid.getApproximateTimeTaskDoneInHours(task);
var seniorTime = senior.getApproximateTimeTaskDoneInHours(task);
console.log("Junior: ".concat(juniorTime));
console.log("Mid: ".concat(midTime));
console.log("Senior: ".concat(seniorTime));