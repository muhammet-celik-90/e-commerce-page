"use client";

import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { yellow, grey } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { addCategoryFilter } from "@/app/features/category/categorySlice";

export default function FilterBox({ title, datas }) {
  const checkBoxStyle = {
    color: grey[200],
    "&.Mui-checked": {
      color: yellow[800],
    },
  };

  const dispatch = useDispatch();

  const handleChange = (event) => {
    let category = event.target.name;
    dispatch(addCategoryFilter(category))
  }

  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
      <FormGroup
        sx={{
          height: "150px",
          overflow: "auto",
          display: "flex",
          flexDirection: "row",
          width: "100%",
          borderBottom: `1px solid ${grey[400]}`,
          pb: 1,
        }}
      >
        {datas.map((cat, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                size="small"
                sx={checkBoxStyle}
                name={cat}
                onChange={(e) => handleChange(e)}
              />
            }
            label={cat}
            sx={{ width: "100%", color: grey[400] }}
          />
        ))}
      </FormGroup>
    </Box>
  );
}
