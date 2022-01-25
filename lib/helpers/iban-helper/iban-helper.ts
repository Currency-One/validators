export const ibanHelper = {
  getCurrentCountryCode: (iban: string): string => (
    iban && iban.substr(0, 2).replace(/\d/g, '')
  ),
  sanitize: (iban) => iban ? iban.replace(/\s/g, '') : null,
  checkIbanLength: (accountNumber: string, countryCode: string) => {
    const sanitizedNumber = accountNumber.replace(/ /g, '')
    const isPrefix = sanitizedNumber.substr(0, 2).match(/[A-Z]/i)
    return (countryCode === 'PL' && isPrefix && sanitizedNumber.length === 28)
      || (countryCode === 'PL' && !isPrefix && sanitizedNumber.length === 26)
      || (countryCode !== 'PL' && sanitizedNumber.length > 12)
  },
  checkIban: (iban, countryCode): boolean => {
    iban = iban.toUpperCase().replace(/ /g, '')
    if (iban.length < 4) {
      return false
    }

    // If country code is given, country code in iban should be the same as the given one
    // Or if there is no country code in iban, we add the given one
    if (countryCode) {
      const currentCountryCode = ibanHelper.getCurrentCountryCode(iban)
      if (currentCountryCode) {
        if (currentCountryCode !== countryCode) {
          return false
        }
      } else {
        iban = `${countryCode}${iban}`
      }
    }

    iban = iban.substr(4) + iban.substr(0, 4)
    let num = ''
    for (const i in iban) {
      if (iban.hasOwnProperty(i)) {
        const c = iban[i]
        if (c >= '0' && c <= '9') {
          num += c
        } else if (c >= 'A' && c <= 'Z') {
          num += `${c.charCodeAt(0) - 55}`
        } else {
          return false
        }
      }
    }
    return ibanHelper.iso7064Mod97_10(num) === 1
  },
  iso7064Mod97_10: (iban) => {
    let remainder = iban
    let block
    while (remainder.length > 2) {
      block = remainder.slice(0, 9)
      remainder = parseInt(block, 10) % 97 + remainder.slice(block.length)
    }
    return parseInt(remainder, 10) % 97
  },
  getCompleteIban: (iban: string, countryCode: string): string => {
    if (countryCode && iban) {
      const currentCountryCode = ibanHelper.getCurrentCountryCode(iban)
      if (!currentCountryCode) {
        iban = `${countryCode}${iban}`
      }
    }
    return ibanHelper.sanitize(iban)
  },
}
