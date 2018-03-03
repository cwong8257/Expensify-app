import React from 'react';
import Modal from 'react-modal';

class RemoveExpenseModal extends React.Component {
  componentWillMount() {
    Modal.setAppElement('body');
  }
  render() {
    const { isOpen, handleCloseRemoveExpenseModal, handleRemoveExpense } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseRemoveExpenseModal}
        contentLabel="Confirmation"
        closeTimeoutMS={200}
        className="modal"
      >
        <h3 className="modal__title">Remove this expense?</h3>
        <div className="modal__buttons">
          <button className="button" onClick={handleCloseRemoveExpenseModal}>
            Cancel
          </button>
          <button className="button button--warning" onClick={handleRemoveExpense}>
            Yes
          </button>
        </div>
      </Modal>
    );
  }
}

export default RemoveExpenseModal;
