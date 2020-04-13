import React, {Component} from "react";
import {Modal, ModalHeader, ModalBody} from 'reactstrap';

import ParticipationForm from "./participate-form";
import PollForm from "../poll-form";

class MainContent extends Component {
    state = {
        openModal: false
    };

    toggleModal = () => {
        this.setState({
            openModal: !this.state.openModal
        })
    };

    render() {
        if(Object.keys(this.props.poll).length === 0) {
            return (
                <div>
                    <h3>Welcome TO My Application</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at dolor eligendi fugit ipsa labore magnam natus
                        nostrum possimus quibusdam quidem sapiente, sint sunt ullam ut. Dignissimos eius nostrum ullam!
                        Asperiores at aut consequuntur cum exercitationem ipsam nesciunt quae quasi ratione veniam. Aspernatur eaque, ratione.
                        Deserunt ea est hic laborum perspiciatis! Ad culpa doloremque officia perferendis quaerat rem sunt veritatis?
                        Deserunt facilis laboriosam perspiciatis. Alias, asperiores blanditiis deleniti deserunt dolor doloremque impedit ipsum
                        itaque, magni molestiae mollitia natus necessitatibus neque placeat quae quod velit. Architecto libero
                        nemo odio quas quisquam?
                    </p>
                </div>
            );
        }

        const { poll, getOpinion, updatePoll, deletePoll } = this.props;
        return (
            <div>
                <h3>{poll.title}</h3>
                <p>{poll.description}</p>
                <br/>

                <ParticipationForm
                    poll={poll}
                    getOpinion={getOpinion}
                    toggleModal={this.toggleModal}
                    deletePoll={deletePoll}
                />

                <Modal
                    isOpen={this.state.openModal}
                    toggle={this.toggleModal}
                    unmountOnClose={true}
                >
                    <ModalHeader toggle={this.toggleModal}>
                        Update Poll
                    </ModalHeader>
                    <ModalBody>
                        <PollForm
                            poll={poll}
                            isUpdate={true}
                            submit={updatePoll}
                            buttonValue='Update Poll'
                        />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default MainContent;