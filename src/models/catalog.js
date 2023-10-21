import mongoose from 'mongoose';

const catalogSchema = new mongoose.Schema({
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
}, { timestamps: true });

const Catalog = mongoose.model('Catalog', catalogSchema);

export default Catalog;