for (let i = 0; i < 10; i++) { // nested Loop
    process.stdout.write(String(i) + "(i)> ");
    for (let j = 1; j <= 5; j++) {
        process.stdout.write("(j) " + String(j));
    }
    console.log("\n")
}

//  1            1           5 4 3 2 1
//  1 2          2 2         4 3 2 1
//  1 2 3        3 3 3       3 2 1
//  1 2 3 4      4 4 4 4     2 1
//  1 2 3 4 5    5 5 5 5 5   1