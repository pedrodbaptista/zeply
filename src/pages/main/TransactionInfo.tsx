import React, { useEffect, useState } from "react";
import { ITransaction } from "../../types/transaction";
import { Box, Button, Card, CardActions, CardContent } from "@mui/material";
import { ISubscription } from "../../redux/reducers/userReducer/userModel";
import {
  getExampleTransaction,
  getUserSubscription,
  mapTransactionToITransaction,
} from "../../utils/helper";
import actions from "../../redux/reducers/actions";
import createSubscription from "../../lib/subscription";
import { useSelector } from "react-redux";
import { State } from "../../redux/store/rootReducer";
import { useParams } from "react-router-dom";
import axios from "axios";
import config, { ENV, MOCK_DATA } from "../../config/config";

interface IProps {
  data?: ITransaction;
}

function TransactionInfo(props: IProps) {
  const state = useSelector((state: State) => state);
  const [data, setData] = useState(props.data || ({} as ITransaction));

  let { transactionId } = useParams();

  useEffect(() => {
    if (transactionId) {
      getData();
    }
  }, [transactionId]);

  const getData = async () => {
    if (MOCK_DATA) {
      const transactionResponse = getExampleTransaction(true);
      setData(transactionResponse);
    } else {
      if (!transactionId) {
        return;
      }
      const transactionResponse = await axios.get(
        `${
          config[ENV as keyof typeof config].TRANSACTION_URL
        }/txs/${transactionId}`
      );
      if (transactionResponse.data) {
        const tx = mapTransactionToITransaction(transactionResponse.data);
        setData(tx);
      }
    }
  };

  const subscribe = () => {
    const newSubscription: ISubscription = {
      type: "TRANSACTIOM",
      hash: data.txid,
      status: "new",
    };
    if (!getUserSubscription(state.user, data.txid)) {
      actions.user.setSubscription(newSubscription);
      createSubscription(state.user, newSubscription);
    }
  };

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
            <h2>Transaction Information</h2>
            {data ? (
              <div>
                <p>Transaction ID: {data.txid}</p>
                <p>Received Time: {data.received_time}</p>
                <p>Status: {data.status}</p>
                <p>Size: {data.size}</p>
                <p>Number of Confirmations: {data.number_confirmations}</p>
                <p>Total BTC Input: {data.total_input}</p>
                <p>Total BTC Output: {data.total_output}</p>
                <p>Total Fees: {data.total_fees}</p>
              </div>
            ) : (
              <p>Loading transaction information...</p>
            )}
          </div>
        </CardContent>
        {!state.user.subscriptions.find((s) => s.hash === transactionId) && (
          <CardActions>
            <Button size="small" onClick={subscribe}>
              Subscribe
            </Button>
          </CardActions>
        )}
      </Card>
    </Box>
  );
}

export default TransactionInfo;
