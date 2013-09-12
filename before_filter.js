before_filter = function (before, func) {
    return (function () {
        var cached_func = func;
        return function () {
            before.apply(this, arguments);
            return cached_func.apply(this.arguments);
        }
    })();
}

