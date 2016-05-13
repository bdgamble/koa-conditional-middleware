module.exports = function (condition, success, fail) {
  return function* (next) {
    if (condition === true ||
      (typeof condition === 'function' && condition().call(this, next))
    ) {
      yield success().call(this, next);
      return;
    }

    if (fail) {
      yield fail().call(this, next);
    }

    yield* next;
  };
};
