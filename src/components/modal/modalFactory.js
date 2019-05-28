import React from "react";
import OneInputModal from "../modal/OneInputModal";
import AskShareModal from '../modal/AskShareModal';
import NoticeModal from '../modal/NoticeModal';
import {handleUnSetModal} from "../main/Directory/handler.js";

//Please bind with context 'this'
export function getOneInputModal(){
    return (<OneInputModal 
        visible={this.state.oneInputModal}
        onCancel={(e)=>handleUnSetModal.call(this, 'oneInputModal')}
        onConfirm={this.state.modalAction}
        modal_icon={this.state.modal_icon}
        modal_title={this.state.modal_title}
        modal_content={this.state.modal_content}
        btn_name={this.state.btn_name}
        id={this.state.modal_data}
        text={this.state.modal_text}
        />)
}

export function getNoticeModal(){
    return (<NoticeModal 
        visible={this.state.noticeModal}
        onCancel={(e)=>handleUnSetModal.call(this, 'noticeModal')}
        onConfirm={this.state.modalAction}
        modal_icon={this.state.modal_icon}
        modal_title={this.state.modal_title}
        modal_content={this.state.modal_content}
        btn_name={this.state.btn_name} 
        id={this.state.modal_data}
        />)
}

export function getAskShareModal(){

    return (<AskShareModal
        visible={this.state.askShareModal}
        onCancel={(e)=>handleUnSetModal.call(this, 'askShareModal')}
        onConfirm={this.state.modalAction}
        modal_icon={this.state.modal_icon}
        modal_title={this.state.modal_title}
        modal_content={this.state.modal_content}
        btn_name={this.state.btn_name} 
        folder_id={'d'} />)
}





