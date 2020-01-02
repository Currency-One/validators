import valueOfLetter from './value-of-letter'

const plus100years = (): number => new Date().getFullYear() + 100
const minus100years = (): number => new Date().getFullYear() - 100

export const idCardValidator = {
  validateExpiryDate: (date) => {
    // @ts-ignore
    console.log(new Date(date).getFullYear(), plus100years())
    return (
      new Date() <= new Date(date)
      && new Date(date).getFullYear() < plus100years()
    )
  },
  validateReleaseDate: (date, idCardExpiryDate) => (
    new Date(date) <= new Date()
    && new Date(date).getFullYear() > minus100years()
    && (idCardExpiryDate ? new Date(date) < new Date(idCardExpiryDate) : true)
  ),
  validIdNumber: (value): boolean => {
    const idNumberWeights = [7, 3, 1, 9, 7, 3, 1, 7, 3]

    function checkIdNumber(id) {
      let controlSum = 0
      for (let i = 0; i < id.length; i++) {
        controlSum += i < 3 ? valueOfLetter(id[i]) * idNumberWeights[i] : parseInt(id[i], 10) * idNumberWeights[i]
      }
      return controlSum % 10
    }

    function isValid(id) {
      const parsedValue = id.replace(/ /g, '')
      return checkIdNumber(parsedValue) === 0 && parsedValue.length === 9
    }

    return isValid(value)
  }
}
