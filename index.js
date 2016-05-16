module.exports = function (condition, success, fail) {
  return function* (next) {
    const ctx = this;
    if (condition === true ||
      (typeof condition === 'function' && condition.call(ctx))
    ) {
      yield success.call(ctx, next);
      return;
    }

    if (fail) {
      yield fail.call(ctx, next);
    }

    yield* next;
  };
};
