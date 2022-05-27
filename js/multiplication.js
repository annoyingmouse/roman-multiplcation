/*
 * https://rbutterworth.nfshost.com/Tables/romanmult/
 */

import { intToRomanNumeral, halve } from './helpers.js'




const nineteen = intToRomanNumeral(19)
console.log(nineteen)
const nineteenHalved = halve(nineteen)
console.log(nineteenHalved)
const nineteenHalvedHalved = halve(nineteenHalved)
console.log(nineteenHalvedHalved)
const nineteenHalvedHalvedHalved = halve(nineteenHalvedHalved)
console.log(nineteenHalvedHalvedHalved)
const nineteenHalvedHalvedHalvedHalved = halve(nineteenHalvedHalvedHalved)
console.log(nineteenHalvedHalvedHalvedHalved)