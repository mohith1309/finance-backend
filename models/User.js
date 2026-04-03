let users = [];

module.exports = {
  create: (data) => {
    const newUser = { id: Date.now().toString(), ...data, role: "ADMIN" };
    users.push(newUser);
    return newUser;
  },

  findOne: ({ email }) => users.find(u => u.email === email)
};