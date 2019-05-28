
import React from "react";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { Delete, Brightness1 } from "@material-ui/icons";
import { Switch } from 'react-router-dom';
import {modalList} from "../../../modal/modalData.js";

import { handleChatDrawerOpen, handleNoteData, handleFriendData, handleSetModal,
    handleSubDrawerOpen, handleFolderData} from "../handler.js";

export function FolderContextmenu (item) { return (
    <div className='context-menu' key={item.folder_id}>
            <ContextMenuTrigger id={item.folder_id}>
                <ListItem
                    button
                    onClick={event => {
                        handleSubDrawerOpen.call(this);
                        handleFolderData.call(this, item.folder_id,item.name);
                    }}
                        onDoubleClick={(e)=>handleSetModal.call(this, modalList[2],this.props.updateFolder,item.folder_id,item.name)}
                        onAuxClick={(e)=>handleFolderData.call(this, item.folder_id,item.name)}>
                        {item.permission === 'OWNER' ?
                            <ListItemIcon>
                                <Delete onClick={(e)=>handleSetModal.call(this, modalList[1],this.props.deleteFolder,item.folder_id, null)}/>
                            </ListItemIcon> 
                            : null
                            }
                                    
                        <ListItemText inset primary={item.name} />
                        <div>{item.count}</div>
                 </ListItem> 
            </ContextMenuTrigger>
            <ContextMenu id={item.folder_id}>
                <MenuItem onClick={(e)=>handleSetModal.call(this, modalList[2],this.props.updateFolder,item.folder_id,item.name)}>
                    이름 변경
                </MenuItem>
                <MenuItem onClick={null}>
                    공유 폴더
                </MenuItem>
                <MenuItem onClick={(e)=>handleSetModal.call(this, modalList[3],this.props.createNote, this.state.folder_id, '')}>
                    파일 생성
                </MenuItem>
                <MenuItem onClick={(e)=>handleSetModal.call(this, modalList[1],this.props.deleteFolder,item.folder_id, null)}>
                    삭제
                </MenuItem>
            </ContextMenu>
      </div>
   )}

    
export function FileContextmenu (item) {return (
        <div className='context-menu' key={item.id}>
            <ContextMenuTrigger id={item.id}>
                <ListItem button key={item.id}>
                    <ListItemText primary={item.name} 
                    onClick={(e)=>handleNoteData.call(this, item.id, item.name,item.content)}
                    onDoubleClick={(e)=>handleSetModal.call(this, modalList[5],this.props.updateNote,{note_id:item.id, folder_id: this.state.folder_id},item.name)}
                    onAuxClick={(e)=>handleNoteData.call(this, item.id, item.name,item.content)}/>
                    {item.reg_date}
                    <br/>
                </ListItem>
                <Divider />
            </ContextMenuTrigger>
            <ContextMenu id={item.id}>
                <MenuItem onClick={(e)=>handleSetModal.call(this, modalList[5],this.props.updateNote,{note_id:item.id, folder_id: this.state.folder_id},item.name)}>
                    이름 변경
                </MenuItem>
                <MenuItem onClick={null}>
                    공유하기
                </MenuItem>
                <MenuItem onClick={null} >
                    잠금
                    <Switch checked={this.state.toggle} onChange={null} value="checkedA" />
                </MenuItem>
                <MenuItem onClick={(e)=>handleSetModal.call(this, modalList[4],this.props.deleteNote,{note_id:item.id, folder_id: this.state.folder_id}, '')}>
                    삭제
                </MenuItem>
            </ContextMenu>
      </div>
    )}


    export function FriendContextmenu (item) {return (
        <div className='context-menu' key={item.id}>
            <ContextMenuTrigger id={item.id}>
            <ListItem onAuxClick={(e)=>handleFriendData.call(this, item.id, item.name)}>
             {item.joined ?
                 <Brightness1 style={{color : "orange", width : "10"}}/>
                   : <Brightness1 style={{color : "green", width : "10"}}/>}
                   <ListItemText inset primary={item.friend_id} />                 
                   <span style={{width : "30%", textAlign : "left"}}>
                   <img style={{width : 40, height : 40, borderStyle : "groove", borderRadius : "100%"}} src={item.profile} alt="profile"/>
                   </span>
                   <span style={{width: "60%", textAlign : "left"}}>{item.name}</span></ListItem>

                <Divider />
            </ContextMenuTrigger>
            <ContextMenu id={item.id}>
                <MenuItem onClick={null}>
                    친구삭제
                </MenuItem>
                <MenuItem onClick={ (e)=>handleChatDrawerOpen()}>
                    채팅하기
                </MenuItem>
            </ContextMenu>
      </div>
    )}