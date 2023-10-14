"use client";

import { getPrice } from "@/app/libs/getPrice";
import { Box, Slider, Typography } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { priceRangeFilter } from "@/app/features/price/priceSlice";

export default function PriceRange({ products }) {

  const [urunler, setUrunler] = useState(products);
  const [price, setPrice] = useState("");
  const minDistance = 1;
  
  const priceLength = price && price.length;
  const minPrice = (price && price.sort((a, b) => (a > b ? 1 : -1)))[0];
  const maxPrice = (price && price.sort((a, b) => (a > b ? 1 : -1)))[priceLength - 1];

  const [value, setValue] = useState([1, 10000]);

  const dispatch = useDispatch();

  useEffect(() => {
    setPrice(getPrice(urunler));
  }, [urunler]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      let val = [Math.min(newValue[0], value[1] - minDistance), value[1]]
      setValue(val);
      dispatch(priceRangeFilter(val));
    } else {
      let val = [value[0], Math.max(newValue[1], value[0] + minDistance)]
      setValue(val);
      dispatch(priceRangeFilter(val));
    }
  };
  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h6">Price Range</Typography>
      <Box sx={{ width: "100%", p: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alingItems: "center",
          }}
        >
          <Typography variant="p" sx={{ color: grey[500], fontSize: "13px" }}>
            ${minPrice}
          </Typography>
          <Typography variant="p" sx={{ color: grey[500], fontSize: "13px" }}>
            ${maxPrice}
          </Typography>
        </Box>
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          max={maxPrice}
          min={minPrice}
          sx={{
            color: grey[200],
            "& .MuiSlider-thumb": {
              color: yellow[900],
            },
          }}
        />
      </Box>
    </Box>
  );
}
