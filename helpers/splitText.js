const splitText = (string) => {
  if (typeof string == 'string') {
    return string.split(/\r?\n/);
  }
}

export default splitText;