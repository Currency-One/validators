/** @module Phone Number Validators */

import { CountryCode } from 'libphonenumber-js'
import * as phoneUtils from 'libphonenumber-js/max'

export const isPhoneValidator = (value: string, countryCode: CountryCode): boolean => {
  try {
    return value.length > 1 && phoneUtils.parsePhoneNumber(value, countryCode).isValid()
  } catch (e) {
    return false
  }
}
/**
 * Checks if value is valid phone number. Based on google libphonenumber
 * @param {string} value - value to check.
 * @param {CountryCode} countryCode - country code.
 * @returns {boolean}
 */

export const isMobilePhoneValidator = (value: string, countryCode: CountryCode): boolean => {
  const countryNumber = phoneUtils.getCountryCallingCode(countryCode)
  const phoneNumberType = phoneUtils.parsePhoneNumber(`+${countryNumber}${value}`).getType()
  return (
    ['MOBILE', 'FIXED_LINE_OR_MOBILE'].indexOf(phoneNumberType) >= 0
  )
}
/**
 * Checks if value is valid mobile phone number. Based on google libphonenumber
 * @param {string} value - value to check.
 * @param {CountryCode} countryCode - country code.
 * @returns {boolean}
 */
