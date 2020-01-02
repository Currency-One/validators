/** @module Patterns */

export const accountNumberPattern = (value: string): boolean => {
  const pattern = '^[a-zA-Z0-9\\s]*$'
  return !!value.match(pattern)
}
/**
 * Check if value match account number pattern
 * <pre> /^[a-zA-Z0-9\\s]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const accountTypeOtherPattern = (value: string): boolean => {
  const pattern = '^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ. ]*$'
  return !!value.match(pattern)
}
/**
 * Check if value match account type pattern
 * <pre> /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ. ]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const alphaNumericPattern = (value: string): boolean => {
  const pattern = '^[a-zA-Z0-9]*$'
  return !!value.match(pattern)
}
/**
 * Check if value match alpha numeric pattern
 * <pre> /^[a-zA-Z0-9]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const cityPattern = (value: string): boolean => {
  const pattern = '^([a-zA-Z\u0080-\u024F]+(?:. |-| |\'))*[a-zA-Z\u0080-\u024F]*$'
  return !!value.match(pattern)
}
/**
 * Check if value match city pattern
 * <pre> /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const genericTextPattern = (value: string): boolean => {
  const pattern = '^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\\s\\,\\.\\-\\+\\(\\)\\!\\?\\:\\@\\n]*$'
  return !!value.match(pattern)
}
/**
 * Check if value match generic text pattern
 * <pre> /^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s\,\.\-\+\(\)\!\?\:\@\n]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const lastNamePattern = (value: string): boolean => {
  const pattern = '^[a-zA-Z\\u00C0-\\u017F\\-\\s\\\']*$'
  return !!value.match(pattern)
}
/**
 * Check if value match last name pattern
 * <pre> /^[a-zA-Z\u00C0-\u017F\-\s\']*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const namePattern = (value: string): boolean => {
  const pattern = '^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]*$'
  return !!value.match(pattern)
}
/**
 * Check if value match name pattern
 * <pre> /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const nipPattern = (value: string): boolean => {
  const pattern = '^[a-zA-Z0-9\\s\\-]*$'
  return !!value.match(pattern)
}
/**
 * Check if value match nip pattern
 * <pre> /^[a-zA-Z0-9\s\-]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const numericPattern = (value: string): boolean => {
  const pattern = '^[0-9]*$'
  return !!value.match(pattern)
}
/**
 * Check if value match numeric pattern
 * <pre> /^[0-9]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const passwordPattern = (value: string): boolean => {
  const pattern =
    '^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ' +
    '\\s\\-\\+\\_\\\\!\\@\\#\\$\\%\\^&\\*\\|\\"\\\'\\;\\:\\,\\.\\?\\(\\)\\[\\]\\{\\}]*$'
  return !!value.match(pattern)
}
/**
 * Check if value match password pattern
 * <pre> /^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s\-\+\_\\!\@\#\$\%\^&\*\|\"\'\;\:\,\.\?\(\)\[\]\{\}]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const bankAccountNamePattern = (value: string): boolean => {
  const pattern =
    '^[0-9a-zA-Z\\u00C0-\\u017F\\xad\\xa0\\u201c\\u201d\\u201e\u201f\\u2013' +
    '\\_\\;\\\'\\@\\-\\s\\",.\\/\\-\\+\\&\\(\\)]*$'
  return !!value.match(pattern)
}
/**
 * Check if value match bank account name pattern
 * <pre>
 *   /^[0-9a-zA-Z\u00C0-\u017F\xad\xa0\u201c\u201d\u201e\u201f\u2013\_\;\'\@\-\s\",.\/\-\+\&\(\)]*$/
 * </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const charsCompanyPattern = (value: string): boolean => {
  const pattern =
    '^[a-zA-Z0-9\\u00C0-\\u017F\\xad\\xa0\\u201c\\u201d\\u201e\u201f\\u2013' +
    '\\_\\;\\@\\-\\s\\.\\,\\&\\`\\\'\\:\\(\\)\\!\\*\\"\\/\\\\\\+]*$'
  return !!value.match(pattern)
}
/**
 * Check if value match company name pattern
 * <pre>
 *   /^[a-zA-Z0-9\u00C0-\u017F\xad\xa0\u201c\u201d\u201e\u201f\u2013\_\;\@\-\s\.\,\&\`\'\:\(\)\!\*\"\/\\\+]*$/
 * </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const postalCodePattern = (value: string): boolean => {
  const pattern = '^[a-zA-Z0-9 \\-]*$'
  return !!value.match(pattern)
}
/**
 * Check if value match postal code pattern
 * <pre> /^[a-zA-Z0-9 \-]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const streetPattern = (value: string): boolean => {
  const pattern = '^[0-9a-zA-Z\\u00C0-\\u017F\\-\\s\\.,\\/]*$'
  return !!value.match(pattern)
}
/**
 * Check if value match street name pattern
 * <pre> /^[0-9a-zA-Z\u00C0-\u017F\-\s\.,\/]*$/ </pre>
 * @param {string} value - value to check.
 * @returns {boolean}
 */
