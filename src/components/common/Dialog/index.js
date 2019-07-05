import React from 'react';
import PropTypes from 'prop-types';
import { Dialog as BluePrintDialog, Classes } from '@blueprintjs/core';

function Dialog({
  title, body, footer, canOutsideClickClose, isOpen, onClose,
}) {
  return (
    <BluePrintDialog
      className="dialog"
      onClose={onClose}
      title={title}
      canOutsideClickClose={canOutsideClickClose}
      isOpen={isOpen}
    >
      <div className={Classes.DIALOG_BODY}>
        {body}
      </div>
      <div className={Classes.DIALOG_FOOTER}>
        {footer}
      </div>
    </BluePrintDialog>
  );
}

Dialog.propTypes = {
  title: PropTypes.string,
  body: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
  ]),
  canOutsideClickClose: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

Dialog.defaultProps = {
  title: '',
  body: '',
  footer: '',
  canOutsideClickClose: false,
  isOpen: false,
  onClose: undefined,
};

export default React.memo(Dialog);
