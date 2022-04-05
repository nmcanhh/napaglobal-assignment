setTimeout(() => {
    console.log("Hello event loop");
}, 5000);

for (i = 0; i < 100000; i++) {
    console.log(i);
}

