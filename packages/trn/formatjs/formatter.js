const format = (msgs) =>
  Object.keys(msgs).map((msgKey) => ({
    id: msgKey,
    ...msgs[msgKey],
  }));

module.exports = { format };
