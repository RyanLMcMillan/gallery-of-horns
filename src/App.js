import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Modal from 'react-bootstrap/Modal';
import './App.css';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';
import { Form } from 'react-bootstrap';
// import Image from 'react-bootstrap/Image';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: '',
      title: '',
      numberHorns: data,
      modalContent: null,
    };
  }
  addLikes = () => {
    this.setState({
      likes: this.state.likes + '👺'
    });
  };
  hideModal = () => {
    this.setState({
      // showModal: false,
      modalContent: null,
    });
  };
  openModal = (title, description, image_url) => {
    this.setState({
      showModal: true,
      modalContent: {
        title: title,
        description: description,
        image_url: image_url
      }
    });
  };

  handleSelect = (e) => {
    let selected = parseInt(e.target.value);
    
    // parse data of horns
    let newArr = data;
    if(selected === 1){
      newArr = data.filter((num) => num.horns === 1 );

    } else if(selected === 2){
      newArr = data.filter((num) => num.horns === 2 )
      
    } else if (selected === 3){
      newArr = data.filter((num) => num.horns >= 3)
      
    }
    
    this.setState({numberHorns: newArr})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // Expand if statement to handle every value from the Form
    this.setState({
      submittedHorns: e.target.horns.value,
      submittedSelected: e.target.selected.value,
    });
  }

  render() {
    let modalContent;
    if (this.state.modalContent) {
      modalContent = (<SelectedBeast
        title={this.state.modalContent.title}
        description={this.state.modalContent.description}
        image_url={this.state.modalContent.image_url}
        onHide={this.hideModal}>
      </SelectedBeast>);
    } else {
      modalContent = (<></>);
    }
    return (
      <>
        <Header
          likes={this.state.likes}
        />
        <Form onChange={this.handleSubmit}/>
          <Form.Label>Display this many Horns</Form.Label>
          <Form.Group>
            <Form.Select name="selected" onChange={this.handleSelect}>
              <option value="0">All Beasts</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three-ish</option>
            </Form.Select>
          </Form.Group>
          {/* <Button type="submit">Submit</Button> */}
        <Form/>
        <Main
          // data={data}
          data = {this.state.numberHorns}
          addLikes={this.addLikes}
          openModal={this.openModal}
          // findNumHorns={this.findNumHorns}
          
        />
        <Footer />
        {modalContent}
        {/* <SelectedBeast
          title={title}
          description={description}
          image_url={image_url}>
        </SelectedBeast> */}
        {/* <Modal
          show={this.state.showModal}
          onHide={this.hideModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {this.state.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.description}
            <Image id='ModalImg' src={this.state.image_url} alt={this.props.description}/>
          </Modal.Body>
        </Modal> */}
      </>
    );
  }
}

export default App;