import {
  DividingLine,
  ExitButton,
  HeaderComponent,
  ImgLogo,
  TextExitButton,
  Wrapper,
  WrapperLogoUser,
  WrapperUser,
} from './header.styled';
import logoPng from '../../img/logo 1x.png';
import { Icon } from 'components/Icon';
import { useEffect, useState } from 'react';
// import { ModalExit } from 'components/ModalExit/ModalExit';
import Modal from "react-modal"
import { ConfirmationDialog } from 'components/ConfirmationDialog/ConfirmationDialog';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid',
    borderRadius: '12px',
    borderColor: 'rgba(239, 237, 232, 0.2)',
    backgroundColor: 'rgba(16, 16, 15, 1)',
    padding: 0,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.707)',
    zIndex: 1001,
  },
};


Modal.setAppElement('#root');


export const Header = () => {
  const [isMobile, setisMobile] = useState(window.innerWidth <= 767);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setisMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <HeaderComponent>
      <Wrapper>
        <ImgLogo src={logoPng} alt="logo"></ImgLogo>
        <WrapperLogoUser>
          <WrapperUser>
            <p>U</p>
          </WrapperUser>
          {!isMobile && <p>User Name</p>}
          {isMobile ? (
            <ExitButton type="button" onClick={handleOpenModal}>
              <Icon width={16} height={16} iconid={'icon-logout'} />
            </ExitButton>
          ) : (
            <>
              <DividingLine />
              <TextExitButton type="button" onClick={handleOpenModal}>
                Exit
              </TextExitButton>
            </>
          )}
        </WrapperLogoUser>
      </Wrapper>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Modal Exit Form"
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
      ><ConfirmationDialog onCloseModal={handleCloseModal}/></Modal>
    </HeaderComponent>
  );
};
