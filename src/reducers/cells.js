
const generate = () => {
    let board = []
    for(let i = 0; i < 16; i++) {
        board.push({value: 0})
    }

    generateRandom(board)
    generateRandom(board)
    return board
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

const plusCell = (board, action) => {
    // let size = 4
    // let current = {x: size - 1, y: 0}
    
    return board;
} 


const cells = (state = generate(), action) => {
    switch (action.type) {
        case 'LEFT':
        case 'UP':
        case 'RIGHT':
        case 'DOWN':
            return generateRandom(plusCell([...state], action.type));
        default:
            return state;
    }
}

export default cells