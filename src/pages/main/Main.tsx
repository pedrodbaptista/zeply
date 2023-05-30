import React, { useEffect } from "react";
import { Container } from "@mui/material";
import CustomMenu from "../../components/customMenu/CustomMenu";
import { Outlet, useNavigate } from "react-router-dom";
import actions from "../../redux/reducers/actions";
import { isExpired } from "react-jwt";
import { useSelector } from "react-redux";
import { State } from "../../redux/store/rootReducer";

export default function Main() {
  const state = useSelector((state: State) => state);

  const navigate = useNavigate();

  const isUserAuthed = () => {
    const token = localStorage.getItem("zeply_token");

    return token && !isExpired(token);
  };

  const checkSession = () => {
    if (!isUserAuthed()) {
      navigate("/login");
    } else {
      setTimeout(checkSession, 60000);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("zeply_token");
    actions.user.clear();
    navigate("/login");
  };

  useEffect(() => {
    checkSession();
  }, [state.user.email]);

  return (
    <Container>
      <CustomMenu handleSignOut={handleSignOut} />
      <Outlet />
    </Container>
  );
}
