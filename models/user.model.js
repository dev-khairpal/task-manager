import { model, Schema } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    trim: true,
    maxLength: [100, "firstName cannot be more than 100 chars"],
  },
  lastName: {
    type: String,
    trim: true,
    maxLength: [100, "lastName cannot be more than 100 chars"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
    lowerCase: true,
    validate: {
      validator: function (email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
      },
      message: () => `Please enter a valid email`,
    },
  },
  password: {
    type: String,
    require: [true, "Password is required"],
    minLength: 8,
    validate: {
      validator: function (password) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          password
        );
      },
      message: () =>
        `Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&).`,
    },
  },
});


const User = new model('User', userSchema);

export default User;