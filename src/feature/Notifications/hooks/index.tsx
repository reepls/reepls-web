import { useContext } from "react";
import { NotificationContext } from "../../../context/NotificationContext/NotificationContext";


export const useNotificationsValues = () => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error("useNotifications must be used within a NotificationProvider");
  }

  return {
    ...context
  };
};


