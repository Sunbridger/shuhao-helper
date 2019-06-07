

import obj  from './api.js'
const aaapi=obj.a;

jest.mock(obj); // this happens automatically with automocking
// const aaapi = require('./api');
aaapi.mockImplementation(() => 42);
test('4222222',()={
    expect(aaapi()).toBe(42)
})
// > 42

// const jsonp=require('./api').default;
// const jsonp=obj.jsonp;
// const aa= jest.fn();
// aa.mockReturnValueOnce(10)
// // jest.mock() 只能用于模块内部的方法？？？
// test('模拟数据Mock的测试',()=>{
//     aa();//expect等待的是一个return值
//     expect(aa()).toBe(10)
// });