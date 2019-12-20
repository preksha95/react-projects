import React,{Component} from 'react';

class Biodata extends Component{

  constructor(props){
    super(props);
    this.state={
      name: props.name,
      place: props.place,
      phone_no: ""
    }
}

moreContactInfo(){
    this.setState({
      phone_no: "Working in Smarsh India Pvt Ltd"
    })
  }
lessContactInfo(){
  this.setState({
    phone_no: ""
  })
}
render(){
    return (
      <div>
      <h1>I am {this.state.name} Living in {this.state.place}</h1>
      <p>{this.state.phone_no}</p>
      <span>
        <button onClick={()=>this.moreContactInfo()}>Click Here to Know More </button>
        <button onClick={()=>this.lessContactInfo()}>Click Here to Know Less </button>
      </span>


      </div>
    )
  }
}
export default Biodata
