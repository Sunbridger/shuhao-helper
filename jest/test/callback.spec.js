function fetchData(fn){
    setTimeout(()=>{
        fn('peanut butter')
    },500);
}
// 这么测试永远得不到正确的结果，因为永远只显示是对的！
test('the data is peanut butter', done => {
    function callback(data) {
        expect(data).toBe('peanut butter');
        done();
    }
    fetchData(callback);
});