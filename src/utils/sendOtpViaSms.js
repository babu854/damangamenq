import axios from "axios";

async function sendOtpViaSMS(phone, otp, timeEnd, res) {
  try {
    const response = await axios.get(
      `https://www.fast2sms.com/dev/bulkV2?authorization=izN2PrfjOg40tJvwWkBa59TyoDEnhVM7Zp3GCSAlm1FYebQLIxTJnRY8drPMLSuqcOVQslB4h23Zv96E&variables_values=${otp}&route=otp&numbers=${phone}`
    );

    const data = response.data;
    //console.log(data.message);
    return data;
  } catch (error) {
    //console.error("Error sending SMS:", error.message);
    // throw error; // Rethrow the error for the main catch block
    //console.log(error?.response?.data?.status_code);
    if (error?.response?.data?.status_code === 995) {
      return res.status(400).json({
        message:
          "Sorry, you have exceeded the maximum limit for OTP requests. Please try again later.",
        status: false,
      });
    }
  }
}

export default sendOtpViaSMS;
