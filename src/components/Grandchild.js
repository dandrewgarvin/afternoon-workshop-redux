import React from 'react'
import PropTypes from 'prop-types'

class Grandchild extends React.Component {

    render(){
        return (
            <div style={{height: '80%', width: '80%', background: 'lightcoral', margin: 'auto'}}>
                <h1>Grandchild Component</h1>

                {/* This h2 uses the props object to get its data */}
                    {/* <h2>Value from App: <span style={{color: 'white'}}>{this.props.value || 'undefined'}</span></h2> */}

                {/* This h2 uses the context object to get its data */}
                    <h2>Value from App: <span style={{color: 'white'}}>{this.context.value}</span></h2>
            </div>
        )
    }
}

// This is the first part of the context object on the child.
// With this function, I am pulling values from the context object.

Grandchild.contextTypes = {
    value: PropTypes.string,
    chicken: PropTypes.string
}

export default Grandchild