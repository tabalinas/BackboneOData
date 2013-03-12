<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="BackboneApp.Default" %>

<!DOCTYPE html>

<html>
<head runat="server">
    <title>Backbone.js with OData Demo Application</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="Styles/bootstrap.css" rel="stylesheet" />
    <link href="Styles/style.css" rel="stylesheet" />
</head>
<body>
    <!-- app page -->
    <form id="form1" runat="server">
        <header class="container">
            <h3 id="title"></h3>
        </header>
        <div id="content" class="container">
        </div>
    </form>
    

    <!-- templates -->
    <script id="categoryListViewTemplate" type="text/template">
        <div class="well">
            <ul class="list">
            {% _.each(this.model.models, function(category) { %}
                <li>
                    <h4><a href="#category/{{ category.get("CategoryID") }}">{{ category.get("CategoryName") }}</a></h4>
                    <p>{{ category.get("Description") }}</p>
                </li>
            {% }); %}
            </ul>
        </div>
    </script>

    <script id="productListViewTemplate" type="text/template">
        <p><input id="backToCategories" type="button" value="&lt; Back to Categories" class="btn" /></p>
        <div class="well">
            <ul class="list">
            {% _.each(this.model.models, function(product) { %}
                <li>
                    <h4><a href="#product/{{ product.get("ProductID") }}">{{ product.get("ProductName") }}</a></h4>
                    <p>Price: ${{ product.get("UnitPrice").toFixed(2) }}</p>
                </li>
            {% }); %}
            </ul>
        </div>
    </script>
    
    <script id="productDetailsViewTemplate" type="text/template">
        <p><input id="backToProducts" type="button" value="&lt; Back to Products" class="btn" /></p>
        <div class="well">
            <fieldset>
                <label>Product ID:</label>
                <input type="text" id="ProductID" disabled value="{{ ProductID }}">

                <label>Product Name:</label>
                <input type="text" id="ProductName" value="{{ ProductName }}">

                <label>Unit Price:</label>
                <input type="text" id="UnitPrice" value="{{ UnitPrice }}">
            </fieldset>
            <div id="message"></div>
            <input id="saveProduct" type="button" value="Save" class="btn-primary btn" />
        </div>
    </script>


    <!-- scripts -->
    <script src="Scripts/jquery-1.7.1.js"></script>
    <script src="Scripts/underscore.js"></script>
    <script src="Scripts/backbone.js"></script>
    
    <script src="Scripts/App.js"></script>

    <script src="Scripts/Models/Product.js"></script>
    <script src="Scripts/Models/Category.js"></script>
    <script src="Scripts/Models/ProductList.js"></script>
    <script src="Scripts/Models/CategoryList.js"></script>
    
    <script src="Scripts/Views/CategoryListView.js"></script>
    <script src="Scripts/Views/ProductListView.js"></script>
    <script src="Scripts/Views/ProductDetailsView.js"></script>
</body>
</html>
