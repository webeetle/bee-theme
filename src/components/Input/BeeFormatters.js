import numeral from 'numeral';
import 'numeral/locales/it';
numeral.locale('it');

const formatPrice = value => {
  return value === undefined
    ? ''
    : numeral(value).format('0,0.00')
};

const formatOneDecimal = value => {
  return value === undefined
    ? ''
    : numeral(value).format('0,0.0')
};

const unformatPrice = value => {
  return numeral(value).value()
};

const formatPercentage = value => {
  if (value === undefined) {
    return '0'
  }

  if (value > 100) {
    return '100'
  }

  if (value < 0) {
    return '0'
  }

  return value
};

const formatNumber = value => {
  if (value === undefined)
    return '';
  if (isNaN(value))
    return '';
  return parseInt(value);
};

const getNumber = value => {
  if (value === undefined)
    return 0;

  value = value.toString().replace(',', '.');

  if (isNaN(value))
    return 0;

  return parseFloat(value);
};

const formatMonths = value => {
  let valueFormatted = parseInt(value, 10)

  if (value === undefined || isNaN(valueFormatted)) {
    return 0
  }
  return valueFormatted
};

export {
  formatPrice,
  unformatPrice,
  formatPercentage,
  formatMonths,
  formatOneDecimal,
  formatNumber,
  getNumber
};
