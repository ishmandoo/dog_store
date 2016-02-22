var ProductBox = React.createClass({
  getProducts: function() {
    $.ajax({
      url: "/api/products",
      dataType: "json",
      success: function(data) {
        this.setState({data: data})
      }.bind(this),
      error: function(xhr, status, err) {
      }.bind(this)
    })
  },
  componentDidMount: function() {
    this.getProducts();
  },
  getInitialState: function() {

    return {data: {products: []}};
  },
  render: function() {
    var productNodes = this.state.data.products.map(function(product){
      return (
        <div>
          <Product name={product.name}>{product.description}</Product>
        </div>
      );
    });
    return (
      <div className="productBox">
        {productNodes}
        <NewProductForm onNewProduct={this.getProducts}></NewProductForm>
      </div>
    );
  }
});

var Product = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="productName">
          {this.props.name}
        </h2>
      {this.props.children}
      </div>
    );
  }
});

var NewProductForm = React.createClass({
  handleSubmit(e) {
    $.ajax({
      type: "POST",
      data: {name: this.state.name, description: this.state.description},
      url: "/api/products"
    });
    e.preventDefault();
    this.setState({name: "", description: ""});
    this.props.onNewProduct();
  },
  getInitialState() {
    return {name: "", description: ""}
  },
  handleNameChange(e) {
    this.setState({name: e.target.value})
  },
  handleDescriptionChange(e) {
    this.setState({description: e.target.value})
  },
  render: function() {
    return(
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Product Name" onChange={this.handleNameChange} value={this.state.name}/>
        <input type="text" placeholder="Product Description" onChange={this.handleDescriptionChange} value={this.state.description}/>
        <input type="submit" value="Post" />
      </form>
    );
  }
});

ReactDOM.render(
  <ProductBox />,
  document.getElementById('content')
);
