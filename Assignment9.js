// Promise.all chỉ trả về khi tất cả đều thành công, chỉ cần 1 sự kiện thất bại sẽ kết thúc luôn,
// nếu có 1 sự kiện thất bại còn các sự kiện khác thành công nhưng muốn nhận đầy đủ kết quả
// thì làm thế nào? 
// Trả lời câu hỏi sau:

// Có 3 sự kiện bất đồng bộ không biết trước thời gian hoàn thành
// Giả sử có 2 sự kiện thành công, 1 sự kiện thất bại
// Làm thế nào để thực thi 3 sự kiện này cùng 1 lúc, kết quả nhận được sẽ trả về array chứa 3 kết quả thành công
// và thất bại

// * Chú ý: chỉ được sử dụng API Promise.all kết hợp thêm logic


const event1 = new Promise((resolve, reject) => {
    resolve("Event 1 Success")
})

const event2 = new Promise((resolve, reject) => {
    reject("Event 2 Error")
})

const event3 = new Promise((resolve, reject) => {
    resolve("Event 3 Success")
})

const promises = [event1, event2, event3];

let currentPromise = Promise.all(promises.map(promise => promise.catch(err => console.log(err))));

currentPromise.then(res => {
    console.log(res);
}).catch(err => {
    console.log("Failed");
})
