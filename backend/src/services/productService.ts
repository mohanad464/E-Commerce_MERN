import productModel from "../models/productModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  try {
    const products = [
      {
        title: "Dell Latitude G15",
        image:
          "https://m.media-amazon.com/images/I/41U-d4vMUqL.__AC_SY300_SX300_QL70_ML2_.jpg",
        price: 54000,
        stock: 10,
      },
      {
        title: "Asus Laptop",
        image:
          "https://dlcdnwebimgs.asus.com/gain/8b25250f-bf55-425f-93bd-b5d8e2744b3e/",
        price: 43000,
        stock: 20,
      },
      {
        title: "Hp Laptop",
        image:
          "https://m.media-amazon.com/images/I/41SJic55+TL.jpg",
        price: 28000,
        stock: 8,
      },
    ];

    const existingProducts = await getAllProducts();

    if (existingProducts.length === 0) {
      await productModel.insertMany(products);
    }
  } catch (err) {
    console.error("cannot seed database", err);
  }
};
