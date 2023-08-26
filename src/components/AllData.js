import { v4 as uuidv4 } from "uuid";

const titleService = [
  "Frequently Asked|Questions",
  "Online Payment|Process",
  "Home Delivery|Options",
];

const serviceImageUrls = [
  "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png",
  "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6707380718425e697_onlie%20payment-min.png",
  "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e544663ba3d0fd2bb8_home%20delivery-min.png",
];
const serviceData = titleService.map((title, index) => ({
  id: uuidv4(),
  title: title,
  imageUrl: serviceImageUrls[index],
  textDecoration: "none",
}));

const titleTrends = ["Furniture Village", "Fashion World"];

const trendsImageUrl = [
  "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd3678e82164f755_furniture%20village-min.png",
  "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6037f3b456acf2024_Fashion%20world-min.png",
];

const trendsData = titleTrends.map((title, index) => ({
  id: uuidv4(),
  title: title,
  imageUrl: trendsImageUrl[index],
  description: "Delivery within 24 hours",
}));

const titleMost = [
  "Instax Mini 11",
  "Hand Watch",
  "Adidas Sneakers",
  "Pendleton Water Bottle",
  "Cabin",
];

const mostImageUrls = [
  "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6eaf85336ce58cf03_instax%20mini%2011-min.png",
  "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e74b76916e072f2466_watch-min.png",
  "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4037f3ba53bcf2021_adidas%20sneakers-min.png",
  "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e65cc936826acce6d9_pendleton%20water%20bottle-min.png",
  "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e5bc6a9ac192b3d597_cabin-min.png",
];

const mostData = titleMost.map((title, index) => ({
  id: uuidv4(),
  title: title,
  imageUrl: mostImageUrls[index],
}));
const descriptionCard = [
  "Organic Cotton, fairtrade certified",
  "A perfect balance of high-fidelity audio",
  "15 in. x 10 in. -Flap top closure",
  "Table with air purifier, stained veneer/black",
  "Organic Cotton, fairtrade certified",
  "256, 8 core GPU, 8 GB",
  "5 Colors Available",
  "Table with air purifier, stained veneer/black",
];
const titleSmall = [
  "Laptop sleeve MacBook",
  "AirPods Max",
  "Flower Laptop Sleeve",
  "Supreme Water Bottle",
  "Laptop sleeve MacBook",
  "Macbook pro 13",
  "Ipad Mini",
  "HomePod mini",
];
const smallImageUrls = [
  "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e68b497e229146b818_leptop%20sleeve-min.png",
  "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png",
  "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55cc9361a8ecce6d4_flower%20leptop%20sleeve-min.png",
  "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e78b497e3a5646b82f_water%20pot-min.png",
  "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5560c31bbfce_leptop%20sleeve%20macbook-min.png",
  "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e61eb4ad4af6e75689_macbook%2013-min.png",
  "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64bd907adafd35b46_ipad%20mini-min.png",
  "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55cc9361a8ecce6d4_flower%20leptop%20sleeve-min.png",
];

const smallData = titleSmall.map((title, index) => ({
  id: uuidv4(),
  title,
  imageUrl: smallImageUrls[index],
  description: descriptionCard[index],
}));

const fourthCard = [
  {
    id: uuidv4(),
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png",
  },
  {
    id: uuidv4(),
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4e006822af104db61_book-min.png",
  },
  {
    id: uuidv4(),
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e61a7c20076aec5fe7_shirt-min.png",
  },
  {
    id: uuidv4(),
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e53f7127592743f6be_bug%20%26%20book-min.png",
  },
];
const thirdCard = [
  {
    id: uuidv4(),
    title: "Staples",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e560afc2c49da53521_brand%20(3)-min.png",
  },
  {
    id: uuidv4(),
    title: "Sprout",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e58b497e41aa46b801_brand%20(8)-min.png",
  },
  {
    id: uuidv4(),
    title: "Grocery outlet",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e5eaf8533b0958cefe_brand%20(5)-min.png",
  },
  {
    id: uuidv4(),
    title: "Mollie stones",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e454ac2e9d497cb531_brand%20(6)-min.png",
  },
  {
    id: uuidv4(),
    title: "Sports Basement",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4707380971125e685_brand%20(4)-min.png",
  },
  {
    id: uuidv4(),
    title: "Container Store",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc2193aa53511_brand%20(2)-min.png",
  },
  {
    id: uuidv4(),
    title: "Target",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4c21faa5e03c209c5_brand%20(1)-min.png",
  },
  {
    id: uuidv4(),
    title: "Bevmo",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e51eb4ad92a3e75673_brand%20(7)-min.png",
  },
];

const secondCard = [
  {
    id: uuidv4(),
    title: "HomePod Mini",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5507951bbfbe_homepad-mini-min.png",
    description: "Table with Air purifier",
  },
  {
    id: uuidv4(),
    title: "Intax Mini 9",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5537881bbfcf_instax%20mini%209-min.png",
    description: "Selfie Mode and selfie mirror",
  },
  {
    id: uuidv4(),
    title: "Base Camp Duffel M",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e63cc46b800_base%20camp%20duffel%2002-min.png",
    description: "High quality leather",
  },
  {
    id: uuidv4(),
    title: "Tot e Medium",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e7e006821d3b04db74_Tote%20Medium-min.png",
    description: "Canvas full grain",
  },
  {
    id: uuidv4(),
    title: "Headset Mini",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e54b76914b262f2448_headphone-min.png",
    description: "Table with Air purifier",
  },
  {
    id: uuidv4(),
    title: "Swatch Mini",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e74b769109fd2f245a_tomford%20watch-min.png",
    description: "Nice watch High quality leather",
  },
  {
    id: uuidv4(),
    title: "HomePod Mini 2",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5507951bbfbe_homepad-mini-min.png",
    description: "High quality leather",
  },
  {
    id: uuidv4(),
    title: "Tot e Medium 2",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e7e006821d3b04db74_Tote%20Medium-min.png",
    description: "Selfie Mode and selfie mirror",
  },
];

const firstCard = [
  {
    id: uuidv4(),
    title: "Furniture",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png",
  },
  {
    id: uuidv4(),
    title: "Hand Bag",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png",
  },
  {
    id: uuidv4(),
    title: "Books",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png",
  },
  {
    id: uuidv4(),
    title: "Tech",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png",
  },
  {
    id: uuidv4(),
    title: "Sneakers",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png",
  },
  {
    id: uuidv4(),
    title: "Travel",
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad6d07e7568f_travel-min.png",
  },
];

export {
  serviceData,
  trendsData,
  mostData,
  smallData,
  fourthCard,
  thirdCard,
  secondCard,
  firstCard,
};
