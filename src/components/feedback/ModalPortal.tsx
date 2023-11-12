import { createPortal } from 'react-dom';
import FeedbackModal from '@/components/feedback/FeedbackModal';

type modalPortalType = {
  opened: boolean;
  onClose: () => void;
}

export default function ModalPortal(props : modalPortalType) {
  const {opened, onClose } = props;

  return opened ?
    createPortal (
      <FeedbackModal onClose={onClose} />,
      document.body
    ) 
  : null;
}