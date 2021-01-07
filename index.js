function add_num(...args) {
  return args.reduce((a, c) => (typeof c === "number" ? a + c : a), 0);
}

console.log(add_num("yash"));
