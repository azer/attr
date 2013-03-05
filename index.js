var pubsub = require("pubsub"),
    prop   = require("prop");

module.exports       = ada;
module.exports.all   = props;
module.exports.object = props;

function ada(){
  var obj = pubsub(prop.apply(null, arguments).extend(function(raw){

    return function(newValue){
      var oldValue = raw(),
          ret      = raw.apply(undefined, arguments);

      if(arguments.length && oldValue != ret ){
        obj.publish(ret, oldValue);
      }

      return ret;
    };

  }));

  return obj;
}

function props(raw, exceptions){
  var obj = {}, key, val;

  for(key in raw){
    val = raw[key];
    obj[key] = ( ! Array.isArray(exceptions) || exceptions.indexOf(key) == -1 )
      && ( typeof val != 'object' || !val || val.constructor != Object )
      && ( typeof val != 'function' )
      ? ada(val)
      : val;
  }

  return obj;
}
