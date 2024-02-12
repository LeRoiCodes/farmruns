import { createContext, useContext, useState } from "react";

export const ModalContext = createContext(null);

export const ModalContextProvider = ({ children }) => {
  const [showListingModal, setShowListingModal] = useState(false);
  const [merchantDetails, setMerchantDetails] = useState(null);

  const [consumerCart, setConsumerCart] = useState([]);

  const value = {
    showListingModal,
    setShowListingModal,
    merchantDetails,
    setMerchantDetails,
    consumerCart,
    setConsumerCart,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
