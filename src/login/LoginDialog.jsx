import React from "react";
import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { authenticateSignup, authenticateLogin } from "../../service/Api";

import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const Text = styled(Typography)`
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-redius: 2px;
`;

const RequestOtp = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
  display: flex;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 83%;
  width: 28%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const accountInitialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValue.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const { setAccount } = useContext(DataContext);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValue.login);
    setError(false);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValue.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);

    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
    } else {
      setError(true);
    }
  };

  // const loginUser = async () => {
  //   try {
  //     let response = await authenticateLogin(login);
  //     if (response && response.status === 200) {
  //       handleClose();
  //       setAccount(login.username);
  //     } else {
  //       console.error("Authentication failed:", response);
  //       // Handle authentication failure here
  //     }
  //   } catch (error) {
  //     console.error("Error during authentication:", error);
  //     // Handle other errors here
  //   }
  // };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Image>
          <Typography variant="h5">{account.heading}</Typography>
          <Typography style={{ marginTop: 20 }}>
            {account.subHeading}
          </Typography>
        </Image>
        {account.view === "login" ? (
          <Wrapper>
            <TextField
              label="Enter Email/Mobile Number"
              onChange={(e) => onValueChange(e)}
              variant="standard"
              name="username"
            />
            {error && <Error>Please enter valid username or password</Error>}
            <TextField
              label="Enter Password"
              onChange={(e) => onValueChange(e)}
              variant="standard"
              name="password"
            />
            <Text style={{ fontSize: 14 }}>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Text>
            <LoginButton onClick={() => loginUser()}>Login</LoginButton>

            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <RequestOtp>Request OTP</RequestOtp>
            <CreateAccount onClick={() => toggleSignup()}>
              New to Flipkart? Create an account
            </CreateAccount>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              label="Enter First Name"
              onChange={(e) => onInputChange(e)}
              name="firstname"
              variant="standard"
            />
            <TextField
              label="Enter Last Name"
              onChange={(e) => onInputChange(e)}
              name="lastname"
              variant="standard"
            />
            <TextField
              label="Username "
              onChange={(e) => onInputChange(e)}
              name="username"
              variant="standard"
            />
            <TextField
              label="Enter Email "
              onChange={(e) => onInputChange(e)}
              name="email"
              variant="standard"
            />
            <TextField
              label="Enter Enter Password "
              onChange={(e) => onInputChange(e)}
              name="password"
              variant="standard"
            />
            <TextField
              label="Enter Mobile No. "
              onChange={(e) => onInputChange(e)}
              name="phone"
              variant="standard"
            />

            <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            <CreateAccount>New to Flipkart? Create an account</CreateAccount>
          </Wrapper>
        )}
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
