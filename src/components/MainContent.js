import VerticalBox from "./VerticalBox";
import CardBox from "./CardBox";
import Grid from "@mui/material/Grid";
import RectangularContainer from "./RectangularContainer";
import Box from "@mui/material/Box";
import BigCard from "./BigCard";
import Container from "@mui/material/Container";
import DiscountIm from "./DiscountIm";
import GreenCard from "./GreenCard";
import CardBoxSmall from "./CardBoxSmall";
import CreditCard from "./CreditCard";
import Cards from "./Cards";
import Trends from "./Trends";
import ServiceCard from "./ServiceCard";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  serviceData,
  trendsData,
  mostData,
  smallData,
  fourthCard,
  thirdCard,
  secondCard,
  firstCard,
} from "./AllData";

export default function MainContent() {
  return (
    <div>
      <h2
        style={{
          textAlign: "left",
          fontSize: "28px",
          marginLeft: "8rem",
          marginTop: "14rem",
          marginBottom: `2rem`,

          fontFamily: "Inter, sans-serif",
        }}
      >
        Shop Our Top Categories
      </h2>
      {firstCard.map((item) => (
        <Link to={`/item/${item.id}`} key={item.id}>
          <VerticalBox title={item.title} imageUrl={item.imageUrl} />
        </Link>
      ))}

      <h2
        style={{
          textAlign: "left",
          fontSize: "28px",
          marginLeft: "8rem",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Todays Best Deals For You!
      </h2>

      <Grid
        container
        spacing={14}
        wrap="nowrap"
        sx={{
          overflowX: "auto",
          display: "flex",
          flexDirection: "row",

          paddingBottom: "25px",
          justifyContent: "space-evenly",

          maxWidth: "1400px",
          width: "100%",
          margin: "auto",
          "@media (max-width: 600px)": {
            maxWidth: "500px",
          },
          "@media (max-width: 400px)": {
            maxWidth: "320px",
          },
        }}
      >
        {secondCard.map((item) => (
          <Grid item xs={4} key={item.id}>
            <Link to={`/item/${item.id}`} style={{ textDecoration: "none" }}>
              <CardBox
                title={item.title}
                imageUrl={item.imageUrl}
                description={item.description}
              />
            </Link>
          </Grid>
        ))}
      </Grid>

      <h2
        style={{
          textAlign: "left",
          fontSize: "28px",
          marginLeft: "8rem",
          marginRight: "8rem",
          marginTop: `6rem`,
          MarginBottom: `6rem`,
          fontFamily: "Inter, sans-serif",
        }}
      >
        Choose By Brand
      </h2>
      <Box
        sx={{
          maxWidth: "82%",
          margin: "0 auto",
          width: "100%",
          maxWidth: "1400px",

          backgroundColor: "pink",
        }}
      >
        <Grid
          container
          justifyContent="center"
          spacing={2}
          wrap="wrap"
          sx={{
            width: "100%",
          }}
        >
          {thirdCard.map((item) => (
            <Grid item xs={3} key={item.id}>
              <Link
                to={`/item/${item.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <RectangularContainer
                  title={item.title}
                  imageUrl={item.imageUrl}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
      <h2
        style={{
          textAlign: "left",
          fontSize: "28px",
          marginTop: `8rem`,
          marginLeft: "8rem",
          marginRight: "8rem",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Get Up To 70% Off
      </h2>

      <Grid
        container
        display={"flex"}
        justifyContent="center"
        wrap="wrap"
        sx={{
          overflowX: "auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",

          justifyContent: "center",
          alignItems: "start",
          maxWidth: "1400px", // for example, or any size you prefer
          width: "100%",
          margin: "auto",
          "@media (max-width: 600px)": {
            maxWidth: "500px", // adjust the width for screens up to 600px wide
          },
          "@media (max-width: 400px)": {
            maxWidth: "320px", // adjust the width for screens up to 400px wide
          },
        }}
      >
        <Grid container>
          {fourthCard.map((item, index) => (
            <Grid
              justifyContent="center"
              display={"flex"}
              item
              xs={3}
              key={item.id}
            >
              <Link to={`/item/${item.id}`} style={{ textDecoration: "none" }}>
                <BigCard title={`Image ${index}`} imageUrl={item.imageUrl} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <h2
        style={{
          textAlign: "left",
          fontSize: "28px",
          marginLeft: "8rem",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Weekly Popular Products
      </h2>

      <Grid
        container
        spacing={14}
        wrap="nowrap"
        sx={{
          overflowX: "auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: "25px",
          justifyContent: "space-evenly",
          alignItems: "start",
          maxWidth: "1400px",
          width: "100%",
          margin: "auto",
          "@media (max-width: 600px)": {
            maxWidth: "500px",
          },
          "@media (max-width: 400px)": {
            maxWidth: "320px",
          },
        }}
      >
        {secondCard.map((item) => (
          <Grid item xs={4} key={item.id}>
            <Link to={`/item/${item.id}`} style={{ textDecoration: "none" }}>
              <CardBox
                title={item.title}
                imageUrl={item.imageUrl}
                description={item.description}
              />
            </Link>
          </Grid>
        ))}
      </Grid>

      <Grid
        container
        style={{
          position: "relative",
          width: "100%",
          height: "auto",
        }}
      >
        <Grid item xs={12}>
          <DiscountIm />
        </Grid>

        <Grid
          item
          xs={12}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(30%, -45%)", // Centers the card on the image
          }}
        >
          <GreenCard />
        </Grid>
      </Grid>

      <h2
        style={{
          textAlign: "left",
          fontSize: "28px",
          marginTop: `4rem`,
          marginLeft: "8rem",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Todays Best Deals!
      </h2>

      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        wrap="nowrap"
        sx={{
          overflowX: "auto",
          display: "flex",
          flexDirection: "row",

          paddingBottom: "25px",
          justifyContent: "space-between",

          maxWidth: "1400px",
          width: "100%",
          margin: "auto",
          "@media (max-width: 600px)": {
            maxWidth: "500px",
          },
          "@media (max-width: 400px)": {
            maxWidth: "320px",
          },
        }}
      >
        {smallData.map((item) => (
          <Grid item xs={3} key={item.id}>
            <Link to={`/item/${item.id}`}></Link>
            <CardBoxSmall
              title={item.title}
              imageUrl={item.imageUrl}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{
          alignItems: "center",
          width: "100%",
          height: "330px",
          margin: 0,
          padding: 0,
          backgroundColor: "#ffe6cc",
          margin: "100px 0",
          flexGrow: 1,
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            height: "330px",
            paddingTop: "0px",
            paddingBottom: "0px",
            transform: "translate(20%, 0%)",
            display: "flex",
            justifyContent: "center", // centers CreditCard component inside the grid item
          }}
        >
          <CreditCard />
        </Grid>

        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            transform: "translate(-30%, -200%)", // centers Cards component inside the grid item
          }}
        >
          <Cards />
        </Grid>
      </Grid>
      <h2
        style={{
          textAlign: "left",
          fontSize: "28px",
          marginLeft: "8rem",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Most Selling Products
      </h2>
      <Grid
        container
        spacing={6}
        wrap="nowrap"
        sx={{
          overflowX: "auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: "25px",
          justifyContent: "space-evenly",
          paddingLeft: "5px",

          maxWidth: "1400px",
          width: "100%",
          margin: "auto",
          "@media (max-width: 600px)": {
            maxWidth: "500px",
          },
          "@media (max-width: 400px)": {
            maxWidth: "320px",
          },
        }}
      >
        {mostData.map((item) => (
          <Grid item xs={3} key={item.id}>
            <Link to={`/item/${item.id}`}></Link>
            <CardBox title={item.title} imageUrl={item.imageUrl} />
          </Grid>
        ))}
      </Grid>

      <h2
        style={{
          textAlign: "left",
          fontSize: "28px",
          marginLeft: "8rem",
          marginTop: "3rem",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Trending Products For You!
      </h2>
      <Grid
        container
        spacing={8}
        wrap="wrap"
        justify="center"
        sx={{
          overflowX: "auto",
          display: "flex",
          flexDirection: "row",

          width: "100%",
          margin: "auto",
          maxWidth: "1400px",
          backgroundColor: "pink",
        }}
      >
        {trendsData.map((item) => (
          <Grid item xs={6} key={item.id}>
            <Link
              to={`/trends/${item.title.replace(/\s+/g, "-").toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <Trends
                title={item.title}
                imageUrl={item.imageUrl}
                description={item.description}
              />
            </Link>
          </Grid>
        ))}
      </Grid>

      <h2
        style={{
          textAlign: "left",
          fontSize: "28px",
          marginLeft: "8rem",
          marginTop: "3rem",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Services To Help You Shop
      </h2>

      <Grid
        container
        spacing={2}
        wrap="wrap"
        sx={{
          overflowX: "auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "pink",
          justifyContent: "center",
          alignItems: "start",

          maxWidth: "1300px",
          width: "100%",
          margin: "auto",
          "@media (max-width: 600px)": {
            maxWidth: "500px",
          },
          "@media (max-width: 400px)": {
            maxWidth: "320px",
          },
        }}
      >
        {serviceData.map((item) => (
          <Grid item xs={4} key={item.id}>
            <Link to={`/service/${item.id}`} style={{ textDecoration: "none" }}>
              <ServiceCard title={item.title} imageUrl={item.imageUrl} />
            </Link>
          </Grid>
        ))}
      </Grid>
      <hr
        style={{
          width: "1400px",
          color: "gray",
        }}
      ></hr>
    </div>
  );
}
