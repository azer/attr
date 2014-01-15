var attr  = require("./");

describe('attr', function(){

  it('returns a new empty attr', function(){
    var foo = attr();
    expect(foo()).to.not.exist;
  });

  it('returns a new attr with given value', function(){
    var foo = attr(3.14);
    expect(foo()).to.equal(3.14);
  });

  it('sets the value when it s called with a parameter', function(){
    var foo = attr(3.14);
    foo(156);
    expect(foo()).to.equal(156);
  });

  it('publishes an update when it s changed', function(done){
    var foo = attr(600);

    foo.subscribe(function () {
      expect(foo()).to.equal(700);
      done();
    });

    foo(700);
  });

  it('doesnt publish to unsubscribed callbacks', function(done){
    var foo = attr(600);

    foo.subscribe(fail);
    foo.unsubscribe(fail);
    foo.subscribe(function () {
      return done();
    });

    foo(700);

    function fail () {
      return done(new Error('Unsubscription failed'));
    }

  });

});
