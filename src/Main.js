import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component{
  render(){
    let beasts = []
    this.props.data.forEach ((hornedBeast, index) => {
      beasts.push(
        <HornedBeast
        image_url = {hornedBeast.image_url}
        title = {hornedBeast.title}
        description = {hornedBeast.description}
        keyword = {hornedBeast.keyword}
        horns = {hornedBeast.horns}
        key={index}
        >

        </HornedBeast>
      )
    });
    return(
      <main>
        {beasts}
      </main>
    )
  }
}

export default Main;