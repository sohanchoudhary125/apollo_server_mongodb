const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
    validate: {
      validator: (val) => {
        return val.toString().length === 6;
      },
      message: (val) => `${val.value} has to be 6 digit`,
    },
  },
});

const Address = mongoose.model("address", AddressSchema);

module.exports = Address;
