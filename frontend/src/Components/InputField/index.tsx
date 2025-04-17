import React, {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  ForwardedRef,
} from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Stack, Typography } from "@mui/material";
import { themePalette } from "../../Theme/colors";

interface InputFieldProps extends Omit<TextFieldProps, "error"> {
  label?: string;
  name?: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  type?: string;
  fullWidth?: boolean;
}

const InputField = forwardRef(
  (
    {
      label,
      name,
      value,
      onChange,
      onBlur,
      required = false,
      error = false,
      helperText = "",
      multiline = false,
      rows = 4,
      type = "text",
      fullWidth = true,
      ...rest
    }: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Stack spacing={0.2} width={fullWidth ? 1 : "unset"}>
        {label && (
          <Typography variant="mec_body" color={themePalette.palette.gray.dark}>
            {label} {required ? " *" : ""}
          </Typography>
        )}
        <TextField
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          helperText={error ? helperText : ""}
          multiline={multiline}
          rows={multiline ? rows : undefined}
          type={type}
          fullWidth={fullWidth}
          inputRef={ref}
          {...rest}
        />
      </Stack>
    );
  }
);

export default InputField;
