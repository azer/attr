var ada    = require("./");

it('defines a property with pubsub', function(done){

  var foo = ada(3.14);

  expect(foo()).to.equal(3.14);

  foo.subscribe(function(val, old){
    expect(foo()).to.equal(156);
    done();
  });


  function unsubscribed(){
    done(new Error('unsubscribed callback get called'));
  }

  foo.subscribe(unsubscribed);
  foo.unsubscribe(unsubscribed);

  foo(156);

});

describe('.all', function(){

  it('converts the content of given object to ada properties', function(){

    var d = new Date;

    var foo = ada.all({
      n: 3.14,
      s: 'hello',
      f: function(){ return 'f'; },
      b: true,
      u: undefined,
      d: d
    });

    expect(foo.n()).to.equal(3.14);
    expect(foo.s()).to.equal('hello');
    expect(foo.f()).to.equal('f');
    expect(foo.b()).to.be.true;
    expect(foo.u()).to.not.exist;
    expect(foo.d()).to.equal(d);

  });

});
