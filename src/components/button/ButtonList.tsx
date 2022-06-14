import React from "react";
import { Box, ButtonProps } from "@mui/material";
import { Button } from "./Button";

interface ButtonListProps {
  variant: "contained" | "outlined" | "text" | "unstyled";
  size: "large" | "medium" | "small";
  color: "primary" | "secondary" | "gray" | "red";
  buttons: Array<ButtonProps>;
  onClick: () => void;
  label: string;
}

export default function ButtonList({
  variant,
  size,
  color,
  buttons,
  onClick,
  label,
}: ButtonListProps) {
  const events = {
    onClick,
  };

  return (
    <div>
      {buttons.map((button, idx) => (
        <Box
          key={idx}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          sx={{}}
        >
          <Box p={2}>
            <Button
              variant={"contained"}
              size={size}
              color={color}
              {...events}
              label={"CONTAINED"}
            />
          </Box>
          <Box p={2}>
            <Button
              variant="outlined"
              size={size}
              color={color}
              {...events}
              label={"OUTLINED"}
            />
          </Box>
          <Box p={2}>
            <Button
              variant="text"
              size={size}
              color={color}
              {...events}
              label={"TEXT"}
            />
          </Box>
          <Box p={2}>
            <Button
              variant="unstyled"
              size={size}
              color={color}
              {...events}
              label={"UNSTYLED"}
            />
          </Box>
        </Box>
      ))}
    </div>
  );
}
