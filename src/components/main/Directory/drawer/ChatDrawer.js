import React from "react";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { ChevronLeft, ChevronRight, NoteAdd} from "@material-ui/icons";

import './Contextmenu.css';
import ChatBox from './chat/chat';


export function getChatDrawer(){
    const { classes, theme } = this.props;

    return(<Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
            [classes.ChatDrawerClose]: !this.state.ChatOpen
        })}
        classes={{
            paper: classNames( {
                [classes.ChatDrawerOpen]: this.state.ChatOpen,
                [classes.ChatDrawerClose]: !this.state.ChatOpen
            }),
        }}
        open={this.state.ChatOpen}>
        <div className={classes.toolbar} style={{marginRight: 6}}>
            <div>
                {/* 친구 추가 모달생성 */}
                <IconButton onClick={null}>   
                    <NoteAdd color="primary" />
                </IconButton>

                <IconButton disabled/>
                <IconButton disabled/>
                <IconButton disabled/>
                <IconButton disabled/>
                <IconButton disabled/>
                <IconButton disabled/>
                
                <IconButton
                    onClick={this.handleChatDrawerClose}
                >
                    {theme.direction === "rtl" ? (
                        <ChevronRight />
                    ) : (
                        <ChevronLeft />
                    )}
                </IconButton>
            </div>
        </div>
        <Divider />
        <div className={classes.drawerOverflow}>
            <ChatBox/>
        </div>                        

    </Drawer>)
}