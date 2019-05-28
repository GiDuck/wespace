import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import {modalList} from "../../../modal/modalData.js";

import { ExpandMore, ExpandLess, Folder} from "@material-ui/icons";
import {handleDrawerOpen, handlePrivateClick} from "../handler.js";
import {FolderContextmenu} from "../contextMenu/contextMenu";



export function getPrivateFolderMenu () {

    const { classes, privateList = []} = this.props;
    return (      <List className={classes.list}>
        <ListItem
            button
            onClick={event => {
                handleDrawerOpen.call(this);
                handlePrivateClick.call(this);
            }}
        >
            <ListItemIcon>
                <Folder />
            </ListItemIcon>
            <ListItemText primary="private" />
            {this.state.private_navigationOpen ? (
                <ExpandLess />
            ) : (
                <ExpandMore />
            )}
        </ListItem>
        {/* Open private of nav */}
        {privateList.map((item, index) => (
            <Collapse
                key={item.folder_id}
                in={this.state.private_navigationOpen}
                timeout="auto"
                unmountOnExit
            >
                <List component="div" disablePadding>
                    {FolderContextmenu.call(this, item)}
                </List>
            </Collapse>
        ))}
    </List>)
}