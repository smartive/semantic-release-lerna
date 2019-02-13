const { EOL } = require('os');
const execa = require('execa');

module.exports = async (_, { cwd, env, logger }) => {
  logger.log(`Execute 'lerna changed'.`);
  const { stdout } = await execa('npx', ['lerna', 'changed'], { cwd, env });

  const changedPackages = stdout
    .split(EOL)
    .map(p => `* ${p}`)
    .join(EOL);

  return `### Affected Packages${EOL}${EOL}${changedPackages}${EOL}${EOL}`;
};
