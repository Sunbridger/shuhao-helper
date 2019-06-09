// 全程在return promise即可
const fetchData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve({
            //     name:'sunbridger'
            // });
            reject('error')
        },500)
    });
}
//Be sure to return the promise
// test('the data is peanut butter', () => {
//     return fetchData().then(data => expect(data).toEqual({name:'sunbridger'}));
// });

// test('the data is peanut butter', () => {
//     return expect(fetchData()).resolves.toEqual({name:'sunbridger'});
// });
// 如果用catch方法一定要加expect.assertions(1);
test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchData().catch(e => expect(e).toMatch('error'));
});
// test('the fetch fails with an error', () => {
//     return expect(fetchData()).rejects.toMatch('error');
// });

