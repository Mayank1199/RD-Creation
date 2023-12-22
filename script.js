// function sendEmail() {
//   emailjs.init("mayankprajapati1199@gmail.com"); // Replace with your Email.js user ID

//   const form = document.getElementById("emailForm");
//   const formData = new FormData(form);

//   emailjs
//     .sendForm(
//       "service_your_emailjs_service_id",
//       "template_your_emailjs_template_id",
//       formData
//     )
//     .then(
//       function (response) {
//         console.log("Email sent successfully:", response);
//         alert("Email sent successfully!");
//       },
//       function (error) {
//         console.error("Email sending failed:", error);
//         alert("Email sending failed. Please try again later.");
//       }
//     );
// }
