import React from 'react'
import PropTypes from 'prop-types'

const Cell = ({value}) => (
    <div className={`cell color-${value}`}>
        {value === 0 ? '' : value}
    </div>
)

Cell.propTypes = {
    value: PropTypes.number.isRequired
}

export default Cell