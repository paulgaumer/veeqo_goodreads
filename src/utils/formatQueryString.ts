/**
 * Replace spaces by '+' sign
 * @param string - string
 */

const formatQueryString = (string: string) => {
  return string.replace(' ', '+');
};

export default formatQueryString;
