/** @module Date Validators */

import moment from 'moment'
import { idCardHelper } from '../helpers/id-card-helper'

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
