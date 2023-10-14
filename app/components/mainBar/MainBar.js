"use client";

import { Box, Snackbar, Alert } from "@mui/material";
import SearchBar from "../search/SearchBar";
import ProductCard from "../productCard/ProductCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function MainBar({ width, products }) {
  const [urunler, setUrunler] = useState(products);
  const [filtered, setFiltered] = useState(undefined);

  const checkedCategory = useSelector((state) => state.category);
  const priceRange = useSelector((state) => state.price);

  let minRange = priceRange[0];
  let maxRange = priceRange[1];

  const filteredPriceProducts = urunler.filter(
    (e) => e.price >= minRange && e.price <= maxRange
  );

  let checkedCategoryLength = checkedCategory.length;

  function filterProducts(checked, arr) {
    let filteredProducts = [];
    for (let i = 0; i < checked.length; i++) {
      const element = checked[i];
      const result = arr.filter((e) => e.category === element);
      filteredProducts.push(result);
    }

    setFiltered(filteredProducts.flat(Infinity));
  }

  useEffect(() => {
    filterProducts(checkedCategory, filteredPriceProducts);
  }, [checkedCategory, filteredPriceProducts]);

  return (
    <Box
      sx={{
        width: `100%`,
        p: 2,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f2f5f6",
        marginLeft: `${width}px`,
      }}
    >
      <SearchBar />
      <Box
        sx={{
          p: 1,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          rowGap: "5px",
          columnGap: "2.5px",
        }}
      >
        {checkedCategoryLength
          ? filtered.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))
          : filteredPriceProducts.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                price={product.price}
                image={product.image}
                id={product.id}
              />
            ))}
      </Box>
    </Box>
  );
}
