import React,{Component} from 'react';

class Biodata extends Component{

  constructor(props){
    var name,place
    super(props);
    props.info.forEach(element => {
      this.name=element.name
      this.place=element.place
});
}

contactInfo(){
    this.setState({
      place: 'Mumbai'
    })
  }
render(){
    return (
      <div>
      <h1>I am {this.name} Living in {this.place}</h1>
      <button onClick={()=>this.contactInfo()}>Click Here to Contact Me </button>

      </div>
    )
  }
}
export default Biodata
