import React, { Component } from 'react';

class Card extends Component {
  render() {
    const {name, email, id} = this.props.monster;

    return (
        <div className='cursor-pointer flex flex-col justify-center p-3 bg-[#dcfce7] text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-300 mb-5'  key={id}>
        <img className='max-w-[50%] mx-auto my-0' src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
        <h1 className='my-3 text-base font-bold'>{name}</h1>
        <p className='mb-1'>{email}</p>
    </div>
    )
  }
}

export default Card;