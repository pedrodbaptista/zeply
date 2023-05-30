import React from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/store/rootReducer";
import { Box, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

export default function Notification() {
  const state = useSelector((state: State) => state);

  const updatedSubscriptions = (state.user?.subscriptions || []).filter(
    (s) => s.status === "updated"
  );

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
          <h2>Notifications</h2>
          {updatedSubscriptions.length > 0 ? (
            updatedSubscriptions.map((s) => (
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
            <p>No notifications</p>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
