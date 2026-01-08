// (0).

// Wait 5 Seconds without using SetTimeout

console.log("start")

wait5sec();

fun();

console.log("end");

setTimeout(function () {
    console.log("timeout after 1 sec.");
}, 1000)

// ----------------------------------------------------------------- //

function fun() {
    setTimeout(function () {
        console.log("timeout immediately.");
    }, 0)
}

function wait5sec() {
    const currentTime = Date.now();
    do { } while (Date.now() < currentTime + 5000);
    console.log("5 seconds later ...");
}