import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IconContext } from "react-icons";
import { FaRegCheckCircle } from "react-icons/fa";
import { ToastText } from "./styles";

const ToastMessage = () => (
  <IconContext.Provider
    value={{
      color: "white",
      size: "3rem",
    }}
  >
    <FaRegCheckCircle />
    <ToastText>Skatepark Added</ToastText>
  </IconContext.Provider>
);

const options = {
  onClose: () => (window.location.href = "/"),
  position: "top-center",
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const notifyCreateSuccess = () =>
  toast.success(<ToastMessage />, options);
