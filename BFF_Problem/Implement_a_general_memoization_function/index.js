/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver) {
  const map = {};

  // your code here
  return function() {
    let key;

    if (typeof resolver === 'function') {
      key = resolver.apply(this, arguments);
    } else {
      key = Array.from(arguments).join('_');
    }

    if (map[key]) {
      return map[key];
    }

    const result = func.apply(this, arguments)

    map[key] = result;

    return result;
  }
}