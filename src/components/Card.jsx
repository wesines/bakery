
import React from "react";


export class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "/images/item.png" ,
 
    };
 
  }
  
  componentDidMount(){
    let url=`https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.itemName}.png`
    console.log("url",url)
    fetch(url)
    .then(res => res.json())
    .then(resultat => {
      this.setState({ image :url  });
    })
    .catch(error => console.error(error))
  
  }

  render() {
    let source=`https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.itemName}.png`
   
    return (
        <div>
           <button onClick={(e)=>{this.props.onClick(this.props.itemName,this.props.price)}}>
        
              <img src={source}  style={{ width: 100, height:100 }} /></button>





        </div>
        );
    }
}
  export default Add;