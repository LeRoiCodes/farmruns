import { createContext, useContext, useState } from "react";

export const ModalContext = createContext(null);

export const ModalContextProvider = ({ children }) => {
  const [showListingModal, setShowListingModal] = useState(false);

  const value = {
    showListingModal,
    setShowListingModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
