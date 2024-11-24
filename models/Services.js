const { model, Schema } = require('mongoose');

const servicesSchema = new Schema(
    {
        ID_Service: {
            type: Number,
            required: [true, 'The ID Service is required'],
            unique: true

        },

        Name: {
            type: String,
            required: [true, 'The Name is required'],
            maxlength: [30, 'Maximum 30 characters']
        },

        Price: {
            type: Number,
            required: [true, 'The price is required']
        },

        Category: {
            type: String,
            required: [true, 'The Category is required'],
            maxlength: [20, 'Maximum 20 characters']
        }
    }
);

module.exports = model('Services', servicesSchema, 'Services');

