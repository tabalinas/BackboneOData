(function() {

    app.Views.ProductDetailsView = Backbone.View.extend({

        template: _.template($("#productDetailsViewTemplate").html()),

        className: "product-details-view",
                
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        events: {
            "click #backToProducts": "backToProducts",
            "click #saveProduct": "saveProduct",
        },

        backToProducts: function() {
            window.history.back();
        },

        saveProduct: function() {
            var message = this.$el.find("#message").empty();

            this.model.save({
                ProductName: $('#ProductName').val(),
                UnitPrice: $('#UnitPrice').val(),
            }, {
                success: function() {
                    message.append($("<div />").addClass("alert alert-success").text("Product info successfully saved!"));
                },
                error: function() {
                    message.append($("<div />").addClass("alert alert-error").text("Error occurred while saving product info!"));
                }
            });
        }

    });

}());