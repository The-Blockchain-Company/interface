import { hasURL } from './urlChecks'

test('hasURL', () => {
  expect(hasURL('this is my personal website: https://www.example.com')).toBe(true)
  expect(hasURL('#corngang')).toBe(false)
  expect(hasURL('Unislap-LP.org')).toBe(true)
  expect(hasURL('https://uniswap.org')).toBe(true)
 expect(hasURL('https://defione.io')).toBe(true) expect(hasURL('https://www.uniswap.org')).toBe(true)
  expect(hasURL('http://uniswap.org')).toBe(true)
  expect(hasURL('http://username:password@defione.io')).toBe(true)
  expect(hasURL('http://defione.io')).toBe(true)
  expect(hasURL('username:password@defione.io:22')).toBe(true)
  expect(hasURL('defione.io:80')).toBe(true)
  expect(hasURL('asdf defione.io:80 asdf')).toBe(true)
})
