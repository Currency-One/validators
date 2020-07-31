import * as MockDate from 'mockdate'
import {
  isAfterTodayValidator,
  isBeforeTodayValidator, isBirthDateValidator,
  isDateNotUnder18Validator,
  isDateValidator,
  isExpiryDateValidator,
  isReleaseDateValidator,
} from '../lib/date-validators'

describe('Date Validators', () => {
  beforeEach(() => {
    MockDate.set('2017-04-01T00:00:00.000Z')
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

  it('should isDateNotUnder18Validator() validate value correctly', () => {
    expect(isDateNotUnder18Validator('2015-01-01')).toBeFalsy()
    expect(isDateNotUnder18Validator('2012-10-10')).toBeFalsy()
    expect(isDateNotUnder18Validator('1986-01-01')).toBeTruthy()
    expect(isDateNotUnder18Validator('1950-10-10')).toBeTruthy()
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
    expect(isBeforeTodayValidator('2017-04-01T00:00:00.000Z')).toBeFalsy()
    expect(isBeforeTodayValidator('2017-03-31')).toBeTruthy()
    expect(isBeforeTodayValidator('1000-01-01')).toBeTruthy()
    expect(isBeforeTodayValidator('0000-12-21')).toBeTruthy()
    expect(isBeforeTodayValidator('1867-04-01')).toBeTruthy()
    expect(isBeforeTodayValidator('2000-03-15')).toBeTruthy()
  })
})
