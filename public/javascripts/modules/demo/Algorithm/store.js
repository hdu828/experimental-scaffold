const randomNumArrF = () => {
  let randomArr = []
  for (let i=0; i<10; i++) {
    randomArr.push(Math.random())
  }
  return randomArr
}

module.exports = {
  randomNumArrF,
}
