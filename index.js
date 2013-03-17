var pubsub = require("ada-pubsub"),
    prop   = require("ada-prop");

module.exports          = ada;
module.exports.all      = props;
module.exports.object   = props;
module.exports.prop     = prop;
module.exports.property = prop;
module.exports.pubsub   = pubsub;

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
