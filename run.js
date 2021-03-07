for (let i = 1; i <= 10; i += 1) {
  console.log(i);
}

for (let i = 1; i <=100; i += 1) {
  console.log(i * 2);
  if (i === 100) {
    console.log('Done!');
  }
}

let char = '';
for (let i = 1; i <=10; i += 1) {
  char += '*';
  let dash = '';
  for (let j = 1; j <= 10 - char.length; j += 1) {
    dash += '-';
  }
  console.log(char + dash);
}
