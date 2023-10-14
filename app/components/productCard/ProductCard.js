"use client";

import {
  Alert,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

export default function ProductCard({ title, price, image, id }) {
  const [ratingValue, setRatingValue] = useState(5);

  const handleClick = (pId, pTitle, pImage, pPrice) => {
    let currentSession = sessionStorage.getItem("basket");
    let repeatedId = [];
    let repeatedIndex;

    if (!currentSession) {
      currentSession = [];
      currentSession.push({
        id: pId,
        title: pTitle,
        price: pPrice,
        image: pImage,
        miktar: 1,
      }); // ilk objeyi ekliyoruz
    } else {
      currentSession = JSON.parse(currentSession);
      for (let i = 0; i < currentSession.length; i++) {
        const element = currentSession[i];
        if (element.id === pId) {
          repeatedId.push(element.id);
          repeatedIndex = i;
        }
      }
      if (!repeatedId.includes(pId)) {
        currentSession.push({
          id: pId,
          title: pTitle,
          price: pPrice,
          image: pImage,
          miktar: 1,
        }); // daha sonraki objeleri ekliyoruz
      } else {
        // Var olan ürünün değerini 1 artır
        currentSession[repeatedIndex].miktar += 1;
      }
    }

    sessionStorage.setItem("basket", JSON.stringify(currentSession));
    setOpen(true);
  };

  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          width: "250px",
          height: "400px",
          boxShadow: "5px 5px 20px lightgray",
        }}
      >
        <CardMedia
          component="img"
          height="200px"
          image={image}
          alt={title}
          sx={{ objectFit: "contain" }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            height: "55%",
          }}
        >
          <Typography variant="p">{title}</Typography>
          <Rating value={ratingValue} />
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography variant="h6">${price}</Typography>
            <IconButton onClick={() => handleClick(id, title, image, price)}>
              <LocalMallOutlinedIcon />
            </IconButton>
          </Stack>
        </CardContent>
      </Card>
      <Snackbar open={open}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Ürün sepete eklendi
        </Alert>
      </Snackbar>
    </>
  );
}
