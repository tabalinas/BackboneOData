(function() {

    app.Models.ProductList = Backbone.Collection.extend({

        url: "Service/Northwind.svc/Products",

        model: app.Models.Product,
        
        loadByCategory: function(categoryId, callback) {
            this.fetch({
                data: { "$filter" : "CategoryID eq " + categoryId },
                success: callback
            });
        }

    });

}());