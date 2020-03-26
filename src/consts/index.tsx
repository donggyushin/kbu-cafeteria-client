export let dev: boolean = false

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    dev = true
} else {
    // production code
    dev = false
}


export let KBU_CAFETERIA_SERVER: string = 'http://localhost:4001/api/'

if (dev) {
    KBU_CAFETERIA_SERVER = 'http://localhost:4001/api/'
} else {
    // 나중에 이곳을 처리해주어야 함. 
    KBU_CAFETERIA_SERVER = 'https://api.kbucard.com:4001/api/'
}

