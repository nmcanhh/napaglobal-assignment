const waitBlocking = (miliSeconds) => {
    const startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds);
}

const waitNonBlocking = (miliSeconds) => {
    return new Promise(resolve => setTimeout(() => resolve()), miliSeconds);
}

const controller1 = async (req, res) => {
    await waitNonBlocking(10000);
    res.status(200).end;
}

const controller2 = (req, res) => {
    waitBlocking(10000);
    res.status(200).end();
}

// Giả sử có 3 request đồng thời gọi vào controller1 và controller2 thì thời gian để nhận được
// response tại controller1 và controller2 của request đầu tiên là bao lâu?
// Đề xuất cải thiện performance cho controller2?
// Gợi ý: sử dụng job-queue