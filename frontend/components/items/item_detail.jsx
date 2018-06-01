import React from 'react';

class ItemDetail extends React.Component {

  render(){

    const {item} = this.props;
    return (

      <ul>
        <li>{item.name}</li>
        <li>{item.happiness}</li>
        <li>{item.price}</li>
      </ul>
    )
  }
}

export default ItemDetail;
