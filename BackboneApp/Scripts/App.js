(function() {

    // underscore template settings to prevent conflict with ASP tags <% %>
    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g,      // print value: {{ value_name }}
        evaluate: /\{%([\s\S]+?)%\}/g,      // execute code: {% code_to_execute %}
        escape: /\{%-([\s\S]+?)%\}/g        // excape HTML: {%- <script> %} prints &lt;script&gt;s
    };

    var ODATA_CONTENTTYPE = "application/json; odata=verbose";

    // prepare request according to ODATA
    $.ajaxPrefilter(function(options, originalOptions, xhr) {
        // set required HTTP headers
        options.contentType = ODATA_CONTENTTYPE;
        options.headers = $.extend(options.headers || {}, {
            Accept: ODATA_CONTENTTYPE
        });

        // add default error handler
        var originalError = originalOptions.error;
        options.error = function(xhr, textStatus, errorThrown) {
            alert("Error during processing the request!");
            if(originalError) {
                originalError.apply(this, arguments);
            }
        };
        
        // patch success handler to provide data from ODATA json response
        var originalSuccess = options.success;
        if(originalSuccess && originalOptions.type === "GET") {
            options.success = function(data) {
                originalSuccess(data["d"]);
            };
        }
    });


    // root namespace for application
    window.app = {
        Models: {},

        Views: {},

        renderView: function(view, title) {
            $("#content").html(view.render().el);
            $("#title").text(title);
        }
    };

    // app router
    app.ApplicationRouter = Backbone.Router.extend({

        routes: {
            "": "categoryList",
            "category/:id": "productList",
            "product/:id": "productDetails"
        },

        categoryList: function() {
            var categoryList = new app.Models.CategoryList(),
                categoryListView = new app.Views.CategoryListView({ model: categoryList });

            categoryList.load(function() {
                app.renderView(categoryListView, "Categories List");
            });
        },

        productList: function(id) {
            var productList = new app.Models.ProductList(),
                productListView = new app.Views.ProductListView({ model: productList });

            productList.loadByCategory(id, function() {
                app.renderView(productListView, "Products List");
            });
        },

        productDetails: function(id) {
            var product = new app.Models.Product({ ProductID: id }),
                productDetailsView = new app.Views.ProductDetailsView({ model: product });

            product.load(function() {
                app.renderView(productDetailsView, "Product \"" + product.get("ProductName") + "\"");
            });
        }

    });


    // start app
    $(function() {
        app.router = new app.ApplicationRouter();

        Backbone.history.start();
    });

}());