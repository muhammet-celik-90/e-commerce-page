'use client'

import { Box, Button, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterBox from "../filterBox/FilterBox";
import { useEffect, useState } from "react";
import PriceRange from "../priceRange/PriceRange";

export default function Sidebar({products, categories, width}) {

  const [urunler,setUrunler] = useState(products); 
  console.log(urunler) 

  return (
    <Box
      sx={{
        width: `${width}px`,
        height: "100%",
        minHeight: '100vh',
        background: "#303030",
        color: "#f1f1f0",
        position: 'fixed'
      }}
    >
      {/* LOGO */}
      <Box
        sx={{
          background: "#252525",
          color: "#fff",
          width: "100%",
          height: "70px",
          p: 3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ cursor: "pointer" }}>
          Shopping
        </Typography>
      </Box>

      {/* SIDEBAR MENUS */}
      <Box
        sx={{
          p: 3,
        }}
      >
        {/* FILTER BUTTON GROUP */}
        <Box
          sx={{
            width: '100%',
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
            mb: 2
          }}
        >
          <Button
            sx={{ background: "transparent", color: "#fff" }}
            startIcon={<FilterListIcon />}
          >
            Filter
          </Button>
        </Box>

        {/* CHECKBOX AREA */}
        <Box>
          <FilterBox title={'Kategoriler'} datas={categories}/>
        </Box>

        {/* PRICE RANGE */}
        <Box>
          <PriceRange products={urunler}/>
        </Box>
      </Box>
    </Box>
  );
}
