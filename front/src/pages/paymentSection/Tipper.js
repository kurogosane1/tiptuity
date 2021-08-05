import React, { useState, useRef, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

// Import styles componenents
import {
  MainContainer,
  TipContainer,
  InputContainer,
  InputLabel,
  InputText,
  SolidButtons2,
  TipRow,
  TipCol,
  TipButtons,
} from "../../style";
import Card from "./Card";
import Modal from "../../components/Modal/Modal";

function Tipper(props) {
  let history = useHistory();
  // TODO Adding an image source from collection
  const [tipAmount, SetTipAmount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const [success, setSuccess] = useState();
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(false);

  //Formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const CardHolderName = useRef();
  const CardBillingAddress = useRef();
  const CardBillingAddress2 = useRef();
  const CardCity = useRef();
  const CardZipCode = useRef();

  const stripe = useStripe();
  const element = useElements();

  // This is the payment processing function
  const PaymentProcess = async (e) => {
    if (confirm) {
      const cardElement = element.getElement("card");
      const Billing = {
        amount: tipAmount,
        client_id: "0181a2f1-ee2c-41e4-a022-cc764ca6cdad",
        emp_id: "id",
        customer_name: "businessname",
        billing_details: {
          city: CardCity.current.value,
          country: "US",
          line1: CardBillingAddress.current.value,
          line2: CardBillingAddress2.current.value,
          postal_code: CardZipCode.current.value,
          state: "TX",
        },
      };

      try {
        const paymentIntent = await axios
          .post(props.match.url, Billing)
          .then((res) => res.data);
        console.log(paymentIntent);
        // Create PaymentMethod Object
        const paymentMethodObj = await stripe
          .createPaymentMethod({
            type: "card",
            card: cardElement,
            billing_details: Billing.billing_details,
          })
          .then((res) => {
            if (res.error) {
              console.log(res.error);
            } else {
              return res;
            }
          });

        console.log(paymentMethodObj);
        // Confirm Payment Method
        const confirmPayment = await stripe
          .confirmCardPayment(paymentIntent, {
            payment_method: paymentMethodObj.paymentMethod.id,
          })
          .then((response) => response);

        console.log(confirmPayment);
        if (confirmPayment.error) {
          console.log(confirmPayment.error);
        }
        if (confirmPayment.paymentIntent.status === "succeeded") {
          setSuccess(true);
        } else {
          setSuccess(false);
        }
      } catch (error) {
        console.log(error);
        setSuccess(false);
      }
    }
  };

  useEffect(() => {
    setLoading(true);

    const getData = () => {
      axios
        .get(props.match.url, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.message === "Person not found") {
            history.push("/");
          }
          setInfo({ ...res.data.data });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
    setLoading(false);
  }, [props.match.url, history]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <MainContainer>
      <TipContainer>
        <div>
          <img src={info ? info.image : ""} alt="userprofile" />
        </div>
        <TipRow>
          <TipCol>
            <InputContainer>
              <InputLabel htmlFor="text">Cardholder Name</InputLabel>
              <InputText type="text" ref={CardHolderName} />
            </InputContainer>
            <InputContainer>
              <InputLabel htmlFor="text">Billing Address</InputLabel>
              <InputText type="text" ref={CardBillingAddress} />
            </InputContainer>
            <InputContainer>
              <InputLabel htmlFor="text">Billing Address 2</InputLabel>
              <InputText type="text" ref={CardBillingAddress2} />
            </InputContainer>
            <InputContainer>
              <InputLabel htmlFor="text">City</InputLabel>
              <InputText type="text" ref={CardCity} />
            </InputContainer>
            <InputContainer>
              <InputLabel htmlFor="number">Zip Code</InputLabel>
              <InputText type="number" min="1" max="5" ref={CardZipCode} />
            </InputContainer>
            <InputContainer>
              <InputLabel>Card Information</InputLabel>
              <Card />
            </InputContainer>
          </TipCol>
          <TipCol>
            <h1>
              {info ? info.firstname : "John"} {info ? info.lastname : "Doe"}
            </h1>
            <span>Thank you for Tipping. Really appreciate it </span>
            <h3 style={{ textAlign: "left" }}>Note:</h3>
            <span>For Demo Purpose</span>
            <span>Use card number 4242-4242-4242-4242 and</span>
            <span>any date and any late date for CVC for demo purpose</span>
            <div style={{ flex: 1 }}></div>
            <h1>Tip Amount: ${tipAmount}</h1>
            <TipRow>
              <TipButtons onClick={() => SetTipAmount(1)}>$1</TipButtons>
              <TipButtons onClick={() => SetTipAmount(5)}>$5</TipButtons>
              <TipButtons onClick={() => SetTipAmount(10)}>$10</TipButtons>
              <TipButtons onClick={() => SetTipAmount(20)}>$20</TipButtons>
            </TipRow>
            <InputContainer>
              <InputLabel htmlFor="number">Other Amount</InputLabel>
              <InputText
                type="number"
                min="1"
                max="5"
                onChange={(e) =>
                  SetTipAmount(
                    e.target.value === null ? 0 : parseInt(e.target.value)
                  )
                }
              />
            </InputContainer>
          </TipCol>
        </TipRow>
        <div>
          <SolidButtons2 disabled={tipAmount === 0 ? true : false}>
            Process Payment
          </SolidButtons2>
        </div>
      </TipContainer>
      {modalOpen && (
        <Modal
          tipAmount={tipAmount}
          formatter={formatter}
          setModalOpen={setModalOpen}
          setConfirm={setConfirm}
          PaymentProcess={PaymentProcess}
        />
      )}
    </MainContainer>
  );
}

export default withRouter(Tipper);
