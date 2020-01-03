const plus100years = (): number => new Date().getFullYear() + 100
const minus100years = (): number => new Date().getFullYear() - 100

export const idCardHelper = {
  validateExpiryDate: (date) => (
    new Date() <= new Date(date)
    && new Date(date).getFullYear() < plus100years()
  ),
  validateReleaseDate: (date, idCardExpiryDate) => (
    new Date(date) <= new Date()
    && new Date(date).getFullYear() > minus100years()
    && (idCardExpiryDate ? new Date(date) < new Date(idCardExpiryDate) : true)
  ),
}
