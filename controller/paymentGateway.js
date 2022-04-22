const midtransClient = require("midtrans-client");

// Create Core API instance
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-qe8jT62utxvVQUaBq4EB3eLU",
  clientKey: "SB-Mid-client-ZJtSiJ7uIOZANusd",
});

class Controller {
  static async payment(req, res, next) {
    try {
      const {
        bookNumber,
        firstName,
        lastName,
        phoneNumber,
        email,
        addressLine,
        city,
        zipCode,
        payment,
      } = req.body;

      let parameter = {
        transaction_details: {
          order_id: bookNumber,
          gross_amount: payment,
        },
        customer_details: {
          first_name: firstName,
          last_name: lastName,
          email: email,
          phone: phoneNumber,
          billing_address: {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phoneNumber,
            address: addressLine,
            city,
            postal_code: zipCode,
            country_code: "IDN",
          },
        },
        credit_card: {
          secure: true,
        },
      };

      const transactionCreate = await snap.createTransaction(parameter);

      let token = transactionCreate.token;
      const urlDirect = transactionCreate;

      res.status(200).json({
        token,
        urlDirect,
      });
    } catch (err) {
      console.log(err);
    }
  }

  static async paymentSuccess(req, res, next) {
    try {
      console.log(req.body);
      res.send(req.body);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Controller;
