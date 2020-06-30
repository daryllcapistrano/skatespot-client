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
      // className: "global-class-name",
    }}
  >
    <FaRegCheckCircle />
    <ToastText>Skatepark Deleted</ToastText>
  </IconContext.Provider>
);

export const notifyDeleteSuccess = () =>
  toast.success(
    <ToastMessage />,
    { onClose: () => (window.location.href = "/skateparks/list") },
    {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
