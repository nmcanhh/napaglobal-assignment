/*Vấn đề của event loop, nó có thực sự ngon như bạn nghĩ?
Có Controller như sau: */

const controller = async (req, res) => {
    // function doA() là đồng bộ, thời gian thực thi là 10s
    doA();
    // function doB() là bất đồng bộ, thời gian thực thi là 1s, là 1 lời gọi I/O, chẳng hạn truy vấn database.
    await doB() 
    res.status(200).end();
}
/* Giả sử có 3 request đồng thời gọi vào controller thì thời gian để nhận phản hồi từ request đầu tiên là bao lâu, 
request cuối cùng phản hồi là bao lâu, trung bình thời gian phản hồi của 3 request*/

// Làm thế nào để request đầu tiên phản hồi trong khoảng 11s?

/* Chúng ta gọi 3 request đồng thời vào controller, lúc này Call Stack sẽ chứa doA()1, doB()1, doA()2, doB()2, doA()3 và doB()3.
Call Stack sẽ chạy doA()1 trước sau đó đến doB()1 thì sẽ đẩy sang Web APIs và cho xuống Callback Queue. Tương tự với các func còn lại.
Lúc này Call Stack sẽ xử lý doA()1,2,3 mất hết 3*10 = 30s. Sau khi xử lý xong hết func sync thì CallStack sẽ xử lý những func async còn lại.
Vì doA()1 đợi doB()1 thêm 1s nên request đầu tiên mấy 31s.  Vậy nên request thứ 2 mất 32s và request thứ 3 mấy 33s. Trung bình thời gian 
phản hồi 3 request sẽ mấy 32s. */

// Để request đầu tiên phản hồi trong vòng 11s thì ta tận dụng cơ chế của nextTick

/* 
const controller = async (req, res) => {
    process.nextTick(() => {
        doA();
      });
    await doB();
}
*/

/* nextTick() sẽ biến func doA() từ sync thành async và đẩy sang Web API -> Callback Queue. nextTick() sẽ giúp các func chạy đúng thứ tự hơn.
Như vậy doA()1 và doB()1 sẽ ra trước và hoàn thành request đầu tiên với thời gian là 11s. */