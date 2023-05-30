import React, { useState } from "react";
import {
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import { toast } from "react-toastify";
import { login } from "../lib/API";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(5),
});

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const submit = async () => {
    loginSchema
      .validate({ email, password })
      .then((validData) => {
        login(validData.email, validData.password);
        setEmailError(false);
        setPasswordError(false);
        navigate("/");
      })
      .catch((error) => {
        if (error.path === "email") {
          setEmailError(true);
        }
        if (error.path === "password") {
          setPasswordError(true);
        }
        toast.error(error.message);
      });
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Card>
        <CardContent>
          <Box display="flex" flexDirection="column" gap={2} width="300px">
            <Typography variant="h6" align="center">
              Login
            </Typography>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              error={emailError}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              error={passwordError}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
          </Box>
        </CardContent>
        <CardActions>
          <Box width="100%" display="flex" justifyContent="center">
            <Button variant="contained" onClick={submit}>
              Login
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
}
