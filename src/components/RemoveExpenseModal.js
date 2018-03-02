import React from 'react';
import Modal from 'react-modal';

const RemoveExpenseModal = props => (
  <Modal
    isOpen={props.isOpen}
    onRequestClose={props.handleCloseRemoveExpenseModal}
    contentLabel="Confirmation"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Remove this expense?</h3>
    <div className="modal__buttons">
      <button className="button" onClick={props.handleCloseRemoveExpenseModal}>
        Cancel
      </button>
      <button className="button button--warning" onClick={props.handleRemoveExpense}>
        Yes
      </button>
    </div>
  </Modal>
);

export default RemoveExpenseModal;
