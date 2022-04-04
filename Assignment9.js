// Promise.all chỉ trả về khi tất cả đều thành công, chỉ cần 1 sự kiện thất bại sẽ kết thúc luôn,
// nếu có 1 sự kiện thất bại còn các sự kiện khác thành công nhưng muốn nhận đầy đủ kết quả
// thì làm thế nào? 
// Trả lời câu hỏi sau:

// Có 3 sự kiện bất đồng bộ không biết trước thời gian hoàn thành
// Giả sử có 2 sự kiện thành công, 1 sự kiện thất bại
// Làm thế nào để thực thi 3 sự kiện này cùng 1 lúc, kết quả nhận được sẽ trả về array chứa 3 kết quả thành công
// và thất bại

// * Chú ý: chỉ được sử dụng API Promise.all kết hợp thêm logic


let promise1 = new Promise((resolve, reject) => {
    resolve('Promise 1');
});

let promise2 = new Promise((resolve, reject) => {
    reject('reject Promise 2');
});

let promise3 = new Promise((resolve, reject) => {
    resolve('Promise 3');
});

const promises = [promise1, promise2, promise3]
let promise = Promise.all(promises.map(promise => promise.catch(e => {
    if (e) {
        console.log(e)
    }
})))
promise.then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
})