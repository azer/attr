var test = require('prova');
var attr  = require("./");

test('returns a new empty attr', function (t) {
  t.plan(1);
  var foo = attr();
  t.notOk(foo());
});

test('returns a new attr with given value', function (t) {
  t.plan(1);
  var foo = attr(3.14);
  t.equal(foo(), 3.14);
});

test('sets the value when it s called with a parameter', function (t) {
  t.plan(1);

  var foo = attr(3.14);
  foo(156);
  t.equal(foo(), 156);
});

test('publishes an update when it s changed', function (t) {
  var foo = attr(600);

  foo.subscribe(function () {
    t.equal(foo(), 700);
    t.end();
  });

  foo(700);
});

test('doesnt publish to unsubscribed callbacks', function (t) {
  var foo = attr(600);

  foo.subscribe(fail);
  foo.unsubscribe(fail);
  foo.subscribe(function () {
    return t.end();
  });

  foo(700);

  function fail () {
    t.error(new Error('Unsubscription failed'));
  }
});
