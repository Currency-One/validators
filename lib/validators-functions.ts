import { CountryCode } from 'libphonenumber-js'
import { ibanValidator } from './helpers/iban-validator'
import { idCardValidator } from './helpers/id-card-validator'
import { peselValidator } from './helpers/pesel-validator'
import libPhoneNumber from './helpers/phone-utils'
import valueOfLetter from './helpers/value-of-letter'

export const isValue = (value: any): boolean => !!value

export const isNotNull = (value: any): boolean => value !== null

export const isNotUndefined = (value: any): boolean => value !== undefined

export const isNotEmptyUnless = (value: string, canBeEmpty: boolean): boolean => canBeEmpty ? true : !!value

export const isNotEmptyString = (value: string): boolean => value !== ''

export const isNotEmptyTrimmedString = (value: string): boolean => value.trim() !== ''

export const isSelected = (value: string | boolean): boolean => (
  isNotNull(value)
  && isNotUndefined(value)
  && value !== ''
  && value !== '?'
  && value !== '? string: ?'
  && value !== '? boolean: ?'
  && value !== '? undefined:undefined ?'
)

export const isValidBankTitle = (value: string): boolean => (
  !!value.match(/^[A-Za-z0-9\.\ \,\/\(\)\:\-ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/)
)

export const isNip = (value: string): boolean => {
  const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7]
  const nip = value.replace(/[\s-]|PL/g, '')
  const zip = (rows) => rows[0].map((_,c) => rows.map((row) => row[c]))
  if (nip.length === 10 && parseInt(nip, 10) > 0) {
    const zippedNip = zip([weights, nip.slice(0,9)])
    const sum = zippedNip.map(([weight, n]) => weight * n).reduce((a, b) => a + b, 0)

    return (sum % 11) === parseInt(nip[9], 10)
  }
  return false
}

export const isPostalCode = (value: string, country?: string): boolean => (
  country === 'PL' ? !!value.match(/^\d{2}\-?\d{3}$/) && value !== '00-000' && value !== '00000'
    : country === 'CN'
      ? !!value.match(/^[0-9]{1,6}$/)
      : true
)

export const isValidPassword = (value: string): boolean => !!value.match(/^.{8,}$/)

export const isNotSmaller = (value: string, minValue: string): boolean => (
  value && parseFloat(value) >= parseFloat(minValue)
)

export const isNotSmallerOrEqual = (value: string, minValue: string): boolean => (
  value && parseFloat(value) > parseFloat(minValue)
)

export const isNotHigher = (value: string, maxValue: string): boolean => (
  value && parseFloat(value) < parseFloat(maxValue)
)

export const isNotHigherOrEqual = (value: string, maxValue: string): boolean => (
  value && parseFloat(value) <= parseFloat(maxValue)
)

export const isEmail = (value: string): boolean => (
  // https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
  value
    ? !!value.match(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i)
    : true
)

export const isMinLength = (value: string, minLength: number): boolean => value && value.length >= minLength

export const isMaxLength = (value: string, maxLength: number): boolean => value && value.length <= maxLength

export const isPhone = (value: string, countryCode: CountryCode): boolean => {
  try {
    return value.length > 1 && libPhoneNumber.parsePhoneNumber(value, countryCode).isValid()
  } catch (e) {
    return false
  }
}

export const isMobilePhone = (value: string, countryCode: CountryCode): boolean => {
  const countryNumber = libPhoneNumber.getCountryCallingCode(countryCode)
  const phoneNumberType = libPhoneNumber.parsePhoneNumber(`+${countryNumber}${value}`).getType()
  return (
    ['MOBILE', 'FIXED_LINE_OR_MOBILE'].indexOf(phoneNumberType) >= 0
  )
}

export const isSameAs = (value: string, otherValue: string): boolean => value === otherValue

export const isOtherThan = (value: string, otherValue: string): boolean => value !== otherValue

export const isIban = (value: string, countryCode?: string): boolean => ibanValidator.checkIban(value, countryCode)

export const isPesel = (value: string): boolean => peselValidator.validatePesel(value)

export const isPeselNotUnder18 = (value: string) => peselValidator.peselNotUnder18(value)

export const isValidDate = (value: string): boolean => {
  const [year, month, day] = value.split('-')
  const date = new Date(value)
  return date.getFullYear() === parseFloat(year)
    && date.getMonth() === (parseFloat(month) - 1) //bloody 0-indexed month
    && date.getDate() === parseFloat(day)
    && !!value.match(/\d{4}-\d{2}-\d{2}/)
}

export const isDateNotUnder18 = (date: string): boolean => new Date(date).getFullYear() - new Date().getFullYear() <= -18

export const isExpiryDateValid = (date: string): boolean => idCardValidator.validateExpiryDate(date)

export const isReleaseDateValid = (date: string, expiryDate: string): boolean => idCardValidator.validateReleaseDate(date, expiryDate)

export const isIdNumberValid = (value: string): boolean => idCardValidator.validIdNumber(value)

export const isPassportValid = (value: string): boolean => {
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

export const isBirthDateValid = (date: string): boolean => {
  const now = new Date().getFullYear()
  const yearsToCheck = new Date(date).getFullYear()
  return now - yearsToCheck <= 150 && new Date(date) <= new Date()
}

export const isAfterToday = (date: string): boolean => new Date(date) > new Date()

export const isBeforeToday = (date: string): boolean => new Date(date) < new Date()

export const isPropValid = (validObject: {valid: boolean, [key: string]: any}): boolean => !!validObject.valid

export const isAllKeys = (object: object, expectedKeys: string[]): boolean => expectedKeys.every((val) => Object.keys(object).includes(val))

export const isLatin = (value: string): boolean => !value.match(/[а-яА-ЯЁё]/ig)

export const isLanNumber = (value: string): boolean => !!value.replace(/ /g, '').match(/^[A-Za-z0-9]{1,22}$/)

export const isSwift = (value: string): boolean => !!value.match(/^[A-Za-z0-9]{8,11}$/)

export const isSwiftCountry = (swift: string, country: string): boolean => {
  const swiftCountry = swift.substr(4, 2)
  return !country ? true
    : country === 'CN' ? ['CN', 'HK', 'MO'].includes(swiftCountry)
      : swiftCountry === country
}





