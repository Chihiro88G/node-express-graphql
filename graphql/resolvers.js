const User = require("../models.user");

module.exports = {
  hello() {
    return {
      text: 'Hello World!',
      views: 1000
    }
  },

  createUser: async function({ userInput }, req) {
    // const email = args.userInput.email;

    const existingUser = await User.findOne({ email: userInput.email })
    if (existingUser) {
      const err = new Error("User exists already");
      throw err;
    }

    const hashedPw = 'something here';
    const user = new User({
      email: userInput.email,
      name: userInput.name,
      pw: hashedPw,
    })

    const createdUser = await user.save();

    return {
      ...createdUser._doc, _id: createdUser._id.toString()
    }
  }
}