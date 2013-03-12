(function() {

    app.Views.CategoryListView = Backbone.View.extend({

        template: _.template($("#categoryListViewTemplate").html()),

        className: "category-list-view",

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

}());