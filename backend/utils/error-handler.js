const BaseException = require('../exception/base.exception');
const { ERROR_CODES } = require('../constants/tracker.constant');

const handleError = (error) => {
  if (error instanceof BaseException) {
    throw error;
  } else {
    const message = error.message;
    const code = error?.code || ERROR_CODES.CLIENT_ERROR_BAD_REQUEST;
    const status = error?.status || 500;
    throw new BaseException(message, code, status);
  }
};

module.exports = { handleError };
