import React from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/store/rootReducer";
import { Box, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

export default function Subscription() {
  const state = useSelector((state: State) => state);

  return (
    <Box
      marginY={2}
      paddingX={0}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-end"
    >
      <Card variant="outlined">
        <CardContent>
          <h2>Subscriptions</h2>
          {(state.user?.subscriptions || []).length > 0 ? (
            state.user.subscriptions.map((s) => (
              <CardContent key={s.hash}>
                <div>
                  <div>Type: {s.type}</div>
                  <div>
                    Hash:{" "}
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`${
                        s.type === "ADDRESS" ? "/address/" : "/transaction/"
                      }${s.hash}`}
                    >
                      {s.hash}
                    </Link>
                  </div>
                  <div>Status: {s.status}</div>
                </div>
              </CardContent>
            ))
          ) : (
            <p>No subscriptions</p>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
