"use client";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useEffect, useState } from "react";
import { getSessionProductIndex } from "@/app/libs/getSessionProduct";
import Link from "next/link";

export default function Basket() {
  let sepet = [];

  if (typeof window !== "undefined" && window.sessionStorage) {
    // sessionStorage kullanabilirsiniz
    sepet = JSON.parse(sessionStorage.getItem("basket"));
  } else {
    // Tarayıcı dışı ortamda çalışıyorsunuz, sessionStorage kullanılamaz
  }

  const [basket, setBasket] = useState(sepet);

  //console.log(sepet);

  const handleDecrease = (dId) => {
    let currentSession = JSON.parse(sessionStorage.getItem("basket"));
    let index = getSessionProductIndex(currentSession, dId);
    currentSession[index].miktar -= 1;
    if (currentSession[index].miktar < 1) {
      // ürünü sepetten sil
      currentSession.splice(index, 1);
      sessionStorage.setItem("basket", JSON.stringify(currentSession));
      let newSession = JSON.parse(sessionStorage.getItem("basket"));
      setBasket("");
      setBasket(newSession);
    } else {
      sessionStorage.setItem("basket", JSON.stringify(currentSession));
      let newSession = JSON.parse(sessionStorage.getItem("basket"));
      setBasket("");
      setBasket(newSession);
    }
  };

  const handleIncrease = (dId) => {
    let currentSession = JSON.parse(sessionStorage.getItem("basket"));
    let index = getSessionProductIndex(currentSession, dId);
    currentSession[index].miktar += 1;
    sessionStorage.setItem("basket", JSON.stringify(currentSession));
    let newSession = JSON.parse(sessionStorage.getItem("basket"));
    setBasket("");
    setBasket(newSession);
  };

  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" mb={3}>
        Ürün Sepeti
      </Typography>
      <Link href="/">
        <Typography variant="h6" mb={3}>
          Home
        </Typography>
      </Link>
      {basket &&
        basket.map((product, index) => (
          <Card
            sx={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}
            key={index}
          >
            <CardMedia
              image={product.image}
              title={product.title}
              sx={{ height: "200px", width: "150px", objectFit: "contain" }}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                p: 3,
                ml: 5,
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6">{product.title}</Typography>
              <Typography variant="h4">
                ${product.price * product.miktar}
              </Typography>
              <span sx={{ fontSize: "8px" }}>(per: $ {product.price})</span>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  height: "40px",
                  alignItems: "center",
                }}
              >
                <IconButton onClick={() => handleDecrease(product.id)}>
                  <RemoveOutlinedIcon />
                </IconButton>
                <Typography variant="h4" sx={{ mx: 1 }}>
                  {product.miktar}
                </Typography>
                <IconButton onClick={() => handleIncrease(product.id)}>
                  <AddOutlinedIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
}
