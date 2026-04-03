let records = [];

module.exports = {
  create: (data) => {
    const newRecord = { id: Date.now().toString(), ...data };
    records.push(newRecord);
    return newRecord;
  },

  find: () => records,

  findByIdAndUpdate: (id, data) => {
    const index = records.findIndex(r => r.id === id);
    if (index !== -1) {
      records[index] = { ...records[index], ...data };
      return records[index];
    }
  },

  findByIdAndDelete: (id) => {
    records = records.filter(r => r.id !== id);
  }
};