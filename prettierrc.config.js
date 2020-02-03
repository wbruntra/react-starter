module.exports = {
  useTabs: false, // Indent lines with tabs instead of spaces.
  printWidth: 99, // Specify the length of line that the printer will wrap on.
  tabWidth: 2, // Specify the number of spaces per indentation-level.
  singleQuote: true, // Use single quotes instead of double quotes.
  trailingComma: 'all',
  /**
   * Do not print spaces between brackets.
   * If true, puts the > of a multi-line jsx element at the end of the last line instead of being
   * alone on the next line
   */
  jsxBracketSameLine: false,
  parser: 'babylon',
  semi: false,
  rcVerbose: true,
}
