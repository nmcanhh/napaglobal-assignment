const controller = (req, res) => {
    const array = Array.from(Array(1000000).keys());
    array.forEach((item) => {
        console.log(item)
    });
    res.status(200).end();
}

/* Giả sử: Array có 1 triệu phần tử, cần lặp qua các phần tử này để làm các task vụ nào đó có 3 Request đồng thời gọi vào controller
Yêu cầu:
Viết 1 func để lặp qua array thay thế cho forEach để các request nó thực thi đồng thời, 
không đợi lẫn nhau, thời gian phản hồi của 3 request gần bằng nhau. */