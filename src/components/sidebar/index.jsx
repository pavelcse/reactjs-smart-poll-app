import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Input, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

import PollList from "./poll-list";
import PollForm from "../poll-form";

class Sidebar extends Component {

    state = {
        openModal: false
    };

    toggleModal = () => {
        this.setState({openModal: !this.state.openModal})
    };

    render() {
        const { searchTerm, handleSearch, polls, selectPoll, addNewPoll } = this.props;
        return (
            <div style={{background: '#efefef',padding: '10px'}}>
                <div className='d-flex mb-5'>
                    <Input
                        type='search'
                        placeholder='Search'
                        value={searchTerm}
                        onChange={e => handleSearch(e.target.value)}
                    />

                    <Button
                        color='success'
                        className='ml-2'
                        onClick={this.toggleModal}
                    >
                        New
                    </Button>
                </div>
                <h3>List of Polls</h3>
                <hr/>
                <PollList
                    polls={polls}
                    selectPoll={selectPoll}
                />

                <Modal
                    isOpen={this.state.openModal}
                    toggle={this.toggleModal}
                    unmountOnClose={true}
                >
                    <ModalHeader toggle={this.toggleModal}>
                        Create a New Poll
                    </ModalHeader>
                    <ModalBody>
                        <PollForm submit={addNewPoll} />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

Sidebar.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    polls: PropTypes.array.isRequired,
    selectPoll: PropTypes.func.isRequired,
    addNewPoll: PropTypes.func.isRequired
};

export default Sidebar;