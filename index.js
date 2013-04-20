
/**
 * Module dependencies.
 */

var isString = require('part-is-string')
  , isArray = require('part-is-array')
  , indexof = require('indexof');

/**
 * Expose `validate`.
 */

module.exports = validate;

/**
 * Validate an object against an array of constraints.
 *
 * To define validations, use the `tower-validator` module.
 * XXX: that isn't implemented yet, they're in here.
 *
 * @param {Object} obj Record or other simple JavaScript object.
 * @param {Array} constraints
 */

function validate(obj, constraints) {
  for (var i = 0, n = constraints.length; i < n; i++) {
    if (!validator(constraints[i][1])(obj, constraints[i][0], constraints[i][2]))
      return false;
  }

  return true;
}

// XXX: need to think about how to put this into separate modules for each.
function validator(name, fn) {
  return 1 === arguments.length
    ? validator[name]
    : validator[name] = fn;
}

validator('eq', function(obj, key, val){
  return obj[key] == val;
});

validator('neq', function(obj, key, val){
  return obj[key] != val;
});

validator('gte', function(obj, key, val){
  return obj[key] >= val;
});

validator('gt', function(obj, key, val){
  return obj[key] > val;
});

validator('lte', function(obj, key, val){
  return obj[key] <= val;
});

validator('lt', function(obj, key, val){
  return obj[key] < val;
});

validator('match', function(obj, key, val){
  return isString(obj) && obj[key].match(val);
});

validator('isString', function(obj, key){
  return isString(obj[key]);
});

validator('isArray', function(obj, key){
  return isArray(obj[key]);
});

validator('in', function(obj, key, val){
  return -1 < indexof(val, obj[key]);
});

validator('nin', function(obj, key, val){
  return -1 === indexof(val, obj[key]);
});