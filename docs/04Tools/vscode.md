# VScode

# 配置
```
{
  "eslint.autoFixOnSave": true,
  "eslint.packageManager": "yarn",
  "eslint.validate": [
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "editor.detectIndentation": false,
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.wordWrap": "on",
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "vetur.format.defaultFormatter.js": "none",
  "vetur.format.defaultFormatter.html": "none",
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "vetur.format.defaultFormatter.ts": "none",
  "eslint.workingDirectories": [
    {
      "directory": "./dashboard",
      "changeProcessCWD": true
    },
    {
      "directory": "./o",
      "changeProcessCWD": true
    },
    {
      "directory": "./partner",
      "changeProcessCWD": true
    },
    {
      "directory": "./www",
      "changeProcessCWD": true
    },
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.format.insertSpaceBeforeFunctionParenthesis": true
}

```
