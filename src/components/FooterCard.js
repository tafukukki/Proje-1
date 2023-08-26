import * as React from "react";
import Box from "@mui/joy/Box";

export default function FooterCard() {
  return (
    <div>
      <Box
        sx={{
          width: "400px",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          textAlign: "left",
          marginRight: "100px",
          backgroundColor: "pink",
        }}
      >
        <img
          src={
            "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
          }
          alt="Logo"
          style={{ marginBottom: "10px" }}
        />
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
        <h3>Accepted Payments</h3>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {[
            "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8816711ebecac46d8_stripe.png",
            "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce82d440b7ab84a993f_visa.png",
            "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8f032504012a5896b_Mastercard.png",
            "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e6ce846b7ff_Amazon.png",
            "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f054e419e42aca4a9a2_Klarna.png",
            "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce7c4510cf9a55828a0_PayPal.png",
            "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4707380264b25e680_ApplePay.png",
            "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f55dc68c5ee83d0cbf8_GooglePay.png",
          ].map((logoSrc) => (
            <img
              src={logoSrc}
              alt="Payment Logo"
              key={logoSrc}
              style={{
                maxWidth: "calc(20% - 1px)",
                maxHeight: "50px", // Example value, adjust as needed
                border: "1px solid gray",
                borderColor: "gray",
                borderRadius: "4px",
                padding: "5px",
              }}
            />
          ))}
        </div>
      </Box>
    </div>
  );
}
