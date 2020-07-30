/** @module Pesel Validators */

import { peselHelper } from '../helpers/pesel-helper'

export const isPeselNotUnder18Validator = (value: string) => peselHelper.peselNotUnder18(value)
/**
 * Checks if person with given pesel is above 18 years
 * @param {string} value - value to check.
 * @returns {boolean}
 */

export const isPeselValidator = (value: string): boolean => peselHelper.validatePesel(value)
/**
 * Checks if value is valid pesel number. Also accepts *********** as anonymized pesel
 * @param {string} value - value to check.
 * @returns {boolean}
 */
