import productModel from "../models/productModel";

export const getAllProducts = async () => {
    return await productModel.find();
};

export const seedInitialProducts = async () => {
    const products = [
        { title: "Dell Latitude G15", image: "https://m.media-amazon.com/images/I/41U-d4vMUqL.__AC_SY300_SX300_QL70_ML2_.jpg", price: 54000, stock: 10},
    ];

    const existingProducts = await getAllProducts();

    if(existingProducts.length === 0) {
        await productModel.insertMany(products)
    }
};