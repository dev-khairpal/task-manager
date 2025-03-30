import User from "../../models/user.model.js";

async function createUserProvider(req, res) {
  const { firstName, lastName, email, password } = req.body;

  const user = new User({
    firstName,
    lastName,
    email,
    password,
  });

  return await user.save()
}


export default createUserProvider