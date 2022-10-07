const chars = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ],
  ['@', '$', '!', '#', '%', '^', '&', '*'],
];

const form = document.querySelector('form');
const passText = document.querySelector('h1');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let pass = '';
  let length = parseInt(form.length.value);

  if (!length) {
    alert('enter value');
    return;
  }

  const choices = [
    form.numbers.checked,
    form.letters.checked,
    form.symbols.checked,
  ];

  const charsForPass = chars.filter((charsArray, i) => {
    if (choices[i]) {
      return charsArray;
    }
  });

  charsForPass.forEach((charsArray) => {
    const random = Math.floor(Math.random() * charsArray.length);
    pass += charsArray[random];
    length--;
  });

  let finalChars = [];

  for (let i = 0; i < charsForPass.length; i++) {
    finalChars.push(...charsForPass[i]);
  }

  if (finalChars.length == 0) {
    finalChars = chars[0];
  }

  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * finalChars.length);
    pass += finalChars[random];
  }

  passText.textContent = pass
    .split('')
    .sort((a, b) => 0.5 - Math.random())
    .join('');
});
