var pubsub = require("pubsub");

module.exports = create;

function create () {
  var attr = pubsub(access);
  var value = arguments[0];

  return attr;

  function access (newValue) {
    if (arguments.length && newValue != value) {
      value = newValue;
      attr.publish();
    }

    return value;
  }
}
