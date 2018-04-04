function justInvoke(fn) {
    return fn()
}

function setThisWithCall(fn, name, number) {
  return fn.call(name, number)
}

function setThisWithApply(fn, name, number) {
  return fn.apply(name, number)
}

function returnNewFunctionOf(fn, thisValue) {
  let newfn = fn.bind(thisValue);
  return newfn
}
