import React, { Component } from 'react';
import './Intro.scss';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';

const modalcustom = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class intro extends Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div className="intro">
                <div className="left-page">
                    <p class="maintext"><br/>
                    효율적인 업무 공유 <br />
                    스마트한 노트 공간,<br />
                        <strong>WESPACE</strong>
                    </p>
                    <br/>
                    <p class="subtext">
                    타 플랫폼의 도움이 필요 없이, <br />
                    WESPACE 에서 모두 확인할 수 있도록 <br />
                    편리한 유저 경험을 담았습니다. <br />
                    </p>
                    <br />
                </div>
                <div className="right-page">
                <button style={{background:'none', border:'none'}} class="Buttons">   
                <img
                  style={{cursor:'pointer', width:200}}
                  src="https://st2.depositphotos.com/1032749/9083/v/950/depositphotos_90833758-stock-illustration-play-button-tv-icon-design.jpg"
                  onClick={this.openModal}
                  alt=''
                  />
                  </button>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        style={modalcustom}
                    >
                        <ReactPlayer
                            url='https://youtu.be/PL9iyA3dZ9I'
                            controls playing
                        />      
                    </Modal>
            </div>
            </div>
                );
            }
        }
        
export default intro;