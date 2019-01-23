const isPalindrome = possiblePalindrom => {
  const onlyLetters = possiblePalindrom
    .match(/[a-zA-Z0-9]+/g)
    .join('')
    .toLowerCase();

  const max = Math.floor(onlyLetters.length / 2);

  for (let i = 0; i < max; i++) {
    if (onlyLetters[i] !== onlyLetters[onlyLetters.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

export default isPalindrome;
