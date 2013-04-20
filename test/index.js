var validate = 'undefined' == typeof window
  ? require('..')
  : require('tower-validate'); // how to do this better?

var assert = require('assert');

describe('validate', function(){
  it('should validate', function(){
    assert(false === validate({ count: 10 }, [[ 'count', 'gte', 12 ]]));
  });

  it('should validate `in` array', function(){
    assert(true === validate({ x: 2 }, [[ 'x', 'in', [1, 2, 3] ]]));
    assert(false === validate({ x: 7 }, [[ 'x', 'in', [1, 2, 3] ]]));
    // XXX: any other cases?
  });

  it('should validate `nin` array', function(){
    assert(false === validate({ x: 2 }, [[ 'x', 'nin', [1, 2, 3] ]]));
    assert(true === validate({ x: 7 }, [[ 'x', 'nin', [1, 2, 3] ]]));
    // XXX: any other cases?
  });
});
