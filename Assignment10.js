// Bài 10: await hay return await?

async function waitAndMaybeReject() {
    await new Promise((r) => setTimeout(r, 1000));
    throw Error("This is error!");
}

async function test1() {
    try {
        return await waitAndMaybeReject();
    } catch (e) {
        return "Oh no!";
    }
}

async function test2() {
    try {
        return await waitAndMaybeReject();
    } catch (e) {
        throw e;
    }
}

async function test3() {
    return await waitAndMaybeReject();
}

async function test4() {
    return waitAndMaybeReject();
}

const main = async () => {
    const value = await test1();
    console.log("value", value);
}

main();

// Trong 4 function test trên, thì những cách nào đúng, những cách nào sai hoặc du thừa? Giải thích lý do?

