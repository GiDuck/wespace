import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import {modalList} from "../../../modal/modalData.js";

import { ExpandMore, ExpandLess, FolderShared, Delete} from "@material-ui/icons";
import {handleDrawerOpen, handlePublicClick, handleSetModal, 
    handleSubDrawerOpen, handleFolderData} from "../handler.js";

export function getPublicFolderMenu () {
    const { classes, sharedList = [], deleteFolder, updateFolder} = this.props;
    return( <List className={classes.list}>
        <ListItem 
            button
            onClick={event => {
                handleDrawerOpen.call(this);
                handlePublicClick.call(this);
            }}
        >
            <ListItemIcon>
                <FolderShared />
            </ListItemIcon>
            <ListItemText primary="public" />
            {this.state.public_navigationOpen ? (
                <ExpandLess />
            ) : (
                <ExpandMore />
            )}
        </ListItem>
        {sharedList.map((item,id) => (
            <Collapse
                in={this.state.public_navigationOpen}
                timeout="auto"
                unmountOnExit
            >
                <List component="div" disablePadding>
                    <ListItem
                        button
                        onClick={event => {
                            handleSubDrawerOpen.call(this);
                            handleFolderData.call(this, item.folder_id,item.name);
                            
                        }}
                        onDoubleClick={(e)=>handleSetModal.call(this, modalList[3],updateFolder,item.folder_id,item.name)}
                    >
                    {item.permission === 'OWNER' ?
                        <ListItemIcon>
                            <Delete onClick={(e)=>handleSetModal.call(this, modalList[3],deleteFolder,item.folder_id)}/>
                        </ListItemIcon> 
                        : null
                    }
                    
                        <ListItemText inset primary={item.name} />
                        
                    </ListItem> 
                </List>
            </Collapse>
        ))}
    </List>)
}