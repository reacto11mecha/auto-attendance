module.exports = async () =>
  await import("chalk").then((chalk) => chalk.default);
