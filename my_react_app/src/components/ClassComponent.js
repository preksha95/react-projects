import React,{Component} from 'react';

class ClassComponent extends Component{
  render(){
    return (
      <div>
      <h1>{this.props.name } is {this.props.children} in Bangalore <i>--->class Component</i> </h1>
      </div>
    )
  }
}
export default ClassComponent
