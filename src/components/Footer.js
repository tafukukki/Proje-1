import * as React from "react";
import Box from "@mui/joy/Box";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FooterCard from "./FooterCard";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  const footerData = [
    {
      title: "Department",
      data: [
        "Fashion",
        "Education",
        "Product",
        "Frozen Food",
        "Beverages",
        "Organic Grocery",
        "Office Supplies",
        "Beauty Products",
        "Books",
        "Electronics & Gadget",
        "Travel Accessories",
        "Fitness",
        "Sneakers",
        "Toys",
        "Furniture",
      ],
    },
    {
      title: "Department",
      data: [
        "Fashion",
        "Education",
        "Product",
        "Frozen Food",
        "Beverages",
        "Organic Grocery",
        "Office Supplies",
        "Beauty Products",
        "Books",
        "Electronics & Gadget",
        "Travel Accessories",
        "Fitness",
        "Sneakers",
        "Toys",
        "Furniture",
      ],
    },
  ];
  // footerData.map((item) => {
  //   return (
  //     <>
  //       <h2>{item.title}</h2>
  //       {item.data.map((itm) => (
  //         <li key={item}>
  //           <Link
  //             to={`/${item.toLowerCase().replace(/ /g, "-")}`}
  //             sx={{
  //               fontSize: "16px",
  //               textAlign: "left",
  //               fontFamily: "Inter, sans-serif",
  //               fontWeight: "700",
  //               color: `black`,
  //               textDecoration: "none",
  //               display: "block",
  //               transition: "transform 0.3s ease",
  //               "&:hover": {
  //                 color: "red",
  //                 textDecoration: "none",
  //                 transform: "translateX(30px)",
  //               },
  //             }}
  //           >
  //             {item}
  //           </Link>
  //         </li>
  //       ))}
  //     </>
  //   );
  // });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "1400px",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <Box>
        <FooterCard />
      </Box>
      <Box>
        <Typography
          fontSize="22px"
          level="body-sm"
          sx={{
            textAlign: "left",
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
            color: `black`,
            margin: `auto`,
            flexDirection: "row",
            marginRight: "80px",
          }}
        >
          Department
        </Typography>

        <ul
          style={{
            listStyleType: "none",
            paddingLeft: 0,
            paddingTop: 0,
            textAlign: "left",
          }}
        >
          {[
            "Fashion",
            "Education",
            "Product",
            "Frozen Food",
            "Beverages",
            "Organic Grocery",
            "Office Supplies",
            "Beauty Products",
            "Books",
            "Electronics & Gadget",
            "Travel Accessories",
            "Fitness",
            "Sneakers",
            "Toys",
            "Furniture",
          ].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                style={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                  color: `black`,
                  textDecoration: "none",
                  display: "block",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    color: "red",
                    textDecoration: "none",
                    transform: "translateX(30px)",
                  },
                }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </Box>
      <Box>
        <Typography
          fontSize="22px"
          level="body-sm"
          sx={{
            textAlign: "left",
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
            color: `black`,
            margin: `auto`,

            flexDirection: "row",
            marginRight: "80px",
          }}
        >
          About Us
        </Typography>

        <ul
          style={{
            listStyleType: "none",
            paddingLeft: 0,
            paddingTop: 0,
            textAlign: "left",
          }}
        >
          {[
            "About Shopcart",
            "Careers",
            "News & Blog",
            "Help",
            "Press Center",
            "Shop By Location",
            "Shopcart Brands",
            "Affiliate & Partners",
            "Ideas & Guides",
          ].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                sx={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                  color: `black`,
                  textDecoration: "none",
                  display: "block",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    color: "red",
                    textDecoration: "none",
                    transform: "translateX(30px)",
                  },
                }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </Box>
      <Box>
        <Typography
          fontSize="22px"
          level="body-sm"
          sx={{
            textAlign: "left",
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
            color: `black`,
            margin: `auto`,
            marginRight: "80px",
            flexDirection: "row",
          }}
        >
          Services
        </Typography>

        <ul
          style={{
            listStyleType: "none",
            paddingLeft: 0,
            paddingTop: 0,
            textAlign: "left",
          }}
        >
          {[
            "Gift Card",
            "Mobile App",
            "Shipping & Delivery",
            "Order Pickup",
            "Account Signup",
          ].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                sx={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                  color: `black`,
                  textDecoration: "none",
                  display: "block",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    color: "red",
                    textDecoration: "none",
                    transform: "translateX(30px)",
                  },
                }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </Box>
      <Box>
        <Typography
          fontSize="22px"
          level="body-sm"
          sx={{
            textAlign: "left",
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
            color: `black`,
            margin: `auto`,
            flexDirection: "row",
            marginRight: "80px",
          }}
        >
          Help
        </Typography>

        <ul
          style={{
            listStyleType: "none",
            paddingLeft: 0,
            paddingTop: 0,
            textAlign: "left",
          }}
        >
          {[
            "Shopcart Help",
            "Return",
            "Track Orders",
            "Contact Us",
            "Feedback",
            "Security & Fraud",
          ].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                style={{
                  textDecoration: "none",
                  fontSize: "16px",
                  textAlign: "left",
                  fontFamily: "Eina02, sans-serif",
                  fontWeight: "700",
                  color: `black`,

                  display: "block",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    color: "red",
                    transform: "translateX(30px)",
                  },
                }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </Box>

      <hr
        style={{
          width: "1400px",
          color: "gray",
          marginTop: "100px",
          marginBottom: "50px",
        }}
      ></hr>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={8}
        style={{
          width: "100%",
          border: "none",
          boxShadow: "none",
          backgroundColor: "transparent",
          marginBottom: "50px",
          transition: "transform 0.3s ease",
          "&:hover": {
            color: "red",
            textDecoration: "none",
            transform: "translateX(30px)",
          },
        }}
      >
        <div style={{ display: "flex", gap: "36px" }}>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <img
              src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb0ed6e927bdf5bc4309e0_briefcase.svg"
              alt=""
            />
            <Item elevation={0}>Become Seller</Item>
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <img
              src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb0ed6c4510c256356f4cd_gift.svg"
              alt=""
            />
            <Item elevation={0}>Gift Cards</Item>
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <img
              src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb0ed6ae57fd74e0402aa4_help-circle.svg"
              alt=""
            />
            Help Center
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "36px",
            backgroundColor: "transparent",
          }}
        >
          <Item elevation={0}>Terms of Service</Item>
          <Item elevation={0}>Privacy & Policy</Item>
        </div>
        <p>All Right reserved by Musemind | 2023</p>
      </Stack>
    </div>
  );
}
