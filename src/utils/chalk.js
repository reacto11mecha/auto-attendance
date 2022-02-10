module.exports = async () => {
  const chalk = await import("chalk").then((chalk) => chalk.default);

  const infoFN = (txt) => console.log(`${chalk.blue("[INFO]")} ${txt}`);

  return { infoFN };
};
