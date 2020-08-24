import React from 'react';
import {Button} from 'react-bootstrap';
const Cards = ( props ) => {
    return (
    	<div className="col-lg-4 mb-4 grid-margin">
          <div className="card h-100">
              <h4 className="card-header">{props.title}</h4>
              <div className="card-body">
                <p className="card-text">{props.cardtext}</p>
              </div>
              <div className="card-footer">
                <Button variant="btn btn-primary">Learn More</Button>
              </div>
          </div>
        </div>

    )
}

class Mycards extends React.Component {
	state = {
    cards: [
      { title: 'Card1', cardtext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.' },
      { title: 'Card2', cardtext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.' },
      { title: 'Card3', cardtext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.' }
    ]
  }
	render(){

		return( this.state.cards.map((card) => { return <Cards title={card.title} cardtext={card.cardtext} /> })
		);
	}
}

export default Mycards;