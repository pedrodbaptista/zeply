import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Logout from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";
import { State } from "../../redux/store/rootReducer";
import {
  Badge,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { NotificationAddOutlined } from "@mui/icons-material";
import actions from "../../redux/reducers/actions";
import { ICurrency } from "../../types/user";

const pages = ["list", "subscriptions", "notifications"];

interface IProps {
  handleSignOut: () => void;
}

function CustomMenu(props: IProps) {
  const state = useSelector((state: State) => state);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (event: SelectChangeEvent) => {
    actions.user.setCurrency(event.target.value as ICurrency);
  };

  const updatedSubscriptions = (state.user?.subscriptions || []).filter(
    (s) => s.status === "updated"
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link style={{ textDecoration: "none", color: "white" }} to={`/`}>
              Zeply
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to={`${page}`}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link style={{ textDecoration: "none", color: "white" }} to={`/`}>
              Zeply
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  backgroundColor: "inherit",
                  color: "white",
                  display: "block",
                }}
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`${page}`}
                >
                  {page}
                </Link>
                {page === "notifications" &&
                  updatedSubscriptions.length > 0 && (
                    <Badge
                      badgeContent={updatedSubscriptions.length}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      style={{ color: "yellow" }}
                    >
                      <NotificationAddOutlined />
                    </Badge>
                  )}
              </Button>
            ))}
          </Box>
          <>
            <Box sx={{ minWidth: 90 }}>
              <FormControl size="small" fullWidth>
                <InputLabel id="currency-select-label" sx={{ color: "white" }}>
                  Currency
                </InputLabel>
                <Select
                  labelId="currency-select-label"
                  id="currency-select"
                  value={state.user.currency || "BTC"}
                  label="Currency"
                  onChange={handleChange}
                  sx={{ color: "white" }}
                >
                  <MenuItem value="BTC">BTC</MenuItem>
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="EUR">EUR</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <IconButton color="inherit" onClick={props.handleSignOut}>
              <Logout />
            </IconButton>
          </>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default CustomMenu;
