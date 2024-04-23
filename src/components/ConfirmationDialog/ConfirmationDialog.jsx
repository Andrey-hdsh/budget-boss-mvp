import { Icon } from 'components/Icon';
import {
  CancelButton,
  CloseIcon,
  ConfirmationButton,
  ContainerConfirmationDialog,
  ContainerModal,
  TextQuestion,
  WrapperButton,
} from './ConfirmationDialog.styled';
import { useNavigate } from 'react-router-dom';



export const ConfirmationDialog = ({onCloseModal}) => {

  const navigate = useNavigate();


  const handleConfirm = () => {
    navigate('/register');
    onCloseModal();
  }
  return (
<ContainerModal>
<ContainerConfirmationDialog>
      <CloseIcon onClick={onCloseModal}>
        <Icon iconid="icon-close" width={12} height={12} />
      </CloseIcon>
      <TextQuestion>Do you really want to leave?</TextQuestion>
      <WrapperButton>
        <ConfirmationButton type='button' onClick={handleConfirm}>YES</ConfirmationButton>
        <CancelButton type='button' onClick={onCloseModal}>NO</CancelButton>
      </WrapperButton>
    </ContainerConfirmationDialog>
</ContainerModal>
  )
};
