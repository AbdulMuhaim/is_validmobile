
function is_validmobile(mobileNumber) {
    const mobileNumberPattern = /^\d{10}$/;
    const isValid = mobileNumberPattern.test(mobileNumber);
    return isValid;
  }
  
 module.exports = is_validmobile