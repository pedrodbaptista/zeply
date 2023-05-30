import React, { useState } from "react";
import {
  Box,
  Divider,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { HashType } from "../../types/hash";
import TransactionInfo from "./TransactionInfo";
import AddressInfo from "./AddressInfo";
import { ITransaction } from "../../types/transaction";
import { IAddress } from "../../types/address";
import config, { ENV, MOCK_DATA } from "../../config/config";
import {
  getExampleAddress,
  getExampleTransaction,
  getTopSearch,
  mapAddressToIAddress,
  mapTransactionToITransaction,
} from "../../utils/helper";
import { useSelector } from "react-redux";
import { State } from "../../redux/store/rootReducer";
import actions from "../../redux/reducers/actions";

export default function List() {
  const state = useSelector((state: State) => state);

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(null as IAddress | ITransaction | null);
  const [hashType, setHashType] = useState("NONE" as HashType);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const setSearchCountValues = (type: HashType) => {
    const searchCounts = { ...state.user.searchCounts };
    const existsKey = Object.keys(state.user.searchCounts).includes(searchText);
    let newValue = 1;
    if (existsKey) {
      newValue = searchCounts[searchText].count + 1;
    }
    searchCounts[searchText] = {
      count: newValue,
      type,
    };
    actions.user.setSearchCounts({
      searchCounts,
      topSearch: getTopSearch(searchCounts),
    });
  };

  const handleSearch = async () => {
    try {
      // Address
      if (MOCK_DATA) {
        const addressResponse = getExampleAddress();
        setData(addressResponse);
        setHashType("ADDRESS");
        setSearchCountValues("ADDRESS");
      } else {
        const addrResponse = await axios.get(
          `${
            config[ENV as keyof typeof config].BLOCKCHAIN_URL
          }/rawaddr/${searchText}`
        );
        if (addrResponse.data) {
          const newData = mapAddressToIAddress(addrResponse.data);
          const unspentResponse = await axios.get(
            `${
              config[ENV as keyof typeof config].BLOCKCHAIN_URL
            }/unspent?active=${searchText}`
          );
          if (unspentResponse.data) {
            const unspent = unspentResponse.data.unspent_outputs.reduce(
              (acc: any, s: any) => acc + Number(s.value),
              0
            );
            newData.total_unspent = unspent;
          }
          const balanceResponse = await axios.get(
            `${
              config[ENV as keyof typeof config].BLOCKCHAIN_URL
            }/balance?active=${searchText}`
          );
          if (balanceResponse.data) {
            newData.final_balance = balanceResponse.data[searchText]
              .final_balance as number;
          }
          setData(newData);
          setHashType("ADDRESS");
          setSearchCountValues("ADDRESS");
        }
      }
    } catch {
      if (MOCK_DATA) {
        const txResponse = getExampleTransaction();
        setData(txResponse);
        setHashType("TRANSACTIOM");
        setSearchCountValues("TRANSACTIOM");
      } else {
        axios
          .get(
            `${
              config[ENV as keyof typeof config].TRANSACTION_URL
            }/txs/${searchText}`
          )
          .then((transactionResponse) => {
            if (transactionResponse.data) {
              const tx = mapTransactionToITransaction(transactionResponse.data);
              setData(tx);
              setHashType("TRANSACTIOM");
              setSearchCountValues("TRANSACTIOM");
            }
          })
          .catch(() => {
            setData(null);
            setHashType("NONE");
          });
      }
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
      <FormControl
        size="small"
        sx={{ maxWidth: "50ch", width: "100%" }}
        variant="filled"
      >
        <InputLabel htmlFor="filled-adornment-search">Search</InputLabel>
        <FilledInput
          name="searchBar"
          id="filled-adornment-search"
          type="text"
          onChange={onSearchChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton name="searchBarButton" onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Divider light />
      {hashType === "ADDRESS" ? (
        <AddressInfo data={data as IAddress} />
      ) : hashType === "TRANSACTIOM" ? (
        <TransactionInfo data={data as ITransaction} />
      ) : null}
    </Box>
  );
}
