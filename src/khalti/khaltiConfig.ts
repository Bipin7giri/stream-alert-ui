/** @format */
// @ts-ignore
import KhaltiCheckout from "khalti-checkout-web";
let config = {
  // replace this key with yours
  publicKey: "test_public_key_86b647c1a4004b5db9321a90a93e9074",
  productIdentity: "1234567",
  productName: "Multishop",
  productUrl: "http://127.0.0.1:3000",
  eventHandler: {
    async onSuccess(payload: any) {
      // hit merchant api for initiating verfication
      debugger;
    },
    // onError handler is optional
    onError(error: any) {
      // handle errors
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};
export default config;
