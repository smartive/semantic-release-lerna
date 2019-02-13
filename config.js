module.exports = {
  generateNotes: ['@semantic-release/release-notes-generator', 'semantic-release-lerna'],
  prepare: false,
  publish: ['@semantic-release/github', 'semantic-release-lerna'],
};
