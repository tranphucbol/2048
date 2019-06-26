import React from 'react'
import { Motion, spring } from "react-motion";
import PropTypes from 'prop-types'

class Cell extends React.Component {

    render() {
        return (
            <Motion
                style={{
                    x: spring(50)
                }}
            >
                {style => (
                    <div 
                        className={`cell color-${this.props.value}`}
                        style={{
                            transform: `translateX(${style.x}px)`
                        }}
                    >
                        {this.props.value === 0 ? '' : this.props.value}
                    </div>
                )}
            </Motion>
        )
    }
}

Cell.propTypes = {
    value: PropTypes.number.isRequired
}

export default Cell