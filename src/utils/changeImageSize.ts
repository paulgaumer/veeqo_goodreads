const changeImageSize = (src: string, size: string = '300') => {
  return src.replace(/_SX\d*_/g, `_SX${size}_`);
};

export default changeImageSize;
