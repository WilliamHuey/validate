var validate = 'undefined' == typeof window
  ? require('..')
  : require('tower-validate'); // how to do this better?

var assert = require('assert');

describe('validate', function(){
  it('should validate', function(){
    assert(false === validate({ count: 10 }, [[ 'count', 'gte', 12 ]]));
  });
});
