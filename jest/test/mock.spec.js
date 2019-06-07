


import axios from 'axios';
jest.mock('axios'); //mock的应该是axios这整个模块 并非导进来的axios
axios.get.mockResolvedValue({data:999})//要和axios返回的格式保持一致才好

import obj from './api';
let fn = obj.getData;
test('调取接口',()=>{
    return fn().then(da=>{
        console.log(Array.isArray(da),da,'真实的接口返回的是数组');
        expect(da).toBeTruthy(); 
    })
})










// import obj  from './api.js'
// const aaapi=obj.a;

// jest.mock(obj); // this happens automatically with automocking
// const aaapi = require('./api');
// aaapi.mockImplementation(() => 42);
// test('4222222',()={
//     expect(aaapi()).toBe(42)
// })
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