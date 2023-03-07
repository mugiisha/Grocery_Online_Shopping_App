// database related modules
module.exports = {
    databaseConnection: require('./connection'),
    ProductRepository: require('./repository/product-repository'),
    ShoppingRepository: require('./repository/shopping-repository')
}