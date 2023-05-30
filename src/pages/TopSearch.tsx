import React from "react";
import { Box, Card, CardContent } from "@mui/material";
import { State } from "../redux/store/rootReducer";
import { useSelector } from "react-redux";

function TopSearch() {
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
          <div>
            <h2>Top 5 Search</h2>
            {Object.keys(state.user.topSearch).length > 0 ? (
              <div>
                {Object.keys(state.user.topSearch).map((h) => (
                  <p key={h}>Hash: {h}</p>
                ))}
              </div>
            ) : (
              <p>No searches to display</p>
            )}
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

export default TopSearch;
