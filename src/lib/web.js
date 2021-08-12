export const waitForOpenConnection = (socket) => {
    return new Promise((resolve, reject) => {
        const maxNumberOfAttempts = 10
        const intervalTime = 200 //ms

        let currentAttempt = 0
        const interval = setInterval(() => {
            if (currentAttempt > maxNumberOfAttempts - 1) {
                clearInterval(interval)
                reject(new Error('Maximum number of attempts exceeded'))
            } else if (socket.readyState === socket.OPEN) {
                clearInterval(interval)
                resolve()
            }
            currentAttempt++
        }, intervalTime)
    })
}

export const sendMessage = async (socket, msg) => {
    console.log(socket.OPEN,socket.readyState);
    // if (socket.readyState !== socket.OPEN) {
    //     try {
    //         await waitForOpenConnection(socket)
    //         socket.send(msg)
    //     } catch (err) { console.error(err) }
    // } else {
    //     socket.send(msg)
    // }
    if(socket.readyState === 1){
        socket.send(msg)
    }
        
}