import * as phoneUtils from 'libphonenumber-js/max'
import metadata from 'libphonenumber-js/metadata.full.json.js'

export interface CountryCodeToRegionCodeMap {
  [key: number]: string[]
}

const libPhoneNumber = {
  ...phoneUtils,
  getCountryCodeMap: (): CountryCodeToRegionCodeMap => metadata.country_calling_codes,
}

export default libPhoneNumber
