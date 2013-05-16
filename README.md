Minimalistic, Observable attributes. See Also: [attrs](https://github.com/azer/attrs)

```js
message = attr('Hello World')

message()
// => Hello World

message.subscribe(function(update, old){
  console.log(update, old)
  // => 你好, Hello World
})

message('你好')
message()
// => 你好
```

## Install

```bash
$ npm install attr
```

## API

### attr()

Creates and returns a new attr.

```js
var message = attr('Hello World');
message()
// => Hello World
```

### attrs(object)

Converts the content of given object to attributes.

```js
var attrs = require('attr').atttrs;

var content = attrs({
  foo: 3.14,
  bar: 159
})

content.foo()
// => 3.14

content.bar.subscribe(function(update, old){
  console.log(update, old)
  // => 265, 156
});

content.bar(265)
```

### all(object)

Alias for `attrs`

### object(object)

Alias for `attrs`

### #getter(function)

Sets the `getter`

### #setter(function)

Sets the `setter`

### #subscribe(callback)

Subscribes the given function to changes.

### #unsubscribe(callback)

Unsubscribes the given function from changes.

![](https://dl.dropboxusercontent.com/s/ylywhgm4lcbh3tz/npmel_11.jpg)
