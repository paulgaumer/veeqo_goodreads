import numeral from 'numeral';

/**
 * Format numbers to be more readable
 * @param number - number
 */
export const formatNumber = (number: number) => {
  return numeral(number).format('0,0');
};
