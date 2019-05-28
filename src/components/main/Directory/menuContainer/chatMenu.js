import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { ExpandMore, ExpandLess, Chat} from "@material-ui/icons";
import {handleDrawerOpen} from "../handler";

export function getChatMenu () {
    const { classes } = this.props;

return( <List className={classes.list} >
    <ListItem
        button
        onClick={event => {
            handleDrawerOpen.call(this);
        }}
    >
        <ListItemIcon>
            <Chat />
        </ListItemIcon>
        <ListItemText primary="Chats" />
        {true ? (
            <ExpandLess />
          
        ) : (
            <ExpandMore />
        )}
    </ListItem>
    
</List>)
}