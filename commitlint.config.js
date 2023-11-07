module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 60], // header max length 60 characters
    "scope-empty": [2, "never"], // always with scope
    "subject-empty": [2, "never"], //always with subject
    "subject-case": [2, "always", "lower-case"], // lower-case subject
    "body-leading-blank": [2, "always"], // blank line between header and body
    "body-max-line-length": [2, "always", 72], // body lines max length 72 characters
    "footer-leading-blank": [2, "always"], // blank line between body and footer
    "footer-max-line-length": [2, "always", 72], // footer lines max length 72 characters
    "type-enum": [
      1,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "style", // Don't affect logic of code (styles, copies, formatting, etc)
        "refac", // Refactoring code
        "test", // New test
        "chore", // Update build tasks, package manage configs, etc
      ],
    ],
    "scope-enum": [2, "always", ["settings", "styles", "plugins"]],
  },
};
