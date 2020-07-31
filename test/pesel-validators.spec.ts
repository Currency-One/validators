import * as MockDate from 'mockdate'
import { isPeselNotUnder18Validator, isPeselValidator } from '../lib/pesel-validators'

describe('Pesel Validators', () => {
  beforeEach(() => {
    MockDate.set('2017-04-01T00:00:00.000Z')
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
})
