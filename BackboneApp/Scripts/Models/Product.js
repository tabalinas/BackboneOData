(function() {

    app.Models.Product = Backbone.Model.extend({

        url: function() {
            return "Service/Northwind.svc/Products(" + this.get("ProductID") + ")";
        },

        idAttribute: "ProductID",

        initialize: function(attributes) {
            this.set({ UnitPrice: parseFloat(attributes.UnitPrice) });
        },

        defaults: {
            ProductID: 0,
            ProductName: "",
            UnitPrice: 0.0
        },
        
        load: function(callback) {
            this.fetch({
                success: callback
            });
        }

    });

}());