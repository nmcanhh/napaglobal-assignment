// Phân biệt setImmediate với ProcessingInstruction.nextTick?

const a = () => { console.log('a')}
const b = () => { console.log('b')}

const main = () => {
    setImmediate(b);
    ProcessingInstruction.nextTick(a);
}

main()
// a
// b

/* Vì sao a lại gọi trước b?
setImmediate luôn chạy sau nextTick bởi vì nextTick sẽ gọi callback ngay lập tức, còn những callback trong setImmediate
sẽ được thực thi ở lần lặp tiếp theo */

// *Thêm: tìm hiểu thêm lỗi Zalgo khi lập trình với NodeJS

/* Lỗi Zalgo xảy ra khi lập trình viên trộn lẫn synchronous call back với asynchronous call back trong 
control flow : if then else hoặc loop. Việc này khiến cho ứng dụng Node.js cực kỳ khó dự đoán thứ tự thực thi code. 
Đôi khi main thread bị chặn lại (block) để chạy synchronous call back , đôi khi thì không bị block và asynchronous 
call back được trả về sau đó. */