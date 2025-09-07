let login = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Login Done✅");
            // rej("Invalid credentials")
        }, 9000);
    })
}
let reelsScrolling = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Reels Scrolling...");
        }, 2000);
    })
}
let logout = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            // res("Logout Done✅");c
            rej("Logout Error ❌");
        }, 6000);
    })
}

(async () => {
    try {
        let response = await login()
        console.log(response);

        response = await reelsScrolling()
        console.log(response);

        response = await logout()
        console.log(response);
    } catch (error) {
        console.log(error.message || error || "Unternal Server Problem");


    }
})()