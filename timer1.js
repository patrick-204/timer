const argument = process.argv.slice(2);

for (let arg of argument) {
  if (argument.length === 0) {
    break;
  }

  if (arg >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(arg) * 1000);
  }
}
