import {connect} from 'react-redux'
import Board from '../components/Board'
import {swipe} from '../actions'

const mapStateToProps = (state) => ({
    cells: state.cells
})

const mapDispatchToProps = dispatch => ({
    onAction: action => dispatch(swipe(action))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)