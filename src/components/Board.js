import React from 'react'
import PropTypes from 'prop-types'
import Cell from './Cell'

// const Board = ({cells, onAction}) => {
    
//     let rows = [];
//     let size = Math.floor(Math.sqrt(cells.length));

//     for(let i = 0; i < size; i++) {
//         let row = [];
//         for(let j = 0; j < size; j++) {
//             row.push(<Cell key={i * size + j} {...cells[i * size + j]} />)
//         }
//         rows.push(<div key={i} className="row">{row}</div>)
//     }

//     const onKeyDown = (key) => {
//         // e.preventDefault()
//         console.log(key);
//         switch (key) {
//             case 37:
//                 onAction('LEFT')
//                 break
//             case 38:
//                 onAction('UP')
//                 break
//             case 39:
//                 onAction('RIGHT')
//                 break
//             case 40:
//                 onAction('DOWN')
//                 break
//             default:
//                 break
//         }
//     }

//     return (
//         <div className="board" tabIndex="0" onKeyPress={() => {console.log('hello')}}>
//             {rows}
//         </div>
//     )
// }

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleKeyUp(event) {
        switch (event.keyCode) {
            case 37:
                this.props.onAction('LEFT')
                break
            case 38:
                this.props.onAction('UP')
                break
            case 39:
                this.props.onAction('RIGHT')
                break
            case 40:
                this.props.onAction('DOWN')
                break
            default:
                break
        }
    }

    componentDidMount() {
        document.addEventListener('keyup', this.handleKeyUp);
    }
   
    componentWillUnmount() {
        document.removeEventListener('keyup', this.handleKeyUp);
    }

    render() {
        let rows = [];
        let size = Math.floor(Math.sqrt(this.props.cells.length));
    
        for(let i = 0; i < size; i++) {
            let row = [];
            for(let j = 0; j < size; j++) {
                row.push(<Cell key={i * size + j} {...this.props.cells[i * size + j]} />)
            }
            rows.push(<div key={i} className="row">{row}</div>)
        }
        return (
            <div className="board" tabIndex="0">
                {rows}
            </div>
        )
    }
    
}

Board.propTypes = {
    cells: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onAction: PropTypes.func.isRequired
}

export default Board