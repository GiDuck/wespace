import React from "react";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { Menu, CreateNewFolder, GroupAdd, ChevronLeft} from "@material-ui/icons";
import "../../../../styles/contextMenu.css";
import {getOneInputModal, getNoticeModal, getAskShareModal} from "../../../modal/modalFactory.js";
import {modalList} from "../../../modal/modalData.js";
import {getPublicFolderMenu} from "../menuContainer/publicFolderMenu.js"
import {getPrivateFolderMenu} from "../menuContainer/privateFolderMenu.js"
import {getFriendMenu} from "../menuContainer/friendMenu.js"
import {getChatMenu} from "../menuContainer/chatMenu.js"
import {handleSetModal,handleDrawerClose, handleDrawerOpen} from "../handler.js";

export function getMainDrawer (){
    const { classes,
       user_id = 0, folder_id = 0,
      createFolder, shareFolder} = this.props;

    return(<Drawer 
        variant="permanent"
        className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open
        })}
        classes={{
            paper: classNames(classes.paper, {
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open,
            })
        }}
        open={this.state.open}
    >
        <div className={classes.toolbar}>
            {this.state.open ? (
                <div>
                  
                  {getOneInputModal.call(this)}
                  {getNoticeModal.call(this)}
                  {getAskShareModal.call(this)}
                
                    <IconButton>
                        <CreateNewFolder color="primary" onClick={(e)=> handleSetModal.call(this, modalList[0],createFolder,user_id, '')}/>
                    </IconButton>

                    <IconButton>   
                        <GroupAdd color="primary" onClick={(e)=>handleSetModal.call(this, modalList[1], shareFolder, folder_id, '')} />
                    </IconButton>

                    <IconButton
                        onClick={(e) =>
                            handleDrawerClose.call(this)}
                        className={classNames(classes.menuButton)}
                    >
                    <ChevronLeft />
                    </IconButton>
                </div>
            ) : (
                <IconButton
                    onClick={(e)=>handleDrawerOpen.call(this)}
                    className={classNames(classes.menuButton)}
                >
                    <Menu />
                </IconButton>
            )}
        </div>
        <Divider />
        {getPublicFolderMenu.call(this)}
        <Divider />
        {getPrivateFolderMenu.call(this)}
        <Divider/>
        {getFriendMenu.call(this)}
        <Divider/>
        {getChatMenu.call(this)}

    </Drawer>);
}