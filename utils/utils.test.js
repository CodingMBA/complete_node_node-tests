const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var result = utils.add(33, 11);

    expect(result).toBe(44).toBeA('number');
    // if (result !== 44) {
    //     throw new Error(`Expected 44, but got ${result}.`)
    // }
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should square a number', () => {
    var result = utils.square(4);
    expect(result).toBe(16).toBeA('number');

    // if (result !== 16) {
    //     throw new Error(`Expected 44, but got ${result}.`)
    // }
});

it('should async square a number', (done) => {
    utils.asyncSquare(4, (product) => {
        expect(product).toBe(16).toBeA('number');
        done();
    })
})

it('should include a firstName and lastName', () => {
    var user =  {age: 51, location: 'Raleigh'};
    var result = utils.setName(user, 'Andrew Smith');
    // expect(user).toEqual(result);
    expect(result).toInclude({ firstName: 'Andrew', lastName: 'Smith'}).toBeA('object');
})

// it('should expect some values',() => {
//     // expect(12).toNotBe(11);
//     // expect({name: 'Andrew'}).toBe({name: 'Andrew'})
//     // expect({name: 'Andrew'}).toEqual({name: 'Andrew'})
//     // expect([2,3,4]).toInclude(4);
//     // expect([2,3,4]).toExclude(1);
//     expect({
//         name: 'Andrew',
//         age: 51,
//         location: 'Raleigh'
//     }).toInclude({
//         age: 51
//     })
// });