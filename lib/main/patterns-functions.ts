/** @module Patterns */

export const isAccountNumberPattern = (value: string): boolean => {
  const pattern = '^[a-zA-Z0-9\\s]*$'
  return !!value.match(pattern)
}
/**
 * Checks if value matches account number pattern
 * <pre> /^[a-zA-Z0-9\\s]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isAccountTypeOtherPattern = (value: string): boolean => {
  const pattern = '^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ. ]*$'
  return !!value.match(pattern)
}
/**
 * Checks if value matches account type pattern
 * <pre> /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ. ]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isAlphaNumericPattern = (value: string): boolean => {
  const pattern = '^[a-zA-Z0-9]*$'
  return !!value.match(pattern)
}
/**
 * Checks if value matches alpha numeric pattern
 * <pre> /^[a-zA-Z0-9]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isCityPattern = (value: string): boolean => {
  const pattern = '^([a-zA-Z\u0080-\u024F]+(?:. |-| |\'))*[a-zA-Z\u0080-\u024F]*$'
  return !!value.match(pattern)
}
/**
 * Checks if value matches city pattern
 * <pre> /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isGenericTextPattern = (value: string): boolean => {
  const pattern = '^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\\s\\,\\.\\-\\+\\(\\)\\!\\?\\:\\@\\n]*$'
  return !!value.match(pattern)
}
/**
 * Checks if value matches generic text pattern
 * <pre> /^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s\,\.\-\+\(\)\!\?\:\@\n]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isLastNamePattern = (value: string): boolean => {
  const pattern = '^[a-zA-Z\\u00C0-\\u017F\\-\\s\\\']*$'
  return !!value.match(pattern)
}
/**
 * Checks if value matches last name pattern
 * <pre> /^[a-zA-Z\u00C0-\u017F\-\s\']*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isNamePattern = (value: string): boolean => {
  const pattern = '^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]*$'
  return !!value.match(pattern)
}
/**
 * Checks if value matches name pattern
 * <pre> /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isNipPattern = (value: string): boolean => {
  const pattern = '^[a-zA-Z0-9\\s\\-]*$'
  return !!value.match(pattern)
}
/**
 * Checks if value matches nip pattern
 * <pre> /^[a-zA-Z0-9\s\-]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isNumericPattern = (value: string): boolean => {
  const pattern = '^[0-9]*$'
  return !!value.match(pattern)
}
/**
 * Checks if value matches numeric pattern
 * <pre> /^[0-9]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isPasswordPattern = (value: string): boolean => {
  const pattern =
    '^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ' +
    '\\s\\-\\+\\_\\\\!\\@\\#\\$\\%\\^&\\*\\|\\"\\\'\\;\\:\\,\\.\\?\\(\\)\\[\\]\\{\\}]*$'
  return !!value.match(pattern)
}
/**
 * Checks if value matches password pattern
 * <pre> /^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s\-\+\_\\!\@\#\$\%\^&\*\|\"\'\;\:\,\.\?\(\)\[\]\{\}]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isBankAccountNamePattern = (value: string): boolean => {
  const pattern =
    '^[0-9a-zA-Z\\u00C0-\\u017F\\xad\\xa0\\u201c\\u201d\\u201e\u201f\\u2013' +
    '\\_\\;\\\'\\@\\-\\s\\",.\\/\\-\\+\\&\\(\\)]*$'
  return !!value.match(pattern)
}
/**
 * Checks if value matches bank account name pattern
 * <pre>
 *   /^[0-9a-zA-Z\u00C0-\u017F\xad\xa0\u201c\u201d\u201e\u201f\u2013\_\;\'\@\-\s\",.\/\-\+\&\(\)]*$/
 * </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isCharsCompanyPattern = (value: string): boolean => {
  const pattern =
    '^[a-zA-Z0-9\\u00C0-\\u017F\\xad\\xa0\\u201c\\u201d\\u201e\u201f\\u2013' +
    '\\_\\;\\@\\-\\s\\.\\,\\&\\`\\\'\\:\\(\\)\\!\\*\\"\\/\\\\\\+]*$'
  return !!value.match(pattern)
}
/**
 * Checks if value matches company name pattern
 * <pre>
 *   /^[a-zA-Z0-9\u00C0-\u017F\xad\xa0\u201c\u201d\u201e\u201f\u2013\_\;\@\-\s\.\,\&\`\'\:\(\)\!\*\"\/\\\+]*$/
 * </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isPostalCodePattern = (value: string): boolean => {
  const pattern = '^[a-zA-Z0-9 \\-]*$'
  return !!value.match(pattern)
}
/**
 * Checks if value matches postal code pattern
 * <pre> /^[a-zA-Z0-9 \-]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isStreetPattern = (value: string): boolean => {
  const pattern = '^[0-9a-zA-Z\\u00C0-\\u017F\\-\\s\\.,\\/]*$'
  return !!value.match(pattern)
}
/**
 * Checks if value matches street name pattern
 * <pre> /^[0-9a-zA-Z\u00C0-\u017F\-\s\.,\/]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isPolishStreetPattern = (value: string): boolean => {
  const pattern = '[a-zA-Z\\u00C0-\\u017F]+\\s\\d.*$'
  return !!value.match(pattern)
}
/**
 * Checks if value matches <street><number> pattern
 * <pre> /[a-zA-Z\\u00C0-\\u017F]+\\s\\d.*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */
