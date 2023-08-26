import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

export default function ItemPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching item data from API based on the item ID
    fetch(`https://api.example.com/items/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading item...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!item) {
    return <div>No item found.</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "80%",
          border: "1px solid black",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div style={{ flex: 1, marginRight: "20px" }}>
          <img
            src={item.imageUrl}
            alt={item.title}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <div>
            <h3>Comments</h3>
            <div
              style={{
                border: "1px solid gray",
                padding: "10px",
                margin: "10px 0",
              }}
            >
              <p>
                <strong>User Name:</strong> Sample Comment Here!
              </p>
            </div>
            <div>
              <textarea
                placeholder="Write a comment..."
                rows="4"
                style={{ width: "100%", marginBottom: "10px" }}
              ></textarea>
              <button>Submit Comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
