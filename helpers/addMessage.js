import ErrorMessage from "./ErrorMesage";

const addMessage = (data = null, message = null) => {
  let TemporaryMessage = message;
  if (message !== null) {
    message = ErrorMessage.find(messageConstant => messageConstant.ERROR_MESSAGE === message);
    if (message === undefined) {
      message = TemporaryMessage;
    } else {
      message = message.TRANSLATED;
    }
  }
  return { data, message };
}

export default addMessage