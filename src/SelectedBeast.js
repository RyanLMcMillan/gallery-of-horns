import Main from './Main.js';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import React from 'react';
import './SelectedBeast.css' 
class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: '',
      title: '',
      showModal: true,
      modalContent: null,
    };
  }
  render() {
    return (
      <>
        <Modal
          show={this.state.showModal}
          onHide={this.props.onHide}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {this.props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.description}
            <Image id='ModalImg' src={this.props.image_url} alt={this.props.description} />
          </Modal.Body>
        </Modal>
      </>
    )
  };
}
export default SelectedBeast;