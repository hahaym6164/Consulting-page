import React, { useEffect } from "react";
import Modal from "@mui/material/Modal";
import "./CopyModal.css";
import CheckIcon from "@mui/icons-material/Check";
type FuncProps = () => void;

interface ModalProps {
  open: boolean;
  func: FuncProps;
}
function CopyModal(props: ModalProps) {
  const { open, func } = props;
 
  return (
    <Modal open={open} onClose={func}>
      <div className="modal">
        <p>
          微信号已复制到粘贴板 <CheckIcon />
        </p>
      </div>
    </Modal>
  );
}

export default CopyModal;
