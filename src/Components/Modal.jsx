import styled from "styled-components";
import AriaModal from "react-aria-modal";

const ContactModal = ({ modalActive, setModalActive }) => {
  return modalActive ? (
    <AriaModal tabIndex="0" titleText="Contact modal">
      <ModalContent>
        <button onClick={() => setModalActive(!modalActive)}>Close</button>
        <form>
          Test form
          <button>Send</button>
        </form>
      </ModalContent>
    </AriaModal>
  ) : (
    <></>
  );
};

const ModalContent = styled.div`
  background-color: #ffffff;
  margin-top: 40px;
  padding: 40px;
  border-radius: 5px;
`;

export default ContactModal;
