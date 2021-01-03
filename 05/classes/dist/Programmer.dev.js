"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Programmer =
/*#__PURE__*/
function () {
  function Programmer() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$skills = _ref.skills,
        skills = _ref$skills === void 0 ? null : _ref$skills,
        _ref$experience = _ref.experience,
        experience = _ref$experience === void 0 ? null : _ref$experience,
        _ref$willingness = _ref.willingness,
        willingness = _ref$willingness === void 0 ? null : _ref$willingness;

    _classCallCheck(this, Programmer);

    this.skills = this.isNumber(skills) ? skills : this.getSkillsRandomNumber();
    this.experience = this.isNumber(experience) ? experience : this.getExperienceRandomNumber();
    this.willingness = this.isNumber(willingness) ? willingness : this.getWillingnessRandomNumber();
  }

  _createClass(Programmer, [{
    key: "isNumber",
    value: function isNumber(value) {
      if (typeof value === 'number' && value === value // NaN === NaN => false
      ) {
          return true;
        }

      return false;
    }
  }, {
    key: "getSkillsRandomNumber",
    value: function getSkillsRandomNumber() {
      return this.getRandomNumber.apply(this, _toConsumableArray(this.getMinMaxSkills()));
    }
  }, {
    key: "getExperienceRandomNumber",
    value: function getExperienceRandomNumber() {
      return this.getRandomNumber.apply(this, _toConsumableArray(this.getMinMaxExperience()));
    }
  }, {
    key: "getWillingnessRandomNumber",
    value: function getWillingnessRandomNumber() {
      return this.getRandomNumber.apply(this, _toConsumableArray(this.getMinMaxWilligness()));
    }
  }, {
    key: "getMinMaxSkills",
    value: function getMinMaxSkills() {
      return [0, 100];
    }
  }, {
    key: "getMinMaxExperience",
    value: function getMinMaxExperience() {
      return [0, 100];
    }
  }, {
    key: "getMinMaxWilligness",
    value: function getMinMaxWilligness() {
      return [0, 100];
    }
  }, {
    key: "getRandomNumber",
    value: function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }, {
    key: "getApproximateTimeTaskDoneInHours",
    value: function getApproximateTimeTaskDoneInHours(_ref2) {
      var difficult = _ref2.difficult,
          size = _ref2.size;
      var counter = 0;
      var time = 0;
      var rand;
      var done = 5 * difficult * size;
      var chance = (0.5 * this.skills + 0.3 * this.experience + 0.2 * this.willingness) / 3;

      while (counter < done && time < 1000) {
        rand = this.getRandomNumber(0, 100);

        if (rand <= chance) {
          counter++;
        }

        time += 0.25;
      }

      return time;
    }
  }]);

  return Programmer;
}();

exports["default"] = Programmer;