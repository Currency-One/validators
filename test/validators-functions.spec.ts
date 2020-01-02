import {
  isEmail,
  isLatin,
  isNotEmptyUnless,
  isNotHigherOrEqual,
  isPostalCode,
  isSelected,
  isValidBankTitle,
  isValidPassword,
  isValue,
  isNotSmallerOrEqual,
  isSameAs,
  isOtherThan,
  isNip,
  isPhone,
  isMobilePhone,
  isIban,
  isValidDate,
  isMinLength,
  isPesel,
  isPeselNotUnder18,
  isDateNotUnder18, isExpiryDateValid, isReleaseDateValid, isNotSmaller, isAllKeys, isBirthDateValid, isLanNumber,
  isSwift, isSwiftCountry
} from '../lib'
import { ibanValidator } from '../lib/helpers/iban-validator'

describe('Validators', () => {
  beforeEach(() => {
    const RealDate = Date

    function mockDate (isoDate) {
      // @ts-ignore
      global.Date = class extends RealDate {
        constructor () {
          super()
          return new RealDate(isoDate)
        }
      }
    }
    mockDate('2017-04-01T12:00:00.001Z')
  })

  it('should isValue() find empty values correctly', () => {
    expect(isValue('asd')).toBeTruthy()
    expect(isValue([])).toBeTruthy()
    expect(isValue({})).toBeTruthy()
    expect(isValue('')).toBeFalsy()
    expect(isValue(undefined)).toBeFalsy()
  })

  it('should isNotEmptyUnless() find empty value correctly', () => {
    expect(isNotEmptyUnless('2010-10-12', false)).toBeTruthy()
    expect(isNotEmptyUnless('', false)).toBeFalsy()
    expect(isNotEmptyUnless('2010-10-12', true)).toBeTruthy()
    expect(isNotEmptyUnless('', true)).toBeTruthy()
  })

  it('should isLatin() find not latin values correctly', () => {
    expect(isLatin('asd')).toBeTruthy()
    expect(isLatin('Привіт')).toBeFalsy()
  })

  it('should isSelected() validate element correctly', () => {
    expect(isSelected('1')).toBeTruthy()
    expect(isSelected('')).toBeFalsy()
    expect(isSelected(undefined)).toBeFalsy()
    expect(isSelected(null)).toBeFalsy()
    expect(isSelected(false)).toBeTruthy()
    expect(isSelected('?')).toBeFalsy()
    expect(isSelected('? string: ?')).toBeFalsy()
    expect(isSelected('? boolean: ?')).toBeFalsy()
    expect(isSelected('? undefined:undefined ?')).toBeFalsy()
  })

  it('should isValidBankTitle() validate value correctly', () => {
    expect(isValidBankTitle('aAa')).toBeTruthy()
    expect(isValidBankTitle('aa22')).toBeTruthy()
    expect(isValidBankTitle('2222')).toBeTruthy()
    expect(isValidBankTitle('22AA')).toBeTruthy()
    expect(isValidBankTitle('.,/()- ')).toBeTruthy()
    expect(isValidBankTitle('$%&.,/()- !@#')).toBeFalsy()
    expect(isValidBankTitle('!@#$%^&*()_&*%$@#')).toBeFalsy()
    expect(isValidBankTitle('ęóąśłżźćń')).toBeTruthy()
    expect(isValidBankTitle('Γεώργιος Αποστολίδης')).toBeFalsy()
  })

  it('should isPostalCode() validate postal code correctly', () => {
    expect(isPostalCode('60-600', 'PL')).toBeTruthy()
    expect(isPostalCode('60600', 'PL')).toBeTruthy()
    expect(isPostalCode('606001', 'PL')).toBeFalsy()
    expect(isPostalCode('124 56', 'PL')).toBeFalsy()
    expect(isPostalCode('12456', 'PL')).toBeTruthy()
    expect(isPostalCode('12-456', 'PL')).toBeTruthy()
    expect(isPostalCode('125644', 'PL')).toBeFalsy()
    expect(isPostalCode('aaaaa', 'PL')).toBeFalsy()
    expect(isPostalCode('124 56')).toBeTruthy()
    expect(isPostalCode('12456')).toBeTruthy()
    expect(isPostalCode('12-456')).toBeTruthy()
    expect(isPostalCode('125644')).toBeTruthy()
    expect(isPostalCode('aaaaa')).toBeTruthy()
    expect(isPostalCode('00-000', 'PL')).toBeFalsy()
    expect(isPostalCode('00000', 'PL')).toBeFalsy()
    expect(isPostalCode('123456', 'CN')).toBeTruthy()
    expect(isPostalCode('1', 'CN')).toBeTruthy()
    expect(isPostalCode('01-123', 'CN')).toBeFalsy()
    expect(isPostalCode('A12345', 'CN')).toBeFalsy()
    expect(isPostalCode('1234567', 'CN')).toBeFalsy()
  })

  it('should isValidPassword() validate password correctly', () => {
    expect(isValidPassword('asdfghjk')).toBeTruthy()
    expect(isValidPassword('asdfghj')).toBeFalsy()
    expect(isValidPassword('')).toBeFalsy()
  })

  it('should isNotHigherOrEqual() validate number correctly', () => {
    expect(isNotHigherOrEqual('10', '11')).toBeTruthy()
    expect(isNotHigherOrEqual('10', '10')).toBeTruthy()
    expect(isNotHigherOrEqual('10.00', '10.11')).toBeTruthy()
    expect(isNotHigherOrEqual('10', '9')).toBeFalsy()
    expect(isNotHigherOrEqual('10.9', '10.1')).toBeFalsy()
  })

  it('should isEmail() validate email correctly', () => {
    expect(isEmail('test@email.com')).toBeTruthy()
    expect(isEmail('test@email.pl')).toBeTruthy()
    expect(isEmail('test@email.info')).toBeTruthy()
    expect(isEmail('test+1@email.com')).toBeTruthy()
    expect(isEmail('tESt+1@email.com')).toBeTruthy()
    expect(isEmail('email@111.222.333.44444')).toBeTruthy()
    expect(isEmail('email@')).toBeFalsy()
    expect(isEmail('@email.com')).toBeFalsy()
    expect(isEmail('ania.asd@.gmail.com')).toBeFalsy()
    expect(isEmail('test,@email.pl')).toBeFalsy()
    expect(isEmail('testemail.pl')).toBeFalsy()
    expect(isEmail('aaa@aaa')).toBeFalsy()
    expect(isEmail('plainaddress')).toBeFalsy()
    expect(isEmail('email.domain.com')).toBeFalsy()
    expect(isEmail('#@%^%#$@#$@#.com')).toBeFalsy()
    expect(isEmail('email@domain.com (JoeSmith)')).toBeFalsy()
    expect(isEmail('email@domain@domain.com')).toBeFalsy()
    expect(isEmail('あいうえお@domain.com')).toBeFalsy()
    expect(isEmail('email@-domain.com')).toBeFalsy()
    expect(isEmail('email@domain..com')).toBeFalsy()
    expect(isEmail('a@urząd.mf.gov.pl')).toBeFalsy()
    expect(isEmail('.email@domain.com')).toBeFalsy()
    expect(isEmail('email.@domain.com')).toBeFalsy()
    expect(isEmail('email..email@domain.com')).toBeFalsy()
  })

  it('should isNotSmallerOrEqual() validate value correctly', () => {
    expect(isNotSmallerOrEqual('10', '9')).toBeTruthy()
    expect(isNotSmallerOrEqual('10.5', '10.4')).toBeTruthy()
    expect(isNotSmallerOrEqual('10', '11')).toBeFalsy()
    expect(isNotSmallerOrEqual('10', '10')).toBeFalsy()
    expect(isNotSmallerOrEqual('10.5', '10.6')).toBeFalsy()
    expect(isNotSmallerOrEqual('10.5', '10.5')).toBeFalsy()
  })

  it('should isSameAs() validate value correctly', () => {
    expect(isSameAs('10', '10')).toBeTruthy()
    expect(isSameAs('', '')).toBeTruthy()
    expect(isSameAs('11', '10')).toBeFalsy()
    expect(isSameAs('', undefined)).toBeFalsy()
  })

  it('should isOtherThan() validate value correctly', () => {
    expect(isOtherThan('10', '10')).toBeFalsy()
    expect(isOtherThan('', '')).toBeFalsy()
    expect(isOtherThan('11', '10')).toBeTruthy()
    expect(isOtherThan('', undefined)).toBeTruthy()
  })

  it('should isNip() validate value correctly', () => {
    expect(isNip('6677059645')).toBeTruthy()
    expect(isNip('1696690974')).toBeTruthy()
    expect(isNip('527-25-25-995')).toBeTruthy()
    expect(isNip('PL298-42-58-365')).toBeTruthy()
    expect(isNip('12345671')).toBeFalsy()
    expect(isNip('')).toBeFalsy()
    expect(isNip('void')).toBeFalsy()
  })

  it('should isPhone() validate value correctly', () => {
    expect(isPhone('500500500', 'PL')).toBeTruthy()
    expect(isPhone('221101010', 'PL')).toBeTruthy()
    expect(isPhone('12345', 'PL')).toBeFalsy()
  })

  it('should isMobilePhone() validate value correctly', () => {
    expect(isMobilePhone('500500500', 'PL')).toBeTruthy()
    expect(isMobilePhone('60000000', 'DK')).toBeTruthy()
    expect(isMobilePhone('221101010', 'PL')).toBeFalsy()
  })

  it('should isIban() validate value correctly', () => {
    expect(isIban('CZ 52 2554 3385 1391 1493 6948')).toBeTruthy()
    expect(isIban('CZ5225543385139114936948')).toBeTruthy()
    expect(isIban('005225543385139114936948')).toBeFalsy()
    expect(isIban('asdasdsad')).toBeFalsy()
    expect(isIban('')).toBeFalsy()
    expect(isIban('void')).toBeFalsy()
    expect(isIban('LV72NDEA0000084513319')).toBeTruthy()
    expect(isIban('LV72NDEA0000084513319', 'LV')).toBeTruthy()
    expect(isIban('72NDEA0000084513319', 'LV')).toBeTruthy()
    expect(isIban('LV72NDEA0000084513319', 'PL')).toBeFalsy()
  })

  it('should isValidDate() validate value correctly', () => {
    expect(isValidDate('2015-05-01')).toBeTruthy()
    expect(isValidDate('1920-11-01')).toBeTruthy()
    expect(isValidDate('1966-06-12')).toBeTruthy()
    expect(isValidDate('2012-02-29')).toBeTruthy()
    expect(isValidDate('1970-06-6')).toBeFalsy()
    expect(isValidDate('1970-6-6')).toBeFalsy()
    expect(isValidDate('70-06-06')).toBeFalsy()
    expect(isValidDate('2020-06-31')).toBeFalsy()
    expect(isValidDate('2013-02-29')).toBeFalsy()
    expect(isValidDate('2020-20-20')).toBeFalsy()
  })

  it('should isMinLength() validate correctly', () => {
    expect(isMinLength('void', 7)).toBeFalsy()
    expect(isMinLength('asdasasd', 22)).toBeFalsy()
    expect(isMinLength('asdss', 2)).toBeTruthy()
    expect(isMinLength('ash5hh54hdss', 7)).toBeTruthy()
  })

  it('should isPesel() validate value correctly', () => {
    expect(isPesel('87103009246')).toBeTruthy()
    expect(isPesel('87103009245')).toBeFalsy()
    expect(isPesel('92112716180')).toBeTruthy()
    expect(isPesel('33011901514')).toBeTruthy()
    expect(isPesel('69101711057')).toBeTruthy()
    expect(isPesel('69101711052')).toBeFalsy()
  })

  it('should isPesel() pass when value is masked', () => {
    expect(isPesel('***********')).toBeTruthy()
    expect(isPesel('**********')).toBeFalsy()
    expect(isPesel('************')).toBeFalsy()
  })

  it('should isPeselNotUnder18() validate value correctly', () => {
    expect(isPeselNotUnder18('87103009246')).toBeTruthy()
    expect(isPeselNotUnder18('87103009245')).toBeTruthy()
    expect(isPeselNotUnder18('92112716180')).toBeTruthy()
    expect(isPeselNotUnder18('33011901514')).toBeTruthy()
    expect(isPeselNotUnder18('69101711057')).toBeTruthy()
    expect(isPeselNotUnder18('69101711052')).toBeTruthy()
    expect(isPeselNotUnder18('05281917360')).toBeFalsy()
    expect(isPeselNotUnder18('03280305315')).toBeFalsy()
  })

  it('should isPeselNotUnder18() pass when value is masked', () => {
    expect(isPeselNotUnder18('***********')).toBeTruthy()
    expect(isPeselNotUnder18('**********')).toBeFalsy()
    expect(isPeselNotUnder18('************')).toBeFalsy()
  })

  it('should isDateNotUnder18() validate value correctly', () => {
    expect(isDateNotUnder18('2015-01-01')).toBeFalsy()
    expect(isDateNotUnder18('2012-10-10')).toBeFalsy()
    expect(isDateNotUnder18('1986-01-01')).toBeTruthy()
    expect(isDateNotUnder18('1950-10-10')).toBeTruthy()
  })

  it('should getCompleteIban() return complete IBAN number', () => {
    expect(ibanValidator.getCompleteIban('LV72NDEA0000084513319', 'LV')).toEqual('LV72NDEA0000084513319')
    expect(ibanValidator.getCompleteIban('72NDEA0000084513319', 'LV')).toEqual('LV72NDEA0000084513319')
    expect(ibanValidator.getCompleteIban('LV72NDEA0000084513319', 'PL')).toEqual('LV72NDEA0000084513319')
    expect(ibanValidator.getCompleteIban('LV72NDEA0000084513319', 'PL')).toEqual('LV72NDEA0000084513319')
  })

  it('should isExpiryDateValid() validate id_card_expiry_date correctly', () => {
    expect(isExpiryDateValid('2001-01-01')).toBeFalsy()
    expect(isExpiryDateValid('2301-01-01')).toBeFalsy()
    expect(isExpiryDateValid('2017-04-01')).toBeTruthy()
    expect(isExpiryDateValid('2021-01-01')).toBeTruthy()
  })

  it('should isReleaseDateValid() validate id_card_release_date correctly', () => {
    expect(isReleaseDateValid('3017-04-01', undefined)).toBeFalsy()
    expect(isReleaseDateValid('1017-04-01', undefined)).toBeFalsy()
    expect(isReleaseDateValid('1917-04-01', '2017-04-01')).toBeFalsy()
    expect(isReleaseDateValid('2017-04-01', '2017-04-01')).toBeFalsy()
    expect(isReleaseDateValid('2017-04-01', '2017-03-01')).toBeFalsy()
    expect(isReleaseDateValid('2017-04-01', '2017-05-01')).toBeTruthy()
  })

  it('should isNotSmaller() validate value correctly', () => {
    expect(isNotSmaller('100.00 PLN', '10')).toBeTruthy()
    expect(isNotSmaller('154', '1')).toBeTruthy()
    expect(isNotSmaller('1', '10')).toBeFalsy()
    expect(isNotSmaller('5 CHF', '10')).toBeFalsy()
    expect(isNotSmaller('100.00 EUR', '10')).toBeTruthy()
    expect(isNotSmaller('154', '1')).toBeTruthy()
    expect(isNotSmaller('1', '5')).toBeFalsy()
    expect(isNotSmaller('3 GBP', '5')).toBeFalsy()
  })

  it('should isAllKeys() validate value correctly', () => {
    const expectedKeys = ['a', 'b']
    const validObject = {a: '1', b: '2'}
    const invalidObject = {a: '1'}
    expect(isAllKeys(validObject, expectedKeys)).toBeTruthy()
    expect(isAllKeys(invalidObject, expectedKeys)).toBeFalsy()
  })

  it('should isBirthDateValid() validate value correctly', () => {
    expect(isBirthDateValid('1000-01-01')).toBeFalsy()
    expect(isBirthDateValid('3016-05-23')).toBeFalsy()
    expect(isBirthDateValid('0000-12-21')).toBeFalsy()
    expect(isBirthDateValid('9999-03-15')).toBeFalsy()
    expect(isBirthDateValid('2017-04-01')).toBeTruthy()
    expect(isBirthDateValid('1867-04-01')).toBeTruthy()
    expect(isBirthDateValid('2000-03-15')).toBeTruthy()
  })

  it('should isLanNumber() validate value correctly', () => {
    expect(isLanNumber('TEST12345678341')).toBeTruthy()
    expect(isLanNumber('test12345678341')).toBeTruthy()
    expect(isLanNumber('TEST1234 5678341')).toBeTruthy()
    expect(isLanNumber('1'.repeat(12))).toBeTruthy()
    expect(isLanNumber('1'.repeat(22))).toBeTruthy()
    expect(isLanNumber('1')).toBeTruthy()
    expect(isLanNumber('1'.repeat(23))).toBeFalsy()
    expect(isLanNumber('TEST12345678341;')).toBeFalsy()
    expect(isLanNumber('TEST12345678341Ą')).toBeFalsy()
    expect(isLanNumber('')).toBeFalsy()
    expect(isLanNumber(' ')).toBeFalsy()
    expect(isLanNumber(';')).toBeFalsy()
  })

  it('should isSwift() validate value correctly', () => {
    expect(isSwift('TEST0123')).toBeTruthy()
    expect(isSwift('TEST0123456')).toBeTruthy()
    expect(isSwift('test01234')).toBeTruthy()
    expect(isSwift('A'.repeat(7))).toBeFalsy()
    expect(isSwift('A'.repeat(12))).toBeFalsy()
    expect(isSwift('TEST0123;')).toBeFalsy()
    expect(isSwift('TEST0123.')).toBeFalsy()
    expect(isSwift('TEST0123Ą')).toBeFalsy()
  })

  it('should isSwiftCountry() validate value correctly', () => {
    expect(isSwiftCountry('____PL____', 'PL')).toBeTruthy()
    expect(isSwiftCountry('____PL____', 'DE')).toBeFalsy()
    expect(isSwiftCountry('____PL____', undefined)).toBeTruthy()
    expect(isSwiftCountry('____CN____', 'CN')).toBeTruthy()
    expect(isSwiftCountry('____HK____', 'CN')).toBeTruthy()
    expect(isSwiftCountry('____MO____', 'CN')).toBeTruthy()
    expect(isSwiftCountry('____CN____', 'PL')).toBeFalsy()
    expect(isSwiftCountry('____HK____', 'PL')).toBeFalsy()
    expect(isSwiftCountry('____MO____', 'PL')).toBeFalsy()
  })
})
