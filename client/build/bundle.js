/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var ProductBox = React.createClass({
	  displayName: "ProductBox",

	  getProducts: function getProducts() {
	    $.ajax({
	      url: "/api/products",
	      dataType: "json",
	      success: function (data) {
	        this.setState({ data: data });
	      }.bind(this),
	      error: function (xhr, status, err) {}.bind(this)
	    });
	  },
	  componentDidMount: function componentDidMount() {
	    this.getProducts();
	  },
	  getInitialState: function getInitialState() {

	    return { data: { products: [] } };
	  },
	  render: function render() {
	    var product_box = this;
	    var productNodes = this.state.data.products.map(function (product) {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          Product,
	          { name: product.name, onNewProduct: product_box.getProducts },
	          product.description
	        )
	      );
	    });
	    return React.createElement(
	      "div",
	      { className: "productBox" },
	      productNodes,
	      React.createElement(NewProductForm, { onNewProduct: this.getProducts })
	    );
	  }
	});

	var Product = React.createClass({
	  displayName: "Product",

	  destroyDog: function destroyDog() {
	    $.ajax({
	      type: "DELETE",
	      data: { name: this.props.name },
	      url: "/api/products"
	    });
	    this.props.onNewProduct();
	  },
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "comment" },
	      React.createElement(
	        "h2",
	        { className: "productName" },
	        this.props.name
	      ),
	      this.props.children,
	      React.createElement(
	        "button",
	        { onClick: this.destroyDog },
	        "Delete "
	      )
	    );
	  }
	});

	var NewProductForm = React.createClass({
	  displayName: "NewProductForm",
	  handleSubmit: function handleSubmit(e) {
	    $.ajax({
	      type: "POST",
	      data: { name: this.state.name, description: this.state.description },
	      url: "/api/products"
	    });
	    e.preventDefault();
	    this.setState({ name: "", description: "" });
	    this.props.onNewProduct();
	  },
	  getInitialState: function getInitialState() {
	    return { name: "", description: "" };
	  },
	  handleNameChange: function handleNameChange(e) {
	    this.setState({ name: e.target.value });
	  },
	  handleDescriptionChange: function handleDescriptionChange(e) {
	    this.setState({ description: e.target.value });
	  },

	  render: function render() {
	    return React.createElement(
	      "form",
	      { className: "commentForm", onSubmit: this.handleSubmit },
	      React.createElement("input", { type: "text", placeholder: "Product Name", onChange: this.handleNameChange, value: this.state.name }),
	      React.createElement("input", { type: "text", placeholder: "Product Description", onChange: this.handleDescriptionChange, value: this.state.description }),
	      React.createElement("input", { type: "submit", value: "Post" })
	    );
	  }
	});

	ReactDOM.render(React.createElement(ProductBox, null), document.getElementById('content'));

/***/ }
/******/ ]);