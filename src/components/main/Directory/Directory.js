import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "../../../styles/contextMenu.css";
import {styles} from "./styles.js";
import {getMainDrawer} from "./drawer/MainDrawer.js";
import {getSubDrawer} from "./drawer/SubDrawer.js"



class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false, SubOpen: false,
            public_navigationOpen: false, private_navigationOpen: false,freind_navigationOpen: false,
            folder_id : 0, folder_name : '',
            note_id : 0, note_name: '',
            oneInputModal: false, noticeModal: false, selectModal: false, askShareModal: false,
            modalAction:null,
            modal_text:'', modal_data:0, modal_icon: '', modal_title: '', modal_content: '', btn_name:'',
        };
    }

    render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.root}>
                {getMainDrawer.call(this)}
                {getSubDrawer.call(this)}
            </div>
        );
    }
}

Directory.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Directory);
