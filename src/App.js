import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Modal from 'react-bootstrap/Modal';
import './App.css';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';
// import Image from 'react-bootstrap/Image';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: '',
      title: '',
      // showModal: false
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
        <Main
          data={data}
          addLikes={this.addLikes}
          openModal={this.openModal}
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