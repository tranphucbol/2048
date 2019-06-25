
export const Action = {
    LEFT: 'LEFT',
    UP: 'UP',
    RIGHT: 'RIGHT',
    DOWN: 'DOWN'
}

export const swipe = (action) => {
    return {
        type: action
    }
}