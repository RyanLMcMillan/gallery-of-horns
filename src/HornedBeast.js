import React from 'react';

class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      likes: 0,
    }
  }
  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  };
  
  render(){
    return(
      <>
      <article>
        <h2>{this.props.title}</h2>
        <p>Total 👺 Given:{this.state.likes} </p>
        <img 
        onClick={this.handleLikes}
        src={this.props.image_url} 
        alt={this.props.description} 
        title={this.props.title}>
        </img>
        <p>{this.props.description}</p>
      </article>
      </>
    )
  }
}

export default HornedBeast;