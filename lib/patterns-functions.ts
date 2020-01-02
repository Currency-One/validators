export const accountNumberPattern = (value: string): boolean => {
  const pattern = '^[a-zA-Z0-9\\s]*$'
  return !!value.match(pattern)
}

export const accountTypeOtherPattern = (value: string): boolean => {
  const pattern = '^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ. ]*$'
  return !!value.match(pattern)
}

export const alphaNumericPattern = (value: string): boolean => {
  const pattern = '^[a-zA-Z0-9]*$'
  return !!value.match(pattern)
}

export const cityPattern = (value: string): boolean => {
  const pattern = '^([a-zA-Z\u0080-\u024F]+(?:. |-| |\'))*[a-zA-Z\u0080-\u024F]*$'
  return !!value.match(pattern)
}

export const genericTextPattern = (value: string): boolean => {
  const pattern = '^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\\s\\,\\.\\-\\+\\(\\)\\!\\?\\:\\@\\n]*$'
  return !!value.match(pattern)
}

export const lastNamePattern = (value: string): boolean => {
  const pattern = '^[a-zA-Z\\u00C0-\\u017F\\-\\s\\\']*$'
  return !!value.match(pattern)
}

export const namePattern = (value: string): boolean => {
  const pattern = '^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]*$'
  return !!value.match(pattern)
}

export const nipPattern = (value: string): boolean => {
  const pattern = '^[a-zA-Z0-9\\s\\-]*$'
  return !!value.match(pattern)
}

export const numericPattern = (value: string): boolean => {
  const pattern = '^[0-9]*$'
  return !!value.match(pattern)
}

export const passwordPattern = (value: string): boolean => {
  const pattern =
    '^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ' +
    '\\s\\-\\+\\_\\\\!\\@\\#\\$\\%\\^&\\*\\|\\"\\\'\\;\\:\\,\\.\\?\\(\\)\\[\\]\\{\\}]*$'
  return !!value.match(pattern)
}

export const bankAccountNamePattern = (value: string): boolean => {
  const pattern =
    '^[0-9a-zA-Z\\u00C0-\\u017F\\xad\\xa0\\u201c\\u201d\\u201e\u201f\\u2013' +
    '\\_\\;\\\'\\@\\-\\s\\",.\\/\\-\\+\\&\\(\\)]*$'
  return !!value.match(pattern)
}

export const charsCompanyPattern = (value: string): boolean => {
  const pattern =
    '^[a-zA-Z0-9\\u00C0-\\u017F\\xad\\xa0\\u201c\\u201d\\u201e\u201f\\u2013' +
    '\\_\\;\\@\\-\\s\\.\\,\\&\\`\\\'\\:\\(\\)\\!\\*\\"\\/\\\\\\+]*$'
  return !!value.match(pattern)
}

export const postalCodePattern = (value: string): boolean => {
  const pattern = '^[a-zA-Z0-9 \\-]*$'
  return !!value.match(pattern)
}

export const streetPattern = (value: string): boolean => {
  const pattern = '^[0-9a-zA-Z\\u00C0-\\u017F\\-\\s\\.,\\/]*$'
  return !!value.match(pattern)
}

export const addressPattern = (value: string): boolean => {
  const pattern = '^[0-9a-zA-Z\\u00C0-\\u017F\\-\\s\\.,\\/]*$'
  return !!value.match(pattern)
}

export const companyNamePattern = (value: string): boolean => {
  const pattern = '^[a-zA-Z0-9\\u00C0-\\u017F\\xad\\xa0\\u201c\\u201d\\u201e\u201f\\u2013' +
    '\\_\\;\\@\\-\\s\\.\\,\\&\\`\\\'\\:\\(\\)\\!\\*\\"\\\/\\\\\\+]*$'
  return !!value.match(pattern)
}
