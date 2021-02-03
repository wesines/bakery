
import React from "react";


export class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "/images/item.png" ,
 
    };
 
  }
  
  // componentDidMount(){
  //   fetch(`https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.itemName}`)
  //   .then(res => res.json())
  //   .then(resultat => {
  //       console.log(resultat)
  //     //this.setState({ image :  });
 
  //   })
  //   .catch(error => console.error(error))
  
  // }

  render() {
    return (
        <div>
           <button onClick={(e)=>{this.props.onClick(this.props.itemName,this.props.price)}}>
        
              <img src={this.state.image}  style={{ width: 100, height:100 }} /></button>





        </div>
        );
    }
}
  export default Add;