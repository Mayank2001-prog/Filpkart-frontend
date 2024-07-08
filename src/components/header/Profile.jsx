import React, { useState } from "react";
import { Typography, Box, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Component = styled(Menu)`
  margin-top: 5px;
`;

const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const logoutUser = () => {
    setAccount("");
  };

  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ margintop: 2, cursor: "pointer" }}>
          {account}
        </Typography>

        <Component
          id="basic-menu"
          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              logoutUser();
            }}
          >
            <PowerSettingsNewIcon color="primary" fontSize="small" />
            <Logout>Logout</Logout>
          </MenuItem>
        </Component>
      </Box>
    </>
  );
};

export default Profile;
