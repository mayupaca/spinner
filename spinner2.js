const spinBar = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   ", "\r|   "];

const spinner2 = (spinBar) => {
  let delay = 0;
  for (let i of spinBar) {
    setTimeout(() => {
      process.stdout.write(i);
    }, delay);
    delay += 300;
  }
};
spinner2(spinBar);

// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 100);

// setTimeout(() => {
//   process.stdout.write("\r/   ");
// }, 300);

// setTimeout(() => {
//   process.stdout.write("\r-   ");
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write("\r\\   ");
// }, 700);

// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 900);

// setTimeout(() => {
//   process.stdout.write("\r/   ");
// }, 1200);

// setTimeout(() => {
//   process.stdout.write("\r-   ");
// }, 1500);

// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 1800);