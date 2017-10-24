// eslint-disable-next-line linebreak-style
require("babel-register")
require("./src/main")

const foo = () =>
  setTimeout(() => {
    console.log("Hello")
  }, 1000)
