const numerals = ['Ⅰ', 'Ⅴ', 'Ⅹ', 'Ⅼ', 'Ⅽ', 'Ⅾ', 'Ⅿ']

const reduceBy = (num, value, letter) => {
  if(Math.floor(num/value)){
    console.log('do it!!')
    return {
      arr: Array.from({length: Math.floor(num/value)}, x => letter),
      num: num % value
    }
  }
}

const isObject = obj => obj === Object(obj)

const sortNumerals = arr => arr.sort((a, b) => numerals.indexOf(b) - numerals.indexOf(a))

export const halve = numerals => {
  const arr = []
  const counts = {}
  numerals.forEach(x => counts[x] = (counts[x] || 0) + 1)
  for(const count in counts){
    if(count === 'Ⅿ'){
      arr.push(...intToRomanNumeral(counts[count] * 500))
    }
    if(count === 'Ⅾ'){
      arr.push(...intToRomanNumeral(counts[count] * 250))
    }
    if(count === 'Ⅽ'){
      arr.push(...intToRomanNumeral(counts[count] * 50))
    }
    if(count === 'Ⅼ'){
      arr.push(...intToRomanNumeral(counts[count] * 25))
    }
    if(count === 'Ⅹ'){
      arr.push(...intToRomanNumeral(counts[count] * 5))
    }
    if(count === 'Ⅴ'){
      arr.push(...intToRomanNumeral(counts[count] * 2))
    }
    if(count === 'Ⅰ' && counts[count] !== 1){
      arr.push(...intToRomanNumeral(Math.floor(counts[count] * 0.5)))
    }
  }

  return arr
}

export const intToRomanNumeral = num => {
  const arr = []
  const _1000 = reduceBy(num, 1000, 'Ⅿ')
  if(isObject(_1000)){
    num = _1000.num
    arr.push(..._1000.arr)
  }
  const __500 = reduceBy(num, 500, 'Ⅾ')
  if(isObject(__500)){
    num = __500.num
    arr.push(...__500.arr)
  }
  const __100 = reduceBy(num, 100, 'Ⅽ')
  if(isObject(__100)){
    num = __100.num
    arr.push(...__100.arr)
  }
  const ___50 = reduceBy(num, 50, 'Ⅼ')
  if(isObject(___50)){
    num = ___50.num
    arr.push(...___50.arr)
  }
  const ___10 = reduceBy(num, 10, 'Ⅹ')
  if(isObject(___10)){
    num = ___10.num
    arr.push(...___10.arr)
  }
  const ____5 = reduceBy(num, 5, 'Ⅴ')
  if(isObject(____5)){
    num = ____5.num
    arr.push(...____5.arr)
  }
  const ____1 = reduceBy(num, 1, 'Ⅰ')
  if(isObject(____1)){
    num = ____1.num
    arr.push(...____1.arr)
  }
  return sortNumerals(arr)
}