// импорт объекта sequilze, созданного в файле db.js
const sequelize = require('../db.js');
// импорпт класса для описания полей схемы
const {DataTypes} = require('sequelize');

// таблица пользователя
const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
});
// таблица корзины, содеражащая товары конкретного заказа конекретного пользователя.
const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    user_id: {type: DataTypes.INTEGER}
});
// таблица изделия, который помещён в корзину
const BasketProduct = sequelize.define('basket_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});
//таблица изделия
const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}
});
//таблица типов изделий
const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true}
});
// таблица информации об изделии
const ProductInfo = sequelize.define('product_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    descriprion: {type: DataTypes.STRING, allowNull: false}
});

// связь один к одному (пользователь - корзина)
User.hasOne(Basket);
Basket.belongsTo(User);

// связь один ко многим (корзина, изделие в корзине)
Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

// cвязь продукта и продукта, добавленного в корзину
Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

// связь один ко многим (тип изделия и изделие)
Type.hasMany(Product);
Product.belongsTo(Type);

// связь один ко многим (изделие и описания изделия)
Product.hasMany(ProductInfo);
ProductInfo.belongsTo(Product);

module.exports = {
    User,
    Basket,
    BasketProduct,
    Product,
    Type,
    ProductInfo
}

