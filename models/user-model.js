const {mongoose} = require('../database/mongoose-config.js');

    let users = mongoose.model("users",{
        email : {
            type: String,
            trim: true,
            required:true,
            minLength: 1,
        }
    });

module.exports= {
    users
}