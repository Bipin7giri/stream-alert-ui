// // "use client";
// // import { useEffect, useState } from "react";
// // // // @ts-ignore
// // // import KhaltiCheckout from "khalti-checkout-web";
// // export default function KhaltiComponents() {
// //   const [checkout, setCheckout] = useState<any>();
// //   //   useEffect(() => {
// //   //     // Check if window is defined (runs only on the client-side)
// //   //     if (typeof window !== "undefined") {
// //   //       // Code that needs window object can go here
// //   //       let config = {
// //   //         // replace this key with yours
// //   //         publicKey: "test_public_key_86b647c1a4004b5db9321a90a93e9074",
// //   //         productIdentity: "1234567",
// //   //         productName: "Multishop",
// //   //         productUrl: "http://127.0.0.1:3000",
// //   //         eventHandler: {
// //   //           onSuccess(payload: any) {
// //   //             // hit merchant api for initiating verfication
// //   //             console.log(payload);

// //   //             const { idx } = payload;
// //   //           },
// //   //           // onError handler is optional
// //   //           onError(error: any) {
// //   //             // handle errors
// //   //             console.log(error);
// //   //           },
// //   //           onClose() {
// //   //             console.log("widget is closing");
// //   //           },
// //   //         },
// //   //         paymentPreference: [
// //   //           "KHALTI",
// //   //           "EBANKING",
// //   //           "MOBILE_BANKING",
// //   //           "CONNECT_IPS",
// //   //           "SCT",
// //   //         ],
// //   //       };
// //   //       let checkout = new KhaltiCheckout(config);
// //   //       setCheckout(checkout);
// //   //       // You might want to do something with `checkout` here, like storing it in a state
// //   //     }
// //   //   }, []); // Empty dependency array means this useEffect runs only once after the component mounts

// //   return (
// //     <div className="bg-red-900">
// //       <button
// //         onClick={() => {
// //           // You can place client-side code here
// //           //   checkout.show({ amount: 2000 });
// //         }}
// //       ></button>
// //     </div>
// //   );
// // }

// "use client";
// import React, { useEffect, useState } from "react";
// // @ts-ignore
// import KhaltiCheckout from "khalti-checkout-web";
// import { config } from "process";
// const Khalti = () => {
//   const [checkout, setCheckout] = useState<any>();
//   useEffect(() => {
//     // Check if window is defined (runs only on the client-side)
//     if (typeof window !== "undefined") {
//       // Code that needs window object can go here
//       let config = {
//         // replace this key with yours
//         publicKey: "test_public_key_01bbd7a62fd94b3895aadda4f9ab78fe",
//         productIdentity: "1234567",
//         productName: "Multishop",
//         productUrl: "http://127.0.0.1:3000",
//         eventHandler: {
//           onSuccess(payload: any) {
//             // hit merchant api for initiating verfication
//             console.log(payload);

//             const { idx } = payload;
//           },
//           // onError handler is optional
//           onError(error: any) {
//             // handle errors
//             console.log(error);
//           },
//           onClose() {
//             console.log("widget is closing");
//           },
//         },
//         paymentPreference: [
//           "KHALTI",
//           "EBANKING",
//           "MOBILE_BANKING",
//           "CONNECT_IPS",
//           "SCT",
//         ],
//       };
//       let checkout = new KhaltiCheckout(config);
//       setCheckout(checkout);
//       // You might want to do something with `checkout` here, like storing it in a state
//     }
//   }, []); // Empty dependency array means this useEffect runs only once after the component mounts

//   return (
//     <div>
//       <h1>hello</h1>
//       <button
//         className="bg-purple-600 p-6"
//         onClick={() => {
//           checkout.show({ amount: 2000 });
//         }}
//       >
//         pay
//       </button>
//     </div>
//   );
// };

// export default Khalti;
