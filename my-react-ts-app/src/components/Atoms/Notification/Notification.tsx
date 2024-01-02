import { FC, useEffect } from "react";
import { NotificationWrapper } from "./Notification.styled";
import ScreenDimmer from "../ScreenDimmer/ScreenDimmer";

interface NotificationProps {
  message: string;
  $backgroundColor: string;
  setShowNotification: (value: boolean) => void;
  showNotification: boolean;
}
const Notification: FC<NotificationProps> = ({
  message,
  $backgroundColor,
  setShowNotification,
  showNotification,
}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNotification(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return showNotification ? (
    <ScreenDimmer>
      <NotificationWrapper
        isVisible={showNotification}
        $backgroundColor={$backgroundColor}
      >
        <div className="message">{message}</div>
      </NotificationWrapper>
    </ScreenDimmer>
  ) : null;
};

export default Notification;
