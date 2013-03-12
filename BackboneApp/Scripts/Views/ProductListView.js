(function() {

    app.Views.ProductListView = Backbone.View.extend({

        template: _.template($("#productListViewTemplate").html()),

        className: "product-list-view",
        
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        
        events: {
            "click #backToCategories": "backToCategories"
        },

        backToCategories: function() {
            app.router.navigate("/", { trigger: true });
        }
    });

}());