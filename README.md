## attr [![Build Status](https://travis-ci.org/azer/attr.png)](https://travis-ci.org/azer/attr)
Define values that you can subscribe for changes. Based on [pubsub](http://github.com/azer/pubsub)

```js
message = attr('Hello World')

message()
// => Hello World

message.subscribe(function (update, old) {
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
message = attr('Hello World')
message()
// => Hello World
```

To get the value of an attr, call it with no parameters:

```js
message()
// => Hello World
```

To change the value of an attr, call the attr with new value:

```js
message('Foo Bar')

message()
// => Foo Bar
```

### #subscribe(`function`)

Subscribes the given function to changes.

```js
message.subscribe(function () {

  message()
  // => Lorem Ipsum

})

message('Lorem Ipsum')
```

### #subscribe.once(`function`)

### #unsubscribe(`function`)

### #unsubscribe.once(`function`)
