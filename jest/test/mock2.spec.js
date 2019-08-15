// const foo = require('./moduleapi');
import foo from './moduleapi'
jest.mock('./moduleapi'); // this happens automatically with automocking

// foo is a mock function
foo.mockImplementation((va) => {
    console.log(va);
    return va+9
});

test('模拟完全改写外部方法',()=>{
    const a = foo(1);
    expect(a).toBe(10);
})