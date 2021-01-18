import { Notification } from 'element-ui';

export default class ErrorService {
  static onError(error) {
    const { response } = error;
    if (response && response.status > 399 && response.status < 500) {
      this.logHTTPError(error);
      return;
    }

    this.logRuntimeError(error);
  }

  static onWarn(error) {
    this.logWarningsAndInfo(error);
  }

  static onInfo(error) {
    this.logWarningsAndInfo(error);
  }

  static initHandler() {
    window.onerror = (message, url, lineNo, columnNo, error) => {
      if (error) {
        this.onError(error);
        // console.log(message, url, lineNo, columnNo, error); // TODO : handle error with additional details
      }
    };
  }

  static displayErrorAlert(message) {
    Notification.error(message);
  }

  static logHTTPError(error) {
    // TODO : Integrate remote log Engine here
    /* eslint-disable no-console */ // TODO : should be removed no-console bypass once after integrating remote logger
    console.log(error);
    /* eslint-enable no-console */ // TODO : should be removed no-console bypass once after integrating remote logger
  }

  static logRuntimeError(error) {
    // TODO : Integrate remote log Engine here
    /* eslint-disable no-console */ // TODO : should be removed no-console bypass once after integrating remote logger
    console.log(error);
    /* eslint-enable no-console */ // TODO : should be removed no-console bypass once after integrating remote logger
  }

  static logWarningsAndInfo(error) {
    // TODO : Integrate remote log Engine here
    /* eslint-disable no-console */ // TODO : should be removed no-console bypass once after integrating remote logger
    console.log(error);
    /* eslint-enable no-console */ // TODO : should be removed no-console bypass once after integrating remote logger
  }
}
