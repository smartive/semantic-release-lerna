const { EOL } = require('os');
const execa = require('execa');

module.exports = async (_, { cwd, env, nextRelease: { version }, logger }) => {
  logger.log(`Execute 'lerna publish ${version}'.`);

  const { stdout } = await execa(
    'npx',
    ['lerna', 'publish', version, '--yes', '--no-git-tag-version', '--no-push', '--no-changelog'],
    {
      cwd,
      env,
    }
  );

  const packages = stdout
    .split(EOL)
    .map(str => str.match(`[-] ((.*)@${version})`))
    .filter(Boolean)
    .map(arr => arr[1]);

  logger.info(`Published ${packages.length} packages.`);
  for (const pkg of packages) {
    logger.log(`Published: ${pkg}`);
  }

  return {
    packages,
    name: 'Lerna release',
  };
};
