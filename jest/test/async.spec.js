const fetchData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve('peanut butter');
            reject('error');
        },500)
    });
}
// test('async异步测试', async () => {
//     const data = await fetchData();
//     expect(data).toBe('peanut butter');
// });
test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await fetchData();
    } catch (e) {
      expect(e).toMatch('error');
    }
});