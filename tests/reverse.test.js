const { test,describe } = require('node:test')
const assert = require('node:assert')

const reverse = require('../utils/for_testing').reverse


describe('Reverse testing', () => {

  // Individual test cases defined with test function
  test('reverse of a', () => { //test description
    const result = reverse('a') // Step 1: Run the function

    assert.strictEqual(result, 'a') // Step 2: Check the output
  })

  test('reverse of react', () => {
    const result = reverse('react')

    assert.strictEqual(result, 'tcaer')
  })

  test('reverse of saippuakauppias', () => {
    const result = reverse('saippuakauppias')

    assert.strictEqual(result, 'saippuakauppias')
  })
})