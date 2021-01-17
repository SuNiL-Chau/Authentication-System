var records = [
  {
    id: 1,
    username: Sunil,
    password: sunson,
    displayName: username,
    emails: [
      {
        value: "sun@example.com",
      },
    ],
  },
];

exports.findById = (id, cb) => {
  process.nextTick(() => {
    var idx = id - 1;
    records[idx]
      ? cb(null, records[idx])
      : cb(new Error(`User ${id} does not exist!`));
  });
};

exports.findByUsername = (username, cb) => {
  process.nextTick(() => {
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
};
