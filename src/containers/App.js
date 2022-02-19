import React from 'react'

import logo from '../assets/img/logo.svg';
import Button from '../components/Button'
import Modal, { ModalHeader, ModalFooter, ModalBody } from '../components/Modal'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', (e)=>this.handleKeyDown(e))
    }

    handleKeyDown(e) {
        if (e.which === 27) this.setState({ isOpen: false })
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div className='container'>
                <h2>Modal ReactJs</h2>
                <Button variant="primary" onClick={this.toggleModal} >
                    Open Modal
                </Button>

                {/* Modal */}
                <Modal isOpen={this.state.isOpen} toggleModal={this.toggleModal}>
                    <ModalHeader
                        withCloseButton
                        title="React JS Modal"
                        onClickClose={this.toggleModal}
                    />
                    <ModalBody>
                        <img src={logo} alt="Logo" className='logo' />
                        <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                        desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <br />
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                        going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                        Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        <br />
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and
                        web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                        versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </ModalBody>
                    <ModalFooter
                        withCloseButton
                        onClickClose={this.toggleModal}
                    />
                </Modal>
            </div>
        )
    }
}

export default App