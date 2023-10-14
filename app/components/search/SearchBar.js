import { Avatar, Badge, Box, Button, IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useEffect, useState } from "react";

export default function SearchBar() {
  let sepet = JSON.parse(sessionStorage.getItem("basket"));

  return (
    <Box
      sx={{
        width: "100%",
        borderBottom: `1px solid ${grey[300]}`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "250px",
          height: "100%",
        }}
      >
        <IconButton>
          <Badge color="error">
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </IconButton>
        <a href="/basket">
          <IconButton>
            <Badge badgeContent={sepet && sepet.length} color="success">
              <LocalMallOutlinedIcon />
            </Badge>
          </IconButton>
        </a>
        <Avatar sx={{ bgcolor: grey[500] }} />
      </Box>
    </Box>
  );
}
