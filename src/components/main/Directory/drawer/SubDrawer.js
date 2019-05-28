import React from "react";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import {ChevronRight, ChevronLeft,NoteAdd, Create, Share, Lock} from "@material-ui/icons";
import "../../../../styles/contextMenu.css";
import { modalList } from "../../../modal/modalData.js";
import {FileContextmenu} from "../contextMenu/contextMenu";
import {handleSetModal, handleSubDrawerClose } from "../handler.js";


export function getSubDrawer(){
    const { classes, theme, noteList = [], createNote } = this.props; 
    return(         <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.SubDrawerClose]: !this.state.SubOpen
                    })}
                    classes={{
                        paper: classNames( {
                            [classes.SubDrawerOpen]: this.state.SubOpen,
                            [classes.SubDrawerClose]: !this.state.SubOpen
                        }),
                    }}
                    open={this.state.SubOpen}>

                    <div className={classes.toolbar}>
                        <div>                                                            
                            <IconButton>   
                                <NoteAdd color="primary" onClick={(e)=>handleSetModal.call(this, modalList[4],createNote, this.state.folder_id, '')} />
                            </IconButton>

                            <IconButton>   
                                <Create color="primary" onClick={(e)=>this.handleModifyFileName} />
                            </IconButton>
                            
                            <IconButton>
                                <Share color="primary" onClick={(e)=>this.handleNoteExportPdf} />
                            </IconButton>

                            <IconButton>   
                                <Lock color="primary" onClick={(e)=>this.handleAccessToFile} />
                            </IconButton>

                            <IconButton
                                onClick={(e)=>handleSubDrawerClose.call(this)}
                                className={classNames(classes.menuButton)}
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
                    <List>
                        {noteList.map(item => {return FileContextmenu.call(this, item)})}
                    </List>
                    </div>
                </Drawer>)
}