function registerHelpers(hbs) {
    hbs.registerHelper('loop', function(n, block) {
        var acc = '';
        for(var i = 0; i < n; ++i)
            acc += block.fn(i);
        return acc;
    });
    
    hbs.registerHelper('ifEquals', function(arg1, arg2, options) {
        return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
    });
    
    hbs.registerHelper('ifLessThan', function(arg1, arg2, options) {
        return (arg1 < arg2) ? options.fn(this) : options.inverse(this);
    });

    hbs.registerHelper('imageProxy', function(arg1, options) {
        return `/products${new URL(arg1).pathname}`;
    });
}

module.exports = {
    registerHelpers,
}