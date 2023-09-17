const LocationBiz = require('../biz/location.biz');

async function captureLocation(request, response) {
  try {
    const { userId, latitude, longitude } = request.body;
    const timestamp = new Date();
    const locationBiz = new LocationBiz();
    await locationBiz.saveLocation({ userId, latitude, longitude, timestamp });
    response.status(201).json({ message: 'Location data captured successfully' });
  } catch (error) {
    const statusCode = error?.status;
    if (statusCode >= 100 && statusCode <= 600) {
      return response.status(statusCode).json({
        message: error.message,
        success: false,
      });
    } else {
      return response.status(500).json({
        message: error.message,
        success: false,
      });
    }
  }
}

module.exports = { captureLocation };
