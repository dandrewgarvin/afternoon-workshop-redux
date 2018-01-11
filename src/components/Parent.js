import React from 'react'
import Child from './Child'

class Parent extends React.Component {
    render(){
        return (
            <div style={{height: '800px', width: '80%', background: 'lightblue', margin: 'auto'}}>
                <h1>Parent Component</h1>
                <Child value={this.props.value}/>
            </div>
        )
    }
}

export default Parent