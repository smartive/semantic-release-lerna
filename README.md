# semantic release lerna

This is a plugin for `semantic-release` to publish packages with
`lerna`.

Easiest config is:

`.releaserc.json`

```json
{
  "extends": "@smartive/semantic-release-lerna/config"
}
```

This overwrites the default of semantic release with the following config:

```json
{
  "generateNotes": ["@semantic-release/release-notes-generator", "semantic-release-lerna"],
  "prepare": false,
  "publish": ["@semantic-release/github", "semantic-release-lerna"]
}
```

Feel free to customize any settings :-)
