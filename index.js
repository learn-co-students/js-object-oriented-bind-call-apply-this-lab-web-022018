function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, obj, arg){
  return fn.call(obj, arg);
}

function setThisWithApply(fn, obj, args){
  return fn.apply(obj, args);
}

function returnNewFunctionOf(fn, obj){
  return fn.bind(obj);
}
