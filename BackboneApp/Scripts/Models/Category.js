(function() {

    app.Models.Category = Backbone.Model.extend({

        url: function() {
            return "Service/Northwind.svc/Categories(" + this.get("CategoryID") + ")";
        },

        idAttribute: "CategoryID",

        defaults: {
            CategoryID: 0,
            CategoryName: "",
            Description: ""
        }

    });

}());