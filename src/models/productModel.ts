import mongoose, { Schema, Document } from "mongoose"

export interface IProduct extends Document {
    title: String;
    image: String;
    price: String;
    stock: String;
}

const productSchema = new Schema<IProduct>({
    title: {type: String, required: true },
    image: {type: String, required: true },
    price: {type: String, required: true },
    stock: {type: String, required: true, default: 0 },
});

const productModel = mongoose.model<IProduct>('product', productSchema);

export default productModel;