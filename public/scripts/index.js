var ProductBox = React.createClass({
  getProducts: function() {
    this.setState({data: []})
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
        <Product name={product.name}>{product.description}</Product>
      );
    });
    return (
      <div className="productBox">
        {productNodes}
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
ReactDOM.render(
  <ProductBox />,
  document.getElementById('content')
);
