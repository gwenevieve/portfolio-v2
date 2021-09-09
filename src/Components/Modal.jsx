import { useState } from "react";
import styled from "styled-components";
import AriaModal from "react-aria-modal";
import Button from "./Button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { send } from "emailjs-com";

const ContactModal = ({ modalActive, setModalActive }) => {
  const [formValues, setFormValues] = useState({
    firstName: { value: "", error: false, touched: false },
    lastName: { value: "", error: false, touched: false },
    email: { value: "", error: false, touched: false },
    phone: { value: "", error: false, touched: false },
    comments: { value: "" },
  });
  const [formSuccess, setFormSuccess] = useState(false);

  const phoneFormatter = (phoneNumber) => {
    if (phoneNumber.length <= 10) {
      var number = phoneNumber.replace(/[^\d]/g, "");
      setFormValues({
        ...formValues,
        phone: {
          value: number,
        },
      });
      if (number.length === 7) {
        setFormValues({
          ...formValues,
          phone: {
            value: number.replace(/(\d{3})(\d{4})/, "$1-$2"),
          },
        });
      } else if (number.length === 10) {
        setFormValues({
          ...formValues,
          phone: {
            value: number.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"),
          },
        });
      }
    } else {
      phoneNumber.slice(0, 10);
    }
  };

  const clearForm = () => {
    setFormValues({
      firstName: { value: "", error: false, touched: false },
      lastName: { value: "", error: false, touched: false },
      email: { value: "", error: false, touched: false },
      phone: { value: "", error: false, touched: false },
      comments: { value: "" },
    });
    setFormSuccess(false);
  };

  const submitForm = () => {
    console.log(formValues);
    // if (
    //   !formValues.firstName.value &&
    //   !formValues.lastName.value &&
    //   !formValues.email.value &&
    //   !formValues.phone.value
    // ) {
    //   setFormValues({ firstName: { error: true } });
    //   setFormValues({ lastName: { error: true } });
    //   setFormValues({ email: { error: true } });
    //   setFormValues({ phone: { error: true } });
    // } else {
    // Submit the form
    send(
      "service_prk7c2d",
      "template_k4ccoe5",
      formValues,
      "user_CjPTrPI4mvMSmkdfOAyvz"
    )
      .then(() => {
        setFormSuccess(true);
      })
      .catch((err) => {
        console.error("Send failed!", err);
      });
    // }
  };

  return modalActive ? (
    <AriaModal tabIndex="0" titleText="Contact modal">
      {formSuccess === true ? (
        <ModalContent>
          <ModalTop>
            <Heading>Success!</Heading>
            <Button
              type="button"
              icon={faTimes}
              handleClick={() => {
                setModalActive(!modalActive);
                clearForm();
              }}
            />
          </ModalTop>
          <Text>
            Your email has been sent. I'll get back to you in a day or two!
          </Text>
        </ModalContent>
      ) : (
        <ModalContent>
          <ModalTop>
            <Heading>Contact me</Heading>
            <Button
              type="button"
              icon={faTimes}
              handleClick={() => setModalActive(!modalActive)}
            />
          </ModalTop>
          <Form>
            <FormFields>
              <InputContainer>
                <Input
                  required
                  onChange={(e) => {
                    setFormValues({
                      ...formValues,
                      firstName: {
                        value: e.target.value,
                      },
                    });
                  }}
                  value={formValues.firstName.value}
                  placeholder="First Name"
                  type="text"
                  maxLength="25"
                />
                {/* {formValues.firstName.error === true ? (
                  <Error>Please enter your first name.</Error>
                ) : null} */}
              </InputContainer>
              <InputContainer>
                <Input
                  required
                  onChange={(e) => {
                    setFormValues({
                      ...formValues,
                      lastName: {
                        value: e.target.value,
                      },
                    });
                  }}
                  value={formValues.lastName.value}
                  placeholder="Last Name"
                  type="text"
                  maxLength="25"
                />
                {/* {formValues.lastName.error === true ? (
                  <Error>Please enter your last name.</Error>
                ) : null} */}
              </InputContainer>
              <InputContainer>
                <Input
                  onChange={(e) => {
                    setFormValues({
                      ...formValues,
                      email: {
                        value: e.target.value,
                      },
                    });
                  }}
                  value={formValues.email.value}
                  placeholder="Email"
                  type="email"
                />
                {/* {formValues.email.error === true ? (
                  <Error>Please enter an email.</Error>
                ) : null} */}
              </InputContainer>
              <InputContainer>
                <Input
                  onChange={(e) => {
                    // setFormValues({
                    //   ...formValues,
                    //   phone: {
                    //     value: e.target.value,
                    //   },
                    // });
                    phoneFormatter(e.target.value);
                  }}
                  value={formValues.phone.value}
                  placeholder="Phone"
                  type="num"
                />
                {/* {formValues.phone.error === true ? (
                  <Error>Please enter a phone number.</Error>
                ) : null} */}
              </InputContainer>
            </FormFields>
            <Comments
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  comments: {
                    value: e.target.value,
                  },
                });
              }}
              rows="4"
              placeholder="Comments"
              type="text"
            />
            <Button
              modal={true}
              handleKeyDown={(e) => {
                e.preventDefault();
                if (e.keyCode === 13) {
                  submitForm();
                }
              }}
              handleClick={(e) => {
                e.preventDefault();
                submitForm();
              }}
              type="submit"
              text="Send"
            />
          </Form>
        </ModalContent>
      )}
    </AriaModal>
  ) : null;
};

const ModalContent = styled.div`
  background-color: #ffffff;
  width: 500px;
  margin-top: 40px;
  padding: 40px;
  border-radius: 5px;
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Form = styled.form`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;

const FormFields = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Heading = styled.h4`
  color: #1b1b1b;
  font-size: 30px;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  line-height: 34px;
  margin: 0;
`;

const Text = styled.p`
  font-size: 18px;
  font-family: "Lato", sans-serif;
`;

const Input = styled.input`
  font-family: "Lato", sans-serif;
  font-size: 18px;
  padding: 10px 8px;
  margin-bottom: 18px;
  border: 1px solid #1b1b1b;
  border-radius: 2px;
  ::placeholder,
  ::-moz-placeholder,
  ::-webkit-input-placeholder {
    font-size: 18px;
    color: #b3b1b1;
    font-weight: 300;
  }
`;

const InputContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
`;

const Error = styled.div`
  color: red;
`;

const Comments = styled.textarea`
  font-family: "Lato", sans-serif;
  padding: 8px;
  font-weight: 300;
  border: 1px solid #1b1b1b;
  border-radius: 2px;
  font-size: 18px;
  ::placeholder,
  ::-moz-placeholder,
  ::-webkit-input-placeholder {
    font-family: "Lato", sans-serif;
    color: #b3b1b1;
    font-size: 14px;
    font-weight: bolder;
  }
`;

export default ContactModal;
