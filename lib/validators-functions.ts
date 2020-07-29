/** @module Validators */

import * as phoneUtils from 'libphonenumber-js/max'
import moment from 'moment'

import { CountryCode } from 'libphonenumber-js'
import { ibanHelper } from './helpers/iban-helper'
import { idCardHelper } from './helpers/id-card-helper'
import { peselHelper } from './helpers/pesel-helper'
import valueOfLetter from './helpers/value-of-letter'

export const isValueValidator = (value: any): boolean => !!value
/**
 * Checks if any proper value was given
 * @param {any} value - value to check.
 * @returns {boolean}
 */

export const isNotNullValidator = (value: any): boolean => value !== null
/**
 * Checks if value is not null
 * @param {any} value - value to check.
 * @returns {boolean}
 */

export const isNotUndefinedValidator = (value: any): boolean => value !== undefined
/**
 * Checks if value is not undefined
 * @param {any} value - value to check.
 * @returns {boolean}
 */

export const isNotEmptyUnlessValidator = (value: string, canBeEmpty: boolean): boolean => canBeEmpty ? true : !!value
/**
 * Checks if value was given unless can be empty.
 * @param {string} value - value to check.
 * @param {boolean} canBeEmpty - if true validation is ignored
 * @returns {boolean}
 */

export const isNotEmptyStringValidator = (value: string): boolean => value !== ''
/**
 * Checks if value is not empty string
 * @param {any} value - value to check.
 * @returns {boolean}
 */

export const isNotEmptyTrimmedStringValidator = (value: string): boolean => value.trim() !== ''
/**
 * Checks if value is not empty string after trim
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isSelectedValidator = (value: string | boolean): boolean => (
  isNotNullValidator(value)
  && isNotUndefinedValidator(value)
  && value !== ''
  && value !== '?'
  && value !== '? string: ?'
  && value !== '? boolean: ?'
  && value !== '? undefined:undefined ?'
)
/**
 * Checks if any option was chosen. Created for select2 library
 * @param {(string| boolean)} value - value to check.
 * @returns {boolean}
 */

export const isValidBankTitleValidator = (value: string): boolean => (
  !!value.match(/^[A-Za-z0-9\.\ \,\/\(\)\:\-ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/)
)
/**
 * Checks if value is valid bank title
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isNipValidator = (value: string): boolean => {
  const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7]
  const nip = value.replace(/[\s-]|PL/g, '')
  const zip = (rows) => rows[0].map((_, c) => rows.map((row) => row[c]))
  if (nip.length === 10 && parseInt(nip, 10) > 0) {
    const zippedNip = zip([weights, nip.slice(0, 9)])
    const sum = zippedNip.map(([weight, n]) => weight * n).reduce((a, b) => a + b, 0)

    return (sum % 11) === parseInt(nip[9], 10)
  }
  return false
}
/**
 * Checks if value is valid nip number
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isPostalCodeValidator = (value: string, country?: string): boolean => (
  country === 'PL' ? !!value.match(/^\d{2}\-?\d{3}$/) && value !== '00-000' && value !== '00000'
    : country === 'CN'
      ? !!value.match(/^[0-9]{1,6}$/)
      : true
)
/**
 * Checks if value is valid polish or chinese postal code
 * @param {string} value - value to check.
 * @param {string} country - country of postal code.
 * @returns {boolean}
 */

export const isPasswordValidator = (value: string): boolean => !!value.match(/^.{8,}$/)
/**
 * Checks if value is valid password with 8 signs
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isNotSmallerValidator = (value: string, minValue: string): boolean => (
  value && parseFloat(value) >= parseFloat(minValue)
)
/**
 * Checks if value is smaller than given minimal value
 * @param {string} value - value to check.
 * @param {string} minValue - minimal value.
 * @returns {boolean}
 */

export const isNotSmallerOrEqualValidator = (value: string, minValue: string): boolean => (
  value && parseFloat(value) > parseFloat(minValue)
)
/**
 * Checks if value is smaller or equal than given minimal value
 * @param {string} value - value to check.
 * @param {string} minValue - minimal value.
 * @returns {boolean}
 */

export const isNotHigherValidator = (value: string, maxValue: string): boolean => (
  value && parseFloat(value) < parseFloat(maxValue)
)
/**
 * Checks if value is higher than given maximal value
 * @param {string} value - value to check.
 * @param {string} maxValue - maximal value.
 * @returns {boolean}
 */

export const isNotHigherOrEqualValidator = (value: string, maxValue: string): boolean => (
  value && parseFloat(value) <= parseFloat(maxValue)
)
/**
 * Checks if value is higher or equal than given maximal value
 * @param {string} value - value to check.
 * @param {string} maxValue - maximal value.
 * @returns {boolean}
 */

export const isEmailValidator = (value: string): boolean => (
  // https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
  value
    ? !!value.match(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i)
    : true
)
/**
 * Checks if value is valid email. Based on w3.org
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isMinLengthValidator = (value: string, minLength: number): boolean => value && value.length >= minLength
/**
 * Checks if value has smaller or equal length than given minimal length
 * @param {string} value - value to check.
 * @param {string} minLength - minimal length.
 * @returns {boolean}
 */

export const isMaxLengthValidator = (value: string, maxLength: number): boolean => value && value.length <= maxLength
/**
 * Checks if value has bigger or equal length than given maximal length
 * @param {string} value - value to check.
 * @param {string} maxLength - maximal length.
 * @returns {boolean}
 */

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

export const isSameAsValidator = (value: string, otherValue: string): boolean => value === otherValue
/**
 * Checks if value is equal to other value
 * @param {string} value - value to check.
 * @param {string} otherValue - other value to check.
 * @returns {boolean}
 */

export const isOtherThanValidator = (value: string, otherValue: string): boolean => value !== otherValue
/**
 * Checks if value is not equal to other value
 * @param {string} value - value to check.
 * @param {string} otherValue - other value to check.
 * @returns {boolean}
 */

export const isIbanValidator = (value: string, countryCode?: string): boolean => (
  ibanHelper.checkIban(value, countryCode)
)
/**
 * Checks if value is valid iban number
 * @param {string} value - value to check.
 * @param {CountryCode} countryCode - country code.
 * @returns {boolean}
 */

export const isLanNumberValidator = (value: string, country?: string): boolean => {
  const lanCountriesRules = {
    AU: /^[A-Za-z0-9]{12,16}$/,
    CA: /^[A-Za-z0-9]{9,15}$/,
    CN: /^[A-Za-z0-9]{1,22}$/,
    JP: /^[A-Za-z0-9]{8,14}$/,
    KR: /^[A-Za-z0-9]{11,16}$/,
    NZ: /^[A-Za-z0-9]{15,16}$/,
    SG: /^[A-Za-z0-9]{1,14}$/,
    TW: /^[A-Za-z0-9]{1,22}$/,
    US: /^[A-Za-z0-9]{10,30}$/,
  }
  const defaultRule = /^[A-Za-z0-9]{1,22}$/
  return !!value.replace(/ /g, '').match(lanCountriesRules[country] ? lanCountriesRules[country] : defaultRule)
}
/**
 * Checks if value is valid non-iban account number
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isSwiftValidator = (value: string): boolean => !!value.match(/^[A-Za-z0-9]{8,11}$/)
/**
 * Checks if value is valid swift number
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isSwiftCountryValidator = (swift: string, country: string): boolean => {
  const swiftCountry = swift.substr(4, 2)
  return !country ? true
    : country === 'CN' ? ['CN', 'HK', 'MO'].includes(swiftCountry)
      : swiftCountry === country
}
/**
 * Checks if given country is equal to country taken from swift
 * @param {string} swift - swift to check.
 * @param {string} country - country to compare.
 * @returns {boolean}
 */

export const isPeselValidator = (value: string): boolean => peselHelper.validatePesel(value)
/**
 * Checks if value is valid pesel number. Also accepts *********** as anonymized pesel
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isPeselNotUnder18Validator = (value: string) => peselHelper.peselNotUnder18(value)
/**
 * Checks if person with given pesel is above 18 years
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isDateValidator = (value: string): boolean => moment(value, 'YYYY-MM-DD', true).isValid()
/**
 * Checks if value is valid date in format YYYY-MM-DD. Validates also number of days per month
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isDateNotUnder18Validator = (date: string): boolean => (
  moment(date, 'YYYY-MM-DD').diff(moment(), 'years') <= -18
)
/**
 * Checks if person with given birthday is above 18 years. Date in format YYYY-MM-DD
 * @param {string} date - value to check.
 * @returns {boolean}
 */

export const isExpiryDateValidator = (date: string): boolean => idCardHelper.validateExpiryDate(date)
/**
 * Checks if given expiration date of id card is valid. Checks if given date is later or equal to today and
 * if given date is smaller than current date plus 100 years. Date in format YYYY-MM-DD
 * @param {string} date - value to check.
 * @returns {boolean}
 */

export const isReleaseDateValidator = (date: string, expiryDate: string): boolean => (
  idCardHelper.validateReleaseDate(date, expiryDate)
)
/**
 * Checks if given release date of id card is valid. Checks if given date is earlier or equal to today and
 * if given date is bigger than current date minus 100 years. You can also pass expiration date and if it's given
 * then it is checked if expiration date is later than release date. Date in format YYYY-MM-DD
 * @param {string} date - value to check.
 * @param {string} expiryDate - acc.
 * @returns {boolean}
 */

export const isIdNumberValidator = (value: string): boolean => {
  const idNumberWeights = [7, 3, 1, 9, 7, 3, 1, 7, 3]

  function checkIdNumber(id) {
    let controlSum = 0
    for (let i = 0; i < id.length; i++) {
      controlSum += i < 3 ? valueOfLetter(id[i]) * idNumberWeights[i] : parseInt(id[i], 10) * idNumberWeights[i]
    }
    return controlSum % 10
  }

  function isValid(id) {
    const parsedValue = id.replace(/ /g, '')
    return checkIdNumber(parsedValue) === 0 && parsedValue.length === 9
  }

  return isValid(value)
}
/**
 * Checks if value is valid polish id number
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isPassportValidator = (value: string): boolean => {
  const passportNumberWeights = [7, 3, 9, 1, 7, 3, 1, 7, 3]

  function checkPassportNumber(passport) {
    let controlSum = 0
    for (let i = 0; i < passport.length; i++) {
      controlSum +=
        i < 2
          ? valueOfLetter(passport[i]) * passportNumberWeights[i]
          : parseInt(passport[i], 10) * passportNumberWeights[i]
    }
    return controlSum % 10
  }

  return checkPassportNumber(value) === 0 && value.length === 9
}
/**
 * Checks if value is valid polish passport number
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isBirthDateValidator = (date: string): boolean => {
  const dateFormatted = moment(date, 'YYYY-MM-DD')
  return moment().diff(dateFormatted, 'years') <= 150
    && dateFormatted.isSameOrBefore(moment(), 'day')
}
/**
 * Checks if value is valid birth date. Assumes that human cannot be older than 150 years. Date in format YYYY-MM-DD
 * @param {string} date - value to check.
 * @returns {boolean}
 */

export const isAfterTodayValidator = (date: string): boolean => moment(date).isAfter(moment())
/**
 * Checks if given date is after today. Date in format YYYY-MM-DD
 * @param {string} date - value to check.
 * @returns {boolean}
 */

export const isBeforeTodayValidator = (date: string): boolean => moment(date).isBefore(moment())
/**
 * Checks if given date is before today. Date in format YYYY-MM-DD
 * @param {string} date - value to check.
 * @returns {boolean}
 */

export const isPropValidator = (validObject: {valid: boolean, [key: string]: any}): boolean => !!validObject.valid
/**
 * Checks if given object has property valid and if it is equal to true
 * @param {{valid: boolean}} value - value to check.
 * @returns {boolean}
 */

export const isAllKeysValidator = (object: object, expectedKeys: string[]): boolean => (
  expectedKeys.every((val) => Object.keys(object).includes(val))
)
/**
 * Checks if given object has all keys
 * @param {object} object - value to check.
 * @param {string[]} expectedKeys - array of expected keys.
 * @returns {boolean}
 */

export const isLatinValidator = (value: string): boolean => !value.match(/[а-яА-ЯЁё]/ig)
/**
 * Checks if value has not any cyrillic letters
 * @param {string} value - value to check.
 * @returns {boolean}
 */
