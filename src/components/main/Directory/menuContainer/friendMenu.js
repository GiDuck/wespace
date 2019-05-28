import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import {FriendContextmenu} from "../contextMenu/contextMenu.js";

import { ExpandMore, ExpandLess, People} from "@material-ui/icons";

import { handleDrawerOpen, handleFreindClick } from "../handler.js";

export function getFriendMenu () {
    const { classes, friends} = this.props;
    console.log("friend list...")
    return (  <List className={classes.list} >
        <ListItem
            button
            onClick={event => {
                handleDrawerOpen.call(this);
                handleFreindClick.call(this);
            }}
        >
            <ListItemIcon>
                <People />
            </ListItemIcon>
            <ListItemText primary="friends" />
            {this.state.freind_navigationOpen ? (
                <ExpandLess />
              
            ) : (
                <ExpandMore />
            )}
        </ListItem>
        {friends.map((item, index) => (
           <Collapse
            in={this.state.freind_navigationOpen}
            timeout="auto"
            unmountOnExit
            >
            <List component="div" disablePadding style = {{cursor : "pointer"}}>
              {FriendContextmenu.call(this, item)}
            </List>
            </Collapse>
        ))}
    </List>)

}