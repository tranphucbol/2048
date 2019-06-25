
const generate = () => {
    let board = []
    for(let i = 0; i < 16; i++) {
        board.push({value: 0})
    }

    generateRandom(board)
    generateRandom(board)
    return board
}

const getSize = (board) => {
    return Math.floor(Math.sqrt(board.length));
}

const generateRandom = (board) => {

    if(isFull(board)) {
        let index = Math.floor(Math.random() * 16)
        while(board[index].value !== 0)
            index = Math.floor(Math.random() * 16)
        board[index].value = Math.floor(Math.random() * 10) > 7 ? 4 : 2;
    }

    return board;
}

const isFull = (board) => {
    for(let i = 0; i < board.length; i++) {
        if(board[i] === 0) return false;
    }
    return true;
}

const LEFT = {x: 0, y: -1}
const UP = {x: -1, y: 0}
const RIGHT = {x: 0, y: 1}
const DOWN = {x: 1, y: 0}


const move = (board, action) => {
    const size = getSize(board)
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            if(board[i * size + j].value !== 0) {
                let x = i + action.x
                let y = j + action.y

                while(x >= 0 && x < size && y >=0 && y < size && board[x * size + y].value === 0) {
                    x += action.x
                    y += action.y
                }
                

                x = x - action.x
                y = y - action.y

                board[x * size + y].value = board[i * size + j].value
                if(i !== x || j !== y)
                    board[i * size + j].value = 0
            } 
        }
    }
    console.log('move')
}

const join = (board, action) => {
    const size = getSize(board)
    const merge = (board, i , j) => {
        if(board[i * size + j] !== 0) {
            let x = i + action.x
            let y = j + action.y

            if(x >= 0 && x < size && y >=0 && y < size && board[i * size + j].value === board[x * size + y].value) {
                board[x * size + y].value *= 2
                board[i * size + j].value = 0
            }
        }
    }

    if(UP === action || LEFT === action) {
        for(let i = 0; i < size; i++) {
            for(let j = 0; j < size; j++) {
                merge(board, i, j)
            }
        }
    } else {
        for(let i = size - 1; i >= 0; i--) {
            for(let j = size - 1; j >= 0; j--) {
                merge(board, i, j);
            }
        }
    }
    console.log('join')
}

const plusCell = (board, action) => {
    // let size = 4
    // let current = {x: size - 1, y: 0}
    move(board, action)
    join(board, action)
    move(board, action)
    return board
} 


const cells = (state = generate(), action) => {
    switch (action.type) {
        case 'LEFT':
            return generateRandom(plusCell([...state], LEFT))
        case 'UP':
            return generateRandom(plusCell([...state], UP))
        case 'RIGHT':
            return generateRandom(plusCell([...state], RIGHT))
        case 'DOWN':
            return generateRandom(plusCell([...state], DOWN))
        default:
            return state;
    }
}

export default cells