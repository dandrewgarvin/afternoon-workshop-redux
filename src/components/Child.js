import React from 'react'
import Grandchild from './Grandchild'

import {connect} from 'react-redux'

class Child extends React.Component {
    render(){
        return (
            <div style={{height: '80%', width: '80%', background: 'lightgreen', margin: 'auto'}}>
                <h1>Child Component</h1>
                <Grandchild value={this.props.value}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}



console.log(connect())

export default connect(mapStateToProps, {})(Child)