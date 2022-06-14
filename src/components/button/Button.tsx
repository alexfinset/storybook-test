import React from "react";
import { Button as MuiButton } from "@mui/material";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant: "contained" | "outlined" | "text" | "unstyled";
  /**
   * How large should the button be?
   */
  size: "large" | "medium" | "small";
  /**
   * Defined Button Colors
   */
  color: "primary" | "secondary" | "gray" | "red";
  /**
   * Label to Displayed inside Button
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = ({
  variant,
  size,
  color,
  label = "BUTTON",
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      size={size}
      color={color}
      onClick={onClick}
      {...props}
    >
      {label}
    </MuiButton>
  );
};
