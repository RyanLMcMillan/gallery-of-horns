import React from 'react';
import './HornedBeast.css'
import {Card, CardGroup} from 'react-bootstrap';
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
  handleShowModal = () => {
    this.props.openModal(this.props.title, this.props.description, this.props.image_url);
  }
  render() {
    return (
      <>
        <article>
          <CardGroup className='h-100'>
          <Card style={{ width: '18rem' }}>
            <Card.Img className="image" variant="top" src={this.props.image_url} onClick={this.handleShowModal}/>
            <Card.Body>
              <Card.Title className="CardTitle">{this.props.title}</Card.Title>
              <Card.Text className="CardText">
                {this.props.description}
              </Card.Text>
              <Button variant="primary" onClick={this.handleLikes}>Like</Button>
              <p>Total 👺 Given:{this.state.likes} </p>
            </Card.Body>
          </Card>
          </CardGroup>
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