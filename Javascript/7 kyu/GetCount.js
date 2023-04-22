// Vower Count
// Return the number(count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
// My solution
function getCount(str) {
  const st = str.toLowerCase(); // convert in lowercase
  const vowels = ["a", "e", "i", "o", "u"];
  let countVowel = 0;
  for (let idx = 0; idx < st.length; idx++) {
    if (vowels.includes(st[idx])) {
      countVowel += 1;
    }
  }
  return countVowel;
}