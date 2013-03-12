(function() {

    app.Models.CategoryList = Backbone.Collection.extend({

        url: "Service/Northwind.svc/Categories",
        
        model: app.Models.Category,
        
        load: function(callback) {
            this.fetch({
                success: callback
            });
        }

    });

}());