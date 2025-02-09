const arr = [1, 2, 4, 5, 2, 6, 7, 2, 5, 8, 9, 9, 2]

// function epistrefei enan pinaka me tis theseis
//stis opoies vrisketai enas sugkekrimenos arithmos

const getIndexes = (arr, val) => {
  const indexes = []

  arr.forEach((v, index) => {
      if (v === val) {
        indexes.push(index)
      }
  })

//   arr.forEach(function(v, index) {
//     if (v === val) {
//       indexes.push(index)
//     }
//   })

  return indexes
}

console.log(getIndexes(arr, 2))