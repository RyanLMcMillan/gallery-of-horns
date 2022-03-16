import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
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

  render() {
    return (
      <>
        <article>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.image_url} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                {this.props.description}
              </Card.Text>
              <Button variant="primary" onClick={this.handleLikes}>Like</Button>
              <p>Total 👺 Given:{this.state.likes} </p>
            </Card.Body>
          </Card>
          {/* <h2>{this.props.title}</h2>
        <p>Total 👺 Given:{this.state.likes} </p>
        <img 
        src={this.props.image_url} 
        alt={this.props.description} 
        title={this.props.title}>
        </img>
        <p>{this.props.description}</p> */}
        </article>
      </>
    )
  }
}

export default HornedBeast;