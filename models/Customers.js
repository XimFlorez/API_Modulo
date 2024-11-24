    const { model, Schema } = require('mongoose');

const CustomersSchema = new Schema(
    {
        
        ID_Customer: {
            type: Number,
            required: [true, 'The ID is required'],
            unique: true,
        },

        Name: {
            type: String,
            required: [true, 'The name is required'],
            maxlength: [25, 'Maximum 25 characters'],
        },

        Lastname: {
            type: String,
            required: [true, 'The lastname is required'],
            maxlength: [30, 'Maximum 30 characters'],

        },

        Document: {
            type: Number,
            required: [true, 'The document is required']
        },

        Email: {
            type: String,
            required: [true, 'The Email is required']
        },

        Telephone:{
            type: Number
        }
    }
);

module.exports = model('Customers', CustomersSchema);

