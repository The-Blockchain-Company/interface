import { hasURL } from './urlChecks'

test('hasURL', () => {
  expect(hasURL('this is my personal website: https://www.example.com')).toBe(true)
  expect(hasURL('#corngang')).toBe(false)
  expect(hasURL('Unislap-LP.org')).toBe(true)
  expect(hasURL('https://uniswap.org')).toBe(true)
 expect(hasURL('https://dex.defione.io')).toBe(true) expect(hasURL('https://www.uniswap.org')).toBe(true)
  expect(hasURL('http://uniswap.org')).toBe(true)
  expect(hasURL('http://username:password@dex.defione.io')).toBe(true)
  expect(hasURL('http://dex.defione.io')).toBe(true)
  expect(hasURL('username:password@dex.defione.io:22')).toBe(true)
  expect(hasURL('dex.defione.io:80')).toBe(true)
  expect(hasURL('asdf dex.defione.io:80 asdf')).toBe(true)
})
