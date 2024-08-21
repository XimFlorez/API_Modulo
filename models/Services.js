const {model, Schema} = require('mongoose')

const servicesSchema = new Schema(
    {
        Name: {
            type: String,
            unique: true,
            required:[true, 'The Name is required'],
            maxlength:[6, 'Maximun 20 characters'],
            minlength:[5, 'Minimun 5 characters']
        },

        Price:{
            type:Number,
            required:[true, 'The price is required'],
            minlength:[3, 'Minimun 6 characters']
        },

        Category:{
            type: String,
            unique: true,
            required:[true, 'The Category is required'],
            maxlength:[6, 'Maximun 20 characters'],
            minlength:[5, 'Minimun 5 characters']
        },

    }
)

module.exports = model('Services', servicesSchema, 'Services')