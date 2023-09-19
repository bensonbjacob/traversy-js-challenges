function calculateTotalSalesWithTax(products, taxRate) {
  const totalSales = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  return totalSales * (1 + taxRate / 100);
}

module.exports = calculateTotalSalesWithTax;
