import moment from 'moment'

const plus100years = () => moment().add(100, 'years')
const minus100years = () => moment().subtract(100, 'years')

export const idCardHelper = {
  validateExpiryDate: (date: string): boolean => (
    moment().isSameOrBefore(date, 'day')
    && moment(date).isBefore(plus100years(), 'day')
  ),
  validateReleaseDate: (date: string, idCardExpiryDate: string): boolean => {
    const momentDate = moment(date)
    return momentDate.isSameOrBefore(moment(), 'day')
      && momentDate.isAfter(minus100years(), 'day')
      && (idCardExpiryDate ? momentDate.isBefore(idCardExpiryDate, 'day') : true)
  },
}
