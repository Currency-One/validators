import * as MockDate from 'mockdate'
import {
  isAfterTodayValidator,
  isAllKeysValidator,
  isBeforeTodayValidator,
  isBirthDateValidator,
  isDateNotUnder18Validator,
  isDateValidator,
  isEmailValidator,
  isExpiryDateValidator,
  isIbanValidator,
  isIdNumberValidator,
  isLanNumberValidator,
  isLatinValidator,
  isMaxLengthValidator,
  isMinLengthValidator,
  isMobilePhoneValidator,
  isNipValidator,
  isNotEmptyStringValidator,
  isNotEmptyTrimmedStringValidator,
  isNotEmptyUnlessValidator,
  isNotHigherOrEqualValidator,
  isNotHigherValidator,
  isNotSmallerOrEqualValidator,
  isNotSmallerValidator,
  isOtherThanValidator,
  isPassportValidator,
  isPasswordValidator,
  isPeselNotUnder18Validator,
  isPeselValidator,
  isPhoneValidator,
  isPostalCodeValidator,
  isPropValidator,
  isReleaseDateValidator,
  isSameAsValidator,
  isSelectedValidator,
  isSwiftCountryValidator, isSwiftValidator, isValidBankTitleValidator, isValueValidator,
} from '../lib'
import { ibanHelper } from '../lib/helpers/iban-helper'

function lanWithLength(length: number): string {
  return '1'.repeat(length)
}

describe('Validators', () => {
  beforeEach(() => {
    MockDate.set('2017-04-01T00:00:00.000Z')
  })

  it('should isValueValidator() find empty values correctly', () => {
    expect(isValueValidator('asd')).toBeTruthy()
    expect(isValueValidator([])).toBeTruthy()
    expect(isValueValidator({})).toBeTruthy()
    expect(isValueValidator('')).toBeFalsy()
    expect(isValueValidator(undefined)).toBeFalsy()
  })

  it('should isNotEmptyStringValidator() find empty values correctly', () => {
    expect(isNotEmptyStringValidator('asd')).toBeTruthy()
    expect(isNotEmptyStringValidator('   ')).toBeTruthy()
    expect(isNotEmptyStringValidator('')).toBeFalsy()
  })

  it('should isNotEmptyStringValidator() find empty values correctly', () => {
    expect(isNotEmptyTrimmedStringValidator('asd')).toBeTruthy()
    expect(isNotEmptyTrimmedStringValidator('   ')).toBeFalsy()
    expect(isNotEmptyTrimmedStringValidator('')).toBeFalsy()
  })

  it('should isNotEmptyUnlessValidator() find empty value correctly', () => {
    expect(isNotEmptyUnlessValidator('2010-10-12', false)).toBeTruthy()
    expect(isNotEmptyUnlessValidator('', false)).toBeFalsy()
    expect(isNotEmptyUnlessValidator('2010-10-12', true)).toBeTruthy()
    expect(isNotEmptyUnlessValidator('', true)).toBeTruthy()
  })

  it('should isLatinValidator() find not latin values correctly', () => {
    expect(isLatinValidator('asd')).toBeTruthy()
    expect(isLatinValidator('Привіт')).toBeFalsy()
  })

  it('should isSelectedValidator() validate element correctly', () => {
    expect(isSelectedValidator('1')).toBeTruthy()
    expect(isSelectedValidator('')).toBeFalsy()
    expect(isSelectedValidator(undefined)).toBeFalsy()
    expect(isSelectedValidator(null)).toBeFalsy()
    expect(isSelectedValidator(false)).toBeTruthy()
    expect(isSelectedValidator('?')).toBeFalsy()
    expect(isSelectedValidator('? string: ?')).toBeFalsy()
    expect(isSelectedValidator('? boolean: ?')).toBeFalsy()
    expect(isSelectedValidator('? undefined:undefined ?')).toBeFalsy()
  })

  it('should isValidBankTitleValidator() validate value correctly', () => {
    expect(isValidBankTitleValidator('aAa')).toBeTruthy()
    expect(isValidBankTitleValidator('aa22')).toBeTruthy()
    expect(isValidBankTitleValidator('2222')).toBeTruthy()
    expect(isValidBankTitleValidator('22AA')).toBeTruthy()
    expect(isValidBankTitleValidator('.,/()- ')).toBeTruthy()
    expect(isValidBankTitleValidator('$%&.,/()- !@#')).toBeFalsy()
    expect(isValidBankTitleValidator('!@#$%^&*()_&*%$@#')).toBeFalsy()
    expect(isValidBankTitleValidator('ęóąśłżźćń')).toBeTruthy()
    expect(isValidBankTitleValidator('Γεώργιος Αποστολίδης')).toBeFalsy()
  })

  it('should isPostalCodeValidator() validate postal code correctly', () => {
    expect(isPostalCodeValidator('60-600', 'PL')).toBeTruthy()
    expect(isPostalCodeValidator('60600', 'PL')).toBeTruthy()
    expect(isPostalCodeValidator('606001', 'PL')).toBeFalsy()
    expect(isPostalCodeValidator('124 56', 'PL')).toBeFalsy()
    expect(isPostalCodeValidator('12456', 'PL')).toBeTruthy()
    expect(isPostalCodeValidator('12-456', 'PL')).toBeTruthy()
    expect(isPostalCodeValidator('125644', 'PL')).toBeFalsy()
    expect(isPostalCodeValidator('aaaaa', 'PL')).toBeFalsy()
    expect(isPostalCodeValidator('124 56')).toBeTruthy()
    expect(isPostalCodeValidator('12456')).toBeTruthy()
    expect(isPostalCodeValidator('12-456')).toBeTruthy()
    expect(isPostalCodeValidator('125644')).toBeTruthy()
    expect(isPostalCodeValidator('aaaaa')).toBeTruthy()
    expect(isPostalCodeValidator('00-000', 'PL')).toBeFalsy()
    expect(isPostalCodeValidator('00000', 'PL')).toBeFalsy()
    expect(isPostalCodeValidator('123456', 'CN')).toBeTruthy()
    expect(isPostalCodeValidator('1', 'CN')).toBeTruthy()
    expect(isPostalCodeValidator('01-123', 'CN')).toBeFalsy()
    expect(isPostalCodeValidator('A12345', 'CN')).toBeFalsy()
    expect(isPostalCodeValidator('1234567', 'CN')).toBeFalsy()
  })

  it('should isPasswordValidator() validate password correctly', () => {
    expect(isPasswordValidator('asdfghjk')).toBeTruthy()
    expect(isPasswordValidator('asdfghj')).toBeFalsy()
    expect(isPasswordValidator('')).toBeFalsy()
  })

  it('should isNotHigherOrEqualValidator() validate number correctly', () => {
    expect(isNotHigherOrEqualValidator('10', '11')).toBeTruthy()
    expect(isNotHigherOrEqualValidator('10', '10')).toBeTruthy()
    expect(isNotHigherOrEqualValidator('10.00', '10.11')).toBeTruthy()
    expect(isNotHigherOrEqualValidator('10', '9')).toBeFalsy()
    expect(isNotHigherOrEqualValidator('10.9', '10.1')).toBeFalsy()
  })

  it('should isNotHigherValidator() validate number correctly', () => {
    expect(isNotHigherValidator('10', '11')).toBeTruthy()
    expect(isNotHigherValidator('10', '10')).toBeFalsy()
    expect(isNotHigherValidator('10.00', '10.11')).toBeTruthy()
    expect(isNotHigherValidator('10', '9')).toBeFalsy()
    expect(isNotHigherValidator('10.9', '10.1')).toBeFalsy()
  })

  it('should isEmailValidator() validate email correctly', () => {
    expect(isEmailValidator('test@email.com')).toBeTruthy()
    expect(isEmailValidator('test@email.pl')).toBeTruthy()
    expect(isEmailValidator('test@email.info')).toBeTruthy()
    expect(isEmailValidator('test+1@email.com')).toBeTruthy()
    expect(isEmailValidator('tESt+1@email.com')).toBeTruthy()
    expect(isEmailValidator('email@111.222.333.44444')).toBeTruthy()
    expect(isEmailValidator('email@')).toBeFalsy()
    expect(isEmailValidator('@email.com')).toBeFalsy()
    expect(isEmailValidator('ania.asd@.gmail.com')).toBeFalsy()
    expect(isEmailValidator('test,@email.pl')).toBeFalsy()
    expect(isEmailValidator('testemail.pl')).toBeFalsy()
    expect(isEmailValidator('aaa@aaa')).toBeFalsy()
    expect(isEmailValidator('plainaddress')).toBeFalsy()
    expect(isEmailValidator('email.domain.com')).toBeFalsy()
    expect(isEmailValidator('#@%^%#$@#$@#.com')).toBeFalsy()
    expect(isEmailValidator('email@domain.com (JoeSmith)')).toBeFalsy()
    expect(isEmailValidator('email@domain@domain.com')).toBeFalsy()
    expect(isEmailValidator('あいうえお@domain.com')).toBeFalsy()
    expect(isEmailValidator('email@-domain.com')).toBeFalsy()
    expect(isEmailValidator('email@domain..com')).toBeFalsy()
    expect(isEmailValidator('a@urząd.mf.gov.pl')).toBeFalsy()
    expect(isEmailValidator('.email@domain.com')).toBeFalsy()
    expect(isEmailValidator('email.@domain.com')).toBeFalsy()
    expect(isEmailValidator('email..email@domain.com')).toBeFalsy()
  })

  it('should isNotSmallerOrEqualValidator() validate value correctly', () => {
    expect(isNotSmallerOrEqualValidator('10', '9')).toBeTruthy()
    expect(isNotSmallerOrEqualValidator('10.5', '10.4')).toBeTruthy()
    expect(isNotSmallerOrEqualValidator('10', '11')).toBeFalsy()
    expect(isNotSmallerOrEqualValidator('10', '10')).toBeFalsy()
    expect(isNotSmallerOrEqualValidator('10.5', '10.6')).toBeFalsy()
    expect(isNotSmallerOrEqualValidator('10.5', '10.5')).toBeFalsy()
  })

  it('should isSameAsValidator() validate value correctly', () => {
    expect(isSameAsValidator('10', '10')).toBeTruthy()
    expect(isSameAsValidator('', '')).toBeTruthy()
    expect(isSameAsValidator('11', '10')).toBeFalsy()
    expect(isSameAsValidator('', undefined)).toBeFalsy()
  })

  it('should isOtherThanValidator() validate value correctly', () => {
    expect(isOtherThanValidator('10', '10')).toBeFalsy()
    expect(isOtherThanValidator('', '')).toBeFalsy()
    expect(isOtherThanValidator('11', '10')).toBeTruthy()
    expect(isOtherThanValidator('', undefined)).toBeTruthy()
  })

  it('should isNipValidator() validate value correctly', () => {
    expect(isNipValidator('6677059645')).toBeTruthy()
    expect(isNipValidator('1696690974')).toBeTruthy()
    expect(isNipValidator('527-25-25-995')).toBeTruthy()
    expect(isNipValidator('PL298-42-58-365')).toBeTruthy()
    expect(isNipValidator('12345671')).toBeFalsy()
    expect(isNipValidator('')).toBeFalsy()
    expect(isNipValidator('void')).toBeFalsy()
  })

  it('should isPhoneValidator() validate value correctly', () => {
    expect(isPhoneValidator('500500500', 'PL')).toBeTruthy()
    expect(isPhoneValidator('221101010', 'PL')).toBeTruthy()
    expect(isPhoneValidator('12345', 'PL')).toBeFalsy()
  })

  it('should isMobilePhoneValidator() validate value correctly', () => {
    expect(isMobilePhoneValidator('500500500', 'PL')).toBeTruthy()
    expect(isMobilePhoneValidator('60000000', 'DK')).toBeTruthy()
    expect(isMobilePhoneValidator('221101010', 'PL')).toBeFalsy()
  })

  it('should isIbanValidator() validate value correctly', () => {
    expect(isIbanValidator('CZ 52 2554 3385 1391 1493 6948')).toBeTruthy()
    expect(isIbanValidator('CZ5225543385139114936948')).toBeTruthy()
    expect(isIbanValidator('005225543385139114936948')).toBeFalsy()
    expect(isIbanValidator('asdasdsad')).toBeFalsy()
    expect(isIbanValidator('')).toBeFalsy()
    expect(isIbanValidator('void')).toBeFalsy()
    expect(isIbanValidator('LV72NDEA0000084513319')).toBeTruthy()
    expect(isIbanValidator('LV72NDEA0000084513319', 'LV')).toBeTruthy()
    expect(isIbanValidator('72NDEA0000084513319', 'LV')).toBeTruthy()
    expect(isIbanValidator('LV72NDEA0000084513319', 'PL')).toBeFalsy()
  })

  it('should isDateValidator() validate value correctly', () => {
    expect(isDateValidator('2015-05-01')).toBeTruthy()
    expect(isDateValidator('1920-11-01')).toBeTruthy()
    expect(isDateValidator('1966-06-12')).toBeTruthy()
    expect(isDateValidator('2012-02-29')).toBeTruthy()
    expect(isDateValidator('1970-06-6')).toBeFalsy()
    expect(isDateValidator('1970-6-6')).toBeFalsy()
    expect(isDateValidator('70-06-06')).toBeFalsy()
    expect(isDateValidator('2020-06-31')).toBeFalsy()
    expect(isDateValidator('2013-02-29')).toBeFalsy()
    expect(isDateValidator('2020-20-20')).toBeFalsy()
  })

  it('should isMinLengthValidator() validate correctly', () => {
    expect(isMinLengthValidator('void', 7)).toBeFalsy()
    expect(isMinLengthValidator('asdasasd', 22)).toBeFalsy()
    expect(isMinLengthValidator('asdss', 2)).toBeTruthy()
    expect(isMinLengthValidator('ash5hh54hdss', 7)).toBeTruthy()
  })

  it('should isMaxLengthValidator() validate correctly', () => {
    expect(isMaxLengthValidator('void', 7)).toBeTruthy()
    expect(isMaxLengthValidator('asdasasd', 22)).toBeTruthy()
    expect(isMaxLengthValidator('asdss', 2)).toBeFalsy()
    expect(isMaxLengthValidator('ash5hh54hdss', 7)).toBeFalsy()
  })

  it('should isPeselValidator() validate value correctly', () => {
    expect(isPeselValidator('87103009246')).toBeTruthy()
    expect(isPeselValidator('87103009245')).toBeFalsy()
    expect(isPeselValidator('92112716180')).toBeTruthy()
    expect(isPeselValidator('33011901514')).toBeTruthy()
    expect(isPeselValidator('69101711057')).toBeTruthy()
    expect(isPeselValidator('69101711052')).toBeFalsy()
  })

  it('should isPeselValidator() pass when value is masked', () => {
    expect(isPeselValidator('***********')).toBeTruthy()
    expect(isPeselValidator('**********')).toBeFalsy()
    expect(isPeselValidator('************')).toBeFalsy()
  })

  it('should isPeselNotUnder18Validator() validate value correctly', () => {
    expect(isPeselNotUnder18Validator('87103009246')).toBeTruthy()
    expect(isPeselNotUnder18Validator('87103009245')).toBeTruthy()
    expect(isPeselNotUnder18Validator('92112716180')).toBeTruthy()
    expect(isPeselNotUnder18Validator('33011901514')).toBeTruthy()
    expect(isPeselNotUnder18Validator('69101711057')).toBeTruthy()
    expect(isPeselNotUnder18Validator('69101711052')).toBeTruthy()
    expect(isPeselNotUnder18Validator('05281917360')).toBeFalsy()
    expect(isPeselNotUnder18Validator('03280305315')).toBeFalsy()
  })

  it('should isPeselNotUnder18Validator() pass when value is masked', () => {
    expect(isPeselNotUnder18Validator('***********')).toBeTruthy()
    expect(isPeselNotUnder18Validator('**********')).toBeFalsy()
    expect(isPeselNotUnder18Validator('************')).toBeFalsy()
  })

  it('should isDateNotUnder18Validator() validate value correctly', () => {
    expect(isDateNotUnder18Validator('2015-01-01')).toBeFalsy()
    expect(isDateNotUnder18Validator('2012-10-10')).toBeFalsy()
    expect(isDateNotUnder18Validator('1986-01-01')).toBeTruthy()
    expect(isDateNotUnder18Validator('1950-10-10')).toBeTruthy()
  })

  it('should getCompleteIban() return complete IBAN number', () => {
    expect(ibanHelper.getCompleteIban('LV72NDEA0000084513319', 'LV')).toEqual('LV72NDEA0000084513319')
    expect(ibanHelper.getCompleteIban('72NDEA0000084513319', 'LV')).toEqual('LV72NDEA0000084513319')
    expect(ibanHelper.getCompleteIban('LV72NDEA0000084513319', 'PL')).toEqual('LV72NDEA0000084513319')
    expect(ibanHelper.getCompleteIban('LV72NDEA0000084513319', 'PL')).toEqual('LV72NDEA0000084513319')
  })

  it('should isExpiryDateValidator() validate id_card_expiry_date correctly', () => {
    expect(isExpiryDateValidator('2001-01-01')).toBeFalsy()
    expect(isExpiryDateValidator('2301-01-01')).toBeFalsy()
    expect(isExpiryDateValidator('2017-04-01')).toBeTruthy()
    expect(isExpiryDateValidator('2021-01-01')).toBeTruthy()
  })

  it('should isReleaseDateValidator() validate id_card_release_date correctly', () => {
    expect(isReleaseDateValidator('3017-04-01', undefined)).toBeFalsy()
    expect(isReleaseDateValidator('1017-04-01', undefined)).toBeFalsy()
    expect(isReleaseDateValidator('1917-04-01', '2017-04-01')).toBeFalsy()
    expect(isReleaseDateValidator('2017-04-01', '2017-04-01')).toBeFalsy()
    expect(isReleaseDateValidator('2017-04-01', '2017-03-01')).toBeFalsy()
    expect(isReleaseDateValidator('2017-04-01', undefined)).toBeTruthy()
    expect(isReleaseDateValidator('2017-04-01', '2017-05-01')).toBeTruthy()
  })

  it('should isNotSmallerValidator() validate value correctly', () => {
    expect(isNotSmallerValidator('100.00 PLN', '10')).toBeTruthy()
    expect(isNotSmallerValidator('154', '1')).toBeTruthy()
    expect(isNotSmallerValidator('1', '10')).toBeFalsy()
    expect(isNotSmallerValidator('5 CHF', '10')).toBeFalsy()
    expect(isNotSmallerValidator('100.00 EUR', '10')).toBeTruthy()
    expect(isNotSmallerValidator('154', '1')).toBeTruthy()
    expect(isNotSmallerValidator('1', '5')).toBeFalsy()
    expect(isNotSmallerValidator('3 GBP', '5')).toBeFalsy()
  })

  it('should isAllKeysValidator() validate value correctly', () => {
    const expectedKeys = ['a', 'b']
    const validObject = {a: '1', b: '2'}
    const invalidObject = {a: '1'}
    expect(isAllKeysValidator(validObject, expectedKeys)).toBeTruthy()
    expect(isAllKeysValidator(invalidObject, expectedKeys)).toBeFalsy()
  })

  it('should isBirthDateValidator() validate value correctly', () => {
    expect(isBirthDateValidator('1000-01-01')).toBeFalsy()
    expect(isBirthDateValidator('3016-05-23')).toBeFalsy()
    expect(isBirthDateValidator('0000-12-21')).toBeFalsy()
    expect(isBirthDateValidator('9999-03-15')).toBeFalsy()
    expect(isBirthDateValidator('2017-04-01')).toBeTruthy()
    expect(isBirthDateValidator('1867-04-01')).toBeTruthy()
    expect(isBirthDateValidator('2000-03-15')).toBeTruthy()
  })

  it('should isAfterTodayValidator() validate value correctly', () => {
    expect(isAfterTodayValidator('3016-05-23')).toBeTruthy()
    expect(isAfterTodayValidator('9999-03-15')).toBeTruthy()
    expect(isAfterTodayValidator('2017-04-02')).toBeTruthy()
    expect(isAfterTodayValidator('1000-01-01')).toBeFalsy()
    expect(isAfterTodayValidator('0000-12-21')).toBeFalsy()
    expect(isAfterTodayValidator('2017-04-01')).toBeFalsy()
    expect(isAfterTodayValidator('1867-04-01')).toBeFalsy()
    expect(isAfterTodayValidator('2000-03-15')).toBeFalsy()
  })

  it('should isBeforeTodayValidator() validate value correctly', () => {
    expect(isBeforeTodayValidator('3016-05-23')).toBeFalsy()
    expect(isBeforeTodayValidator('9999-03-15')).toBeFalsy()
    expect(isBeforeTodayValidator('2017-04-01')).toBeFalsy()
    expect(isBeforeTodayValidator('2017-03-31')).toBeTruthy()
    expect(isBeforeTodayValidator('1000-01-01')).toBeTruthy()
    expect(isBeforeTodayValidator('0000-12-21')).toBeTruthy()
    expect(isBeforeTodayValidator('1867-04-01')).toBeTruthy()
    expect(isBeforeTodayValidator('2000-03-15')).toBeTruthy()
  })

  ;
  [
    { country: 'AU', min: 12, max: 16 },
    { country: 'CA', min: 9, max: 15 },
    { country: 'CN', min: 1, max: 22 },
    { country: 'JP', min: 8, max: 14 },
    { country: 'KR', min: 11, max: 16 },
    { country: 'NZ', min: 15, max: 16 },
    { country: 'SG', min: 1, max: 14 },
    { country: 'TW', min: 1, max: 22 },
    { country: 'US', min: 10, max: 30 },
    { country: 'OTHER', min: 1, max: 22 },
    { country: undefined, min: 1, max: 22 },
  ].forEach(({country, min, max}) => describe(`isLanNumberValidator() validation behaviour for ${country} country code`, () => {
    it('should return true for valid lan number', () => {
      expect(isLanNumberValidator(lanWithLength(min), country)).toBeTruthy()
      expect(isLanNumberValidator(lanWithLength(max), country)).toBeTruthy()
      expect(isLanNumberValidator('A'.repeat(min), country)).toBeTruthy()
      expect(isLanNumberValidator('A'.repeat(max), country)).toBeTruthy()
      expect(isLanNumberValidator('a'.repeat(min), country)).toBeTruthy()
      expect(isLanNumberValidator('a'.repeat(max), country)).toBeTruthy()
    })

    it.only('should return false when lan number is empty', () => {
      expect(isLanNumberValidator('', country)).toBeFalsy()
      expect(isLanNumberValidator(' ', country)).toBeFalsy()
    })

    it(`should return false when lan number shorter than ${min} characters`, () => {
      expect(isLanNumberValidator(lanWithLength(min - 1), country)).toBeFalsy()
    })

    it(`should return false when lan number is longer than ${max} characters`, () => {
      expect(isLanNumberValidator(lanWithLength(max + 1), country)).toBeFalsy()
    })

    it('should return error when lan number contains characters other than letters and numbers', () => {
      const validPart = lanWithLength(max - 1)
      expect(isLanNumberValidator(`${validPart};`, country)).toBeFalsy()
      expect(isLanNumberValidator(`${validPart}Ą`, country)).toBeFalsy()
      expect(isLanNumberValidator(`${validPart}$`, country)).toBeFalsy()
    })
  }))

  it('should isSwiftValidator() validate value correctly', () => {
    expect(isSwiftValidator('TEST0123')).toBeTruthy()
    expect(isSwiftValidator('TEST0123456')).toBeTruthy()
    expect(isSwiftValidator('test01234')).toBeTruthy()
    expect(isSwiftValidator('A'.repeat(7))).toBeFalsy()
    expect(isSwiftValidator('A'.repeat(12))).toBeFalsy()
    expect(isSwiftValidator('TEST0123;')).toBeFalsy()
    expect(isSwiftValidator('TEST0123.')).toBeFalsy()
    expect(isSwiftValidator('TEST0123Ą')).toBeFalsy()
  })

  it('should isSwiftCountryValidator() validate value correctly', () => {
    expect(isSwiftCountryValidator('____PL____', 'PL')).toBeTruthy()
    expect(isSwiftCountryValidator('____PL____', 'DE')).toBeFalsy()
    expect(isSwiftCountryValidator('____PL____', undefined)).toBeTruthy()
    expect(isSwiftCountryValidator('____CN____', 'CN')).toBeTruthy()
    expect(isSwiftCountryValidator('____HK____', 'CN')).toBeTruthy()
    expect(isSwiftCountryValidator('____MO____', 'CN')).toBeTruthy()
    expect(isSwiftCountryValidator('____CN____', 'PL')).toBeFalsy()
    expect(isSwiftCountryValidator('____HK____', 'PL')).toBeFalsy()
    expect(isSwiftCountryValidator('____MO____', 'PL')).toBeFalsy()
  })

  it('should isPropValidator() validate value correctly', () => {
    expect(isPropValidator({valid: undefined})).toBeFalsy()
    expect(isPropValidator({valid: false, testing: 'test'})).toBeFalsy()
    expect(isPropValidator({valid: true, test: 'test'})).toBeTruthy()
  })

  it('should isIdNumberValidator() validate value correctly', () => {
    expect(isIdNumberValidator('APP726108')).toBeTruthy()
    expect(isIdNumberValidator('APB880334')).toBeTruthy()
    expect(isIdNumberValidator('AAM564559')).toBeFalsy()
    expect(isIdNumberValidator('AZX593690')).toBeFalsy()
    expect(isIdNumberValidator('AZX5936')).toBeFalsy()
    expect(isIdNumberValidator('*********')).toBeFalsy()
    expect(isIdNumberValidator('')).toBeFalsy()
  })

  it('should isPassportValidator() validate value correctly', () => {
    expect(isPassportValidator('IO0009382')).toBeTruthy()
    expect(isPassportValidator('AR6089406')).toBeTruthy()
    expect(isPassportValidator('123456789')).toBeFalsy()
    expect(isPassportValidator('987654321')).toBeFalsy()
    expect(isPassportValidator('AZX5936')).toBeFalsy()
    expect(isPassportValidator('*********')).toBeFalsy()
    expect(isPassportValidator('')).toBeFalsy()
  })
})
