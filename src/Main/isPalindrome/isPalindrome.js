const isPalindrome = possiblePalindrome => {
  const onlyLettersAndNumbers = possiblePalindrome // Takes out punctuation, and anything that's not a letter or number
    .match(/[a-zA-Z0-9]+/g)
    .join('')
    .toLowerCase();

  const max = Math.floor(onlyLettersAndNumbers.length / 2);

  for (let i = 0; i < max; i++) {
    if (
      onlyLettersAndNumbers[i] !==
      onlyLettersAndNumbers[onlyLettersAndNumbers.length - 1 - i]
    ) {
      return false;
    }
  }

  return true;
};

export default isPalindrome;
