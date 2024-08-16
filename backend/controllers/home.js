const path = require('path');

const RenderHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
};

const RenderProductsPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/shop.html"));
};

const RenderAboutPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/about.html"));
};

const RenderContactPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/contact.html"));
};

const RenderCartPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/cart.html"));
};

const RenderAdminPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/admin.html"));
};
const RenderAdminSignInPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/admin-signin.html"));
};

const RenderSingleProductPage = (req, res)=>{
  const productName = req.params.productName;
  res.sendFile(path.join(__dirname, "../../public/singleProduct.html"));
}

module.exports = {
  RenderHomePage,
  RenderProductsPage,
  RenderAboutPage,
  RenderContactPage,
  RenderCartPage,
  RenderAdminPage,
  RenderAdminSignInPage,
  RenderSingleProductPage
};
