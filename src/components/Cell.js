import React from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Cell = ({value}) => (
    
    <ReactCSSTransitionGroup
    transitionName="example"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={300}>

    <div className={`cell color-${value}`}>
        {value === 0 ? '' : value}
    </div>
  </ReactCSSTransitionGroup>
    
)

Cell.propTypes = {
    value: PropTypes.number.isRequired
}

export default Cell