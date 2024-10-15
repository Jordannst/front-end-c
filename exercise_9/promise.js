const helloWolrd = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello World")
        }, 2000)
    })
}

const messages = async () => {
    const msg = await helloWolrd()
    console.log(msg)
}

export {helloWolrd, messages}

