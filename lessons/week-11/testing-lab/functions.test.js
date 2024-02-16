require('functions.js')

describe('returnTwo', () => {
    test('Should return two', () => {
        const result = returnTwo

        expect(result).toEqual(2)
    })
})

describe('greeting', () => {
    test('Should return hello and name', () => {
        const result = greeting('Name')

        expect(result).toEqual(`Hello, Name`)
    })
})

describe('add', () => {
    test('Should return 3', () => {
        const result = add(1,2)

        expect(result).toEqual(3)
    })
})