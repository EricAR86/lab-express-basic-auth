const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String,
    required: true
  }
},
{timestamps: true}

);

const User = model("User", userSchema);

module.exports = User;
