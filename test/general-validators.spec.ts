import {
  isAllKeysValidator,
  isEmailValidator,
  isIbanLengthValidator,
  isIbanValidator,
  isIdNumberValidator,
  isLanNumberValidator,
  isLatinValidator,
  isMaxLengthValidator,
  isMinLengthValidator,
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
  isPostalCodeValidator,
  isPropValidator,
  isSameAsValidator,
  isSelectedValidator,
  isSwiftCountryValidator,
  isSwiftValidator,
  isValidBankTitleValidator,
  isValueValidator,
} from '../lib'
import { ibanHelper } from '../lib/helpers/iban-helper'

function lanWithLength(length: number): string {
  return '1'.repeat(length)
}

describe('Validators', () => {
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
    expect(isLatinValidator('Przelew z walutomatu')).toBeTruthy()
    expect(isLatinValidator('ASdFH KLsd')).toBeTruthy() // Simple Latin
    expect(isLatinValidator('ASdFHKLs dasd123')).toBeTruthy() // Simple Latin
    expect(isLatinValidator('ęóą śłżźć')).toBeTruthy() // Polish Latin
    expect(isLatinValidator('ęóąśł żźć asd123')).toBeTruthy() // Polish Latin
    expect(isLatinValidator('AaÁá ÄäBbČ čĎď')).toBeTruthy() // Czech Latin
    expect(isLatinValidator('AaÁáÄä BbČčĎ ďas d123')).toBeTruthy() // Czech Latin
    expect(isLatinValidator('DdEe ÉéÊêÈèË ëFfGg')).toBeTruthy() // French Latin
    expect(isLatinValidator('DdEeÉ éÊêÈèË ëFfG gasd123')).toBeTruthy() // French Latin
    expect(isLatinValidator('oOöÖ pPqQrRsS ßẞtTuU üÜ')).toBeTruthy() // German Latin
    expect(isLatinValidator('oOöÖpP qQr RsSßẞtTuUüÜ asd123')).toBeTruthy() // German Latin
    expect(isLatinValidator('£!@#$ %^&*() _+{}:"|<>?~ §123456789 0-=[];\'\\`,./')).toBeTruthy() // Special signs
    expect(isLatinValidator('£!@#$ %^&* ()_+{}:" |<>?~§1234 567890 -=[];\'\\`,./asd123')).toBeTruthy() // Special signs
    expect(isLatinValidator('При віт')).toBeFalsy() // Russian
    expect(isLatinValidator('При вітasd 123')).toBeFalsy() // Russian
    expect(isLatinValidator('п рик лад')).toBeFalsy() // Ukrainian
    expect(isLatinValidator('прик ладa sd1 23')).toBeFalsy() // Ukrainian
    expect(isLatinValidator('你 叫什 么名 字')).toBeFalsy() // Chinese
    expect(isLatinValidator('你叫什 么名字 asd12 3')).toBeFalsy() // Chinese
    expect(isLatinValidator('お ねが いし ます')).toBeFalsy() // Japanese
    expect(isLatinValidator('おねがい しま すas d123')).toBeFalsy() // Japanese
    expect(isLatinValidator('يتحدّث بل غة  المؤ تمر الدولي  العاشر ليو نيكو')).toBeFalsy() // Arabic
    expect(isLatinValidator('as d123يتحدّث بلغة  المؤتمر الدولي العاشر ليونيكو')).toBeFalsy() // Arabic
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
    expect(isNotHigherOrEqualValidator('10', '10')).toBeFalsy()
    expect(isNotHigherOrEqualValidator('10.00', '10.11')).toBeTruthy()
    expect(isNotHigherOrEqualValidator('10', '9')).toBeFalsy()
    expect(isNotHigherOrEqualValidator('10.9', '10.1')).toBeFalsy()
  })

  it('should isNotHigherValidator() validate number correctly', () => {
    expect(isNotHigherValidator('10', '11')).toBeTruthy()
    expect(isNotHigherValidator('10', '10')).toBeTruthy()
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

  it('should isIbanLengthValidator() validate length correctly', () => {
    expect(isIbanLengthValidator('PL 51 1030 0006 7121 3369 7996 0532', 'PL')).toBeTruthy()
    expect(isIbanLengthValidator('51103000067121336979960532', 'PL')).toBeTruthy()
    expect(isIbanLengthValidator('51103000067121336979960532', 'CZ')).toBeTruthy()
    expect(isIbanLengthValidator('asdasdsad', 'CZ')).toBeFalsy()
    expect(isIbanLengthValidator('', undefined)).toBeFalsy()
    expect(isIbanLengthValidator('void', null)).toBeFalsy()
    expect(isIbanLengthValidator('LV72NDEA0000084513319', '')).toBeTruthy()
    expect(isIbanLengthValidator('LV72NDEA0000084513319', 'LV')).toBeTruthy()
    expect(isIbanLengthValidator('72NDEA0000084513319', 'LV')).toBeTruthy()
    expect(isIbanLengthValidator('LV72NDEA0000084513319', 'PL')).toBeFalsy()
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

  it('should getCompleteIban() return complete IBAN number', () => {
    expect(ibanHelper.getCompleteIban('LV72NDEA0000084513319', 'LV')).toEqual('LV72NDEA0000084513319')
    expect(ibanHelper.getCompleteIban('72NDEA0000084513319', 'LV')).toEqual('LV72NDEA0000084513319')
    expect(ibanHelper.getCompleteIban('LV72NDEA0000084513319', 'PL')).toEqual('LV72NDEA0000084513319')
    expect(ibanHelper.getCompleteIban('LV72NDEA0000084513319', 'PL')).toEqual('LV72NDEA0000084513319')
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
  ].forEach(({ country, min, max }) =>
    describe(`isLanNumberValidator() validation behaviour for ${country} country code`, () => {
      it('should return true for valid lan number', () => {
        expect(isLanNumberValidator(lanWithLength(min), country)).toBeTruthy()
        expect(isLanNumberValidator(lanWithLength(max), country)).toBeTruthy()
        expect(isLanNumberValidator('A'.repeat(min), country)).toBeTruthy()
        expect(isLanNumberValidator('A'.repeat(max), country)).toBeTruthy()
        expect(isLanNumberValidator('a'.repeat(min), country)).toBeTruthy()
        expect(isLanNumberValidator('a'.repeat(max), country)).toBeTruthy()
      })

      it('should return false when lan number is empty', () => {
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
    }),
  )

  describe('isLanNumberValidator() validation behaviour for CN accounts with prefix', () => {
    const rawNumber = lanWithLength(22)

    it('should allow OSA/NRA/FTN prefix to the account number', async () => {
      expect(isLanNumberValidator(`OSA${rawNumber}`, 'CN')).toBeTruthy()
      expect(isLanNumberValidator(`osa${rawNumber}`, 'CN')).toBeTruthy()
      expect(isLanNumberValidator(`NRA${rawNumber}`, 'CN')).toBeTruthy()
      expect(isLanNumberValidator(`nra${rawNumber}`, 'CN')).toBeTruthy()
      expect(isLanNumberValidator(`FTN${rawNumber}`, 'CN')).toBeTruthy()
      expect(isLanNumberValidator(`ftn${rawNumber}`, 'CN')).toBeTruthy()
    })

    it('should not allow other prefixes', async () => {
      expect(isLanNumberValidator(`ZZZ${rawNumber}`, 'CN')).toBeFalsy()
      expect(isLanNumberValidator(`111${rawNumber}`, 'CN')).toBeFalsy()
    })

    it('should not allow prefixes for other countries', async () => {
      expect(isLanNumberValidator(`OSA${rawNumber}`, 'XX')).toBeFalsy()
      expect(isLanNumberValidator(`NRA${rawNumber}`, 'XX')).toBeFalsy()
      expect(isLanNumberValidator(`FTN${rawNumber}`, 'XX')).toBeFalsy()
    })
  })

  it('should isSwiftValidator() validate value correctly', () => {
    expect(isSwiftValidator('Testzz01')).toBeTruthy()
    expect(isSwiftValidator('Testzz23XXX')).toBeTruthy()
    expect(isSwiftValidator('11111123')).toBeFalsy()
    expect(isSwiftValidator('11111123456')).toBeFalsy()
    expect(isSwiftValidator('A'.repeat(8))).toBeTruthy()
    expect(isSwiftValidator('A'.repeat(11))).toBeTruthy()
    expect(isSwiftValidator('a'.repeat(8))).toBeTruthy()
    expect(isSwiftValidator('a'.repeat(11))).toBeTruthy()
    expect(isSwiftValidator('A'.repeat(7))).toBeFalsy()
    expect(isSwiftValidator('A'.repeat(9))).toBeFalsy()
    expect(isSwiftValidator('A'.repeat(10))).toBeFalsy()
    expect(isSwiftValidator('A'.repeat(12))).toBeFalsy()
    expect(isSwiftValidator('TEST012;')).toBeFalsy()
    expect(isSwiftValidator('TEST012.')).toBeFalsy()
    expect(isSwiftValidator('TEST012Ą')).toBeFalsy()
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
