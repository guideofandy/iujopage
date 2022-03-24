import ErrorMessage from "./ErrorMesage";

const addMessage = (message = null, error = null) => {
  let TemporaryMessage = message;
  if (message !== null) {
    message = ErrorMessage.find(messageConstant => messageConstant.ERROR_MESSAGE === message);
    if (message === undefined || message === null) {
      message = TemporaryMessage;
    } else {
      message = message.TRANSLATED;
    }
  }
  return { message, error };
}

export default addMessage