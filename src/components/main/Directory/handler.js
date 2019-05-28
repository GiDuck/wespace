
    export function handlePublicClick() {
        this.setState(state => ({
            public_navigationOpen: !state.public_navigationOpen
        }));
    };
    export function handlePrivateClick() {
        this.setState(state => ({
            private_navigationOpen: !state.private_navigationOpen
        }));
    };
    export function handleFreindClick () {
        this.setState(state => ({
            freind_navigationOpen: !state.freind_navigationOpen
        }));
    };
    export function handleDrawerOpen () {
        console.log("wis")
        console.log(this.state);

        console.dir(this.setState);
        (()=>{this.setState({ open: true });})(this);
        
        console.log(this.state);

    };
    export function handleDrawerClose () {
        this.setState({ open: false });
        this.setState({ SubOpen: false });
        this.setState({ private_navigationOpen: false });
        this.setState({ public_navigationOpen: false });
        this.setState({ freind_navigationOpen: false });
    };
    export function  handleSubDrawerOpen () {

        this.setState({ SubOpen: true });
    };
    export function handleSubDrawerClose () {
        this.setState({ SubOpen: false });
    };
 /** [main navigation] handling folder modal */

 export function handleSetModal(array,action,data,text){
        this.setState({
            [array[0]]: true,
            modal_icon: array[1],
            modal_title: array[2],
            modal_content: array[3],
            btn_name: array[4],
            modalAction:action,
            modal_data:data,
            modal_text:text
        });
    }
    export function handleUnSetModal(type){
        this.setState({
            [type]: false
        });
    }

    export function handleFolderData(folder_id, folder_name){
        this.setState({folder_id: folder_id , folder_name: folder_name });
        this.props.setFolder(folder_id);
    };
    
    export function handleNoteData (note_id, note_name,note_content) {
        this.setState({note_id: note_id , note_name: note_name });
        this.props.setNote(note_content);
    };

    export function handleFriendData(friend_id, friend_name, note_content) {
        this.setState({friend_id: friend_id , friend_name: friend_name });
    };

    export function handleChatDrawerOpen (){
        this.setState({ SubOpen: false });
        this.setState({ ChatOpen: true });
    };

    export function handleChatDrawerClose () {
        this.setState({ ChatOpen: false });
    }