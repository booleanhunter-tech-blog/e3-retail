(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['filters.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "        <li>\n            <input\n                type=\"checkbox\"\n                name=\"brands\"\n                id=\"brand_"
    + alias3(alias2((depth0 != null ? depth0.id : depth0), depth0))
    + "\"\n                value=\""
    + alias3(alias2((depth0 != null ? depth0.value : depth0), depth0))
    + "\"\n                "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            >\n            <label for=\"brand_"
    + alias3(alias2((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\n                "
    + alias3(alias2((depth0 != null ? depth0.name : depth0), depth0))
    + "\n            </label>\n\n        </li>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "checked";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "            <label for=\"delivery_"
    + alias3(alias2((depth0 != null ? depth0.id : depth0), depth0))
    + "\">"
    + alias3(alias2((depth0 != null ? depth0.name : depth0), depth0))
    + "</label>\n            <input\n                type=\"checkbox\"\n                name=\"delivery\"\n                id=\"delivery_"
    + alias3(alias2((depth0 != null ? depth0.id : depth0), depth0))
    + "\"\n                value=\""
    + alias3(alias2((depth0 != null ? depth0.value : depth0), depth0))
    + "\"\n                "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " >\n";
},"6":function(container,depth0,helpers,partials,data) {
    return " value="
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.gte : depth0), depth0))
    + " ";
},"8":function(container,depth0,helpers,partials,data) {
    return " value="
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.lte : depth0), depth0))
    + " ";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "        <li>\n            <input\n                type=\"checkbox\"\n                name=\"categories\"\n                id=\"category_"
    + alias3(alias2((depth0 != null ? depth0.id : depth0), depth0))
    + "\"\n                value=\""
    + alias3(alias2((depth0 != null ? depth0.value : depth0), depth0))
    + "\"\n                "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n            <label for=\"category_"
    + alias3(alias2((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\n                "
    + alias3(alias2((depth0 != null ? depth0.name : depth0), depth0))
    + "\n            </label>\n\n        </li>\n\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "            <li>\n                <input\n                    type=\"radio\"\n                    name=\"ratings\"\n                    id=\"ratings_"
    + alias3(alias2((depth0 != null ? depth0.id : depth0), depth0))
    + "\"\n                    value=\""
    + alias3(alias2((depth0 != null ? depth0.value : depth0), depth0))
    + "\"\n                    "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                <label\n                    for=\"ratings_"
    + alias3(alias2((depth0 != null ? depth0.id : depth0), depth0))
    + "\"\n                    aria-label=\""
    + alias3(alias2((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\n                    class=\"ratings\"\n                    style=\"--rating: "
    + alias3(alias2((depth0 != null ? depth0.value : depth0), depth0))
    + ";\">\n                    & up\n                </label>\n\n            </li>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "            <option value=\""
    + alias3(alias2((depth0 != null ? depth0.value : depth0), depth0))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                "
    + alias3(alias2((depth0 != null ? depth0.name : depth0), depth0))
    + "\n            </option>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "selected";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "<fieldset name=\"brands\">\n    <legend>\n        <h3>\n            Brands\n        </h3>\n    </legend>\n\n    <ol class=\"filter-group\">\n"
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.brands : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ol>\n</fieldset>\n\n<fieldset name=\"delivery\">\n    <legend>\n        <h3>\n            Delivery\n        </h3>\n    </legend>\n    <div class=\"filter-group\">\n"
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.delivery : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</fieldset>\n\n<fieldset name=\"pricing\">\n    <legend>\n        <h3>\n            Pricing\n        </h3>\n    </legend>\n\n    <div class=\"filter-group\">\n        <div>\n            <label for=\"price_min\">Min</label>\n            <input\n                type=\"number\"\n                name=\"price_min\"\n                id=\"price_min\"\n                placeholder=\"Minimum\"\n                "
    + ((stack1 = helpers["with"].call(alias2,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.price : stack1),{"name":"with","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                >\n        </div>\n        <div>\n            <label for=\"price_max\">Max</label>\n            <input\n                type=\"number\"\n                name=\"price_max\"\n                id=\"price_max\"\n                placeholder=\"Maximum\"\n                "
    + ((stack1 = helpers["with"].call(alias2,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.price : stack1),{"name":"with","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            >\n        </div>\n    </div>\n</fieldset>\n\n<fieldset name=\"categories\">\n    <legend>\n        <h3>\n            Categories\n        </h3>\n    </legend>\n\n    <ol class=\"filter-group\">\n"
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.categories : stack1),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ol>\n</fieldset>\n\n<fieldset name=\"ratings\">\n    <legend>\n        <h3>\n            Ratings\n        </h3>\n    </legend>\n\n    <ol class=\"filter-group\">\n"
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.ratings : stack1),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ol>\n</fieldset>\n\n<fieldset name=\"sort\">\n    <legend>\n        <h3>\n            Sort by\n        </h3>\n    </legend>\n\n    <select name=\"sort\" id=\"sort-order\" aria-label=\"Sort by\">\n"
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.sort : stack1),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</fieldset>\n\n<button type=\"submit\" name=\"action\" value=\"filter\">Search</button>";
},"useData":true});
templates['footer.html'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<footer class=\"body-footer\">\n"
    + ((stack1 = container.invokePartial(partials.noscript,depth0,{"name":"noscript","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <p class=\"copyright-text\">\n        © 2022 Egen, All rights reserved\n        •\n        <a\n            href=\"https://github.com/booleanhunter-tech-blog/e3-retail/issues\"\n            target=\"_blank\"\n            rel=\"noopener\">\n            Report a bug\n        </a>\n    </p>\n\n</footer>";
},"usePartial":true,"useData":true});
templates['header.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.searchText : stack1), depth0));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "<header class=\"body-header\">\n    <nav>\n        <section class=\"nav-item\">\n            <h1>\n                <a href=\"/\">\n                    E³Retail\n                </a>\n            </h1>\n        </section>\n        <section class=\"nav-item\">\n            <div class=\"form-items\">\n                <label for=\"input-search\">\n                    Search\n                </label>\n                <input\n                    id=\"search-text\"\n                    type=\"search\"\n                    placeholder=\"search anything\"\n                    form=\"filters\"\n                    name=\"search_text\"\n                    list=\"search-text-suggestions\"\n                    value=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.searchText : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n                >\n                <button type=\"submit\" form=\"filters\" name=\"action\" value=\"search\" aria-label=\"Search\">\n                    <i class=\"fa fa-search\"></i>\n                </button>\n\n                <datalist id=\"search-text-suggestions\">\n\n                </datalist>\n            </div>\n        </section>\n        <ul class=\"nav-item\">\n            <li>\n                <a href=\"https://github.com/booleanhunter-tech-blog/e3-retail\" target=\"_blank\">\n                    <i class=\"fab fa-github\"></i>\n                    <span>\n                        Github\n                    </span>\n                </a>\n            </li>\n\n            <li>\n                <a href=\"https://egen.solutions/articles/how-to-use-elasticsearch-to-create-an-exceptional-user-experience-in-retail/\" target=\"_blank\">\n                    <i class=\"fas fa-info-circle\"></i>\n                    <span>\n                        About\n                    </span>\n                </a>\n            </li>\n        </ul>\n    </nav>\n</header>\n";
},"useData":true});
templates['noscript.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<noscript>\n    <h2>\n        For a faster search experience, consider enabling JavaScript\n    </h2>\n</noscript>";
},"useData":true});
templates['pagination.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "        <h2>\n            Page "
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.paginationInfo : depth0)) != null ? stack1.currentPage : stack1), depth0))
    + " / "
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.paginationInfo : depth0)) != null ? stack1.totalPages : stack1), depth0))
    + " \n        </h2>\n        <nav>\n            <section class=\"pagination\">\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.paginationInfo : depth0)) != null ? stack1.pagination : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            </section>\n        </nav>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression, alias4=depth0 != null ? depth0 : (container.nullContext || {});

  return "                    <button\n                        type=\"submit\"\n                        form=\"filters\"\n                        name=\"page\"\n                        value=\""
    + alias3(alias2((depth0 != null ? depth0.value : depth0), depth0))
    + "\"\n                        aria-label=\"Page number\"\n                        "
    + ((stack1 = helpers["if"].call(alias4,(depth0 != null ? depth0.disabled : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias4,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        class= \""
    + alias3(alias2((depth0 != null ? depth0["class"] : depth0), depth0))
    + "\"\n                    >\n                        "
    + alias3(alias2((depth0 != null ? depth0.name : depth0), depth0))
    + "\n                    </button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"5":function(container,depth0,helpers,partials,data) {
    return "                            class=\"active\"\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "        <h2>\n            No results\n        </h2>\n\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "\n<footer class=\"product-list-footer\" aria-label=\"Pagination\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.paginationInfo : depth0)) != null ? stack1.totalPages : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "</footer>";
},"useData":true});
templates['product_categories.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "        <a role=\"listitem\" href=\""
    + alias3(alias2((depth0 != null ? depth0.url : depth0), depth0))
    + "\">\n            <img src=\""
    + alias3(alias2((depth0 != null ? depth0.imageUrl : depth0), depth0))
    + "\">\n            <h3>\n                "
    + alias3(alias2((depth0 != null ? depth0.name : depth0), depth0))
    + "\n            </h3>\n            <p>\n                "
    + alias3(alias2((depth0 != null ? depth0.productCount : depth0), depth0))
    + " products\n            </p>\n        </a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "<ol class=\"product-categories\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.productCategories : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ol>\n";
},"useData":true});
templates['product_list.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "    <li role=\"article\">\n        <section class=\"product-img\">\n            <img\n                src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1["0"] : stack1), depth0))
    + "\"\n                alt=\"Product image\"\n                loading=\"lazy\"\n                onerror=\"this.src='/images/product_types/generic_product.jpg'\"\n            >\n        </section>\n        <section>\n            <h3>\n                <a href=\""
    + alias3(alias2((depth0 != null ? depth0.url : depth0), depth0))
    + "\" target=\"_blank\">\n                    "
    + alias3(alias2((depth0 != null ? depth0.name : depth0), depth0))
    + "\n                </a>\n            </h3>\n            <footer>\n                <p>\n                    <data\n                        itemprop=\"ratings\"\n                        class=\"ratings\"\n                        style=\"--rating: "
    + alias3(alias2((depth0 != null ? depth0.rating : depth0), depth0))
    + ";\"\n                        value=\""
    + alias3(alias2((depth0 != null ? depth0.rating : depth0), depth0))
    + "\">\n                    </data>\n                </p>\n                <p>\n                    <data\n                        itemprop=\"selling-price\"\n                        class=\"selling-price\"\n                        value=\""
    + alias3(alias2((depth0 != null ? depth0.discountedPrice : depth0), depth0))
    + "\">\n                        "
    + alias3(alias2((depth0 != null ? depth0.discountedPrice : depth0), depth0))
    + "\n                    </data>\n\n                    <data\n                        itemprop=\"retail-price\"\n                        class=\"retail-price\"\n                        value=\""
    + alias3(alias2((depth0 != null ? depth0.retailPrice : depth0), depth0))
    + "\">\n                        "
    + alias3(alias2((depth0 != null ? depth0.retailPrice : depth0), depth0))
    + "\n                    </data>\n                </p>\n            </footer>\n        </section>\n    </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "\n<ol class=\"product-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.products : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ol>";
},"useData":true});
})();