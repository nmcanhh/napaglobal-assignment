// Vấn đề của event loop, nó có thực sự ngon như bạn nghĩ?
// Có Controller như sau:
const controller = async (req, res) => {
    // func doA là đồng bộ, thời gian thực thi là 10s
    doA();
    // func doB là bất đồng bộ, thời gian thực thi là 1s,
    // là 1 lời gọi IO, chẳng hạn truy vấn database
    await doB()
    res.status(200).end();
}
// Giả sử có 3 request đồng thời gọi vào controller thì thời gian để nhận phản hồi từ 
// request đầu tiên là bao lâu, request cuối cùng phản hồi là bao lâu, trung bình thời gian phản hồi của 3 request

// Làm thế nào để request đầu tiên phản hồi trong khoảng 11s