const express = require("express");
const Router = express.Router();

const {RenderHomePage,RenderProductsPage,RenderAboutPage,RenderContactPage,RenderCartPage, RenderAdminPage, RenderAdminSignInPage, RenderSingleProductPage} = require("../controllers/home");

Router.route("/").get(RenderHomePage);
Router.route("/products").get(RenderProductsPage);
Router.route("/about").get(RenderAboutPage);
Router.route("/contact").get(RenderContactPage);
Router.route("/cart").get(RenderCartPage);
Router.route("/admin").get(RenderAdminPage);
Router.route("/admin/signin").get(RenderAdminSignInPage);


Router.route("/singleProduct/:productName").get(RenderSingleProductPage);

module.exports = Router;