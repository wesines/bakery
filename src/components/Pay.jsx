import React from "react";
import Card from "./Card"

export class Pay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basket: [],
      total: 0,
      totalTVA:0,
      totalEcoTax:0,
      totalTTC:0,
      nom:[]
    };

  }
 
  handleSelect =(name,price)=>{


 const nom=[name];
    const newName=this.state.nom;
    newName.push(name)
    this.setState({nom:newName})
    const prix =  [price]  
    const newPrix = this.state.basket;
     newPrix.push(prix)
     this.setState({
      basket: newPrix
    })
     
    let totalEco=0
    let somme=0
  
     for(let i=0;i<this.state.basket.length;i++)          
     {
        somme=somme+parseInt(this.state.basket[i])
        totalEco=somme+(this.state.basket.length+1)*0.03
       }      

        let calculTVA=(this.state.total * 0.2).toFixed(2)
        let toto=this.state.total+this.state.totalEcoTax+this.state.totalTVA
        this.setState({total:somme})
        this.setState({totalEcoTax:totalEco})
        this.setState({totalTVA:calculTVA})
        this.setState({totalTTC:toto})

  }
  render() {
    return (
      <div>
<div class="row">
  <div class="col-sm-9">
  <h1>Pay</h1>
    <div class="row">
      <div class="col-8 col-sm-6">
      <ul className="list-group">
               {this.state.nom.length ? this.state.nom.map(el => (
                    <li key={el}>
                      {el} 
                    </li>
   )): <p></p>}
      </ul>
      </div>
      <div class="col-4 col-sm-6">
     <p><h5>SubTotal : {this.state.total}  €</h5></p>
     <p><h5> Vat : {this.state.totalTVA} € </h5></p>
     <p> <h5>Eco Tax : {this.state.totalEcoTax} €</h5></p>
     <p><h5>Total : {this.state.totalTTC} €</h5> </p>
    

      </div>
    </div>
  </div>
</div>


   


        <ul className="list-group">
                {this.props.items.map(element => (
                    <li className="list-group-item" key={element}>
                       <Card  onClick={this.handleSelect } 
                            itemName={element.name} price={element.price} quantity={element}
                    
                        />  
                        <span className="badge badge-primary badge-pill">{element.price}€</span>
                    </li>
                ))}
                </ul>
      </div>

    )
  }
}
  export default Pay;