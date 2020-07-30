import { isMobilePhoneValidator, isPhoneValidator } from '../lib/phone-validators'

describe('Phone Number Validators', () => {
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
})
