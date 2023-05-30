import {
  exchangeRate,
  getExampleAddress,
  getExampleTransaction,
  getTopSearch,
  getUserSubscription,
  mapAddressToIAddress,
  mapTransactionToITransaction,
} from "../../../src/utils/helper";
import {
  address,
  mappedAddress,
  mappedTransaction,
  mockedAddress,
  mockedTransaction,
  rates,
  subscription,
  transaction,
  user,
} from "../helper";

describe("Test utils helper functions", () => {
  test("Map address (response) to Address Interface (IAddress)", () => {
    expect(mapAddressToIAddress(address)).toEqual(mappedAddress);
  });

  test("Map Transaction (response) to Transaction Interface (ITransaction)", () => {
    expect(mapTransactionToITransaction(transaction)).toEqual(
      mappedTransaction
    );
  });

  test("Get user subscription for given a User object and an hash", () => {
    expect(
      getUserSubscription(user, "14yXE3APMjErEn4Dme7eRxmd3ahHQxxVzL")
    ).toEqual(subscription);
  });

  test("Get top search hashes for a given search count values", () => {
    expect(getTopSearch(user.searchCounts)).toEqual(user.topSearch);
  });

  test("Get an address example (mock) with a given validation that is an address", () => {
    const generatedAddress = getExampleAddress(false, false);
    expect(generatedAddress.address).toContain(mockedAddress.address);
    expect(generatedAddress.final_balance).toEqual(mockedAddress.final_balance);
    expect(generatedAddress.total_received).toEqual(
      mockedAddress.total_received
    );
    expect(generatedAddress.total_spent).toEqual(mockedAddress.total_spent);
    expect(generatedAddress.total_unspent).toEqual(mockedAddress.total_unspent);
    expect(generatedAddress.tx_count).toEqual(mockedAddress.tx_count);
  });

  test("Get a transaction example (mock) with a given validation that is an transaction", () => {
    const generatedTransaction = getExampleTransaction(false, false);
    expect(generatedTransaction.txid).toContain(mockedTransaction.txid);
    expect(generatedTransaction.number_confirmations).toEqual(
      mockedTransaction.number_confirmations
    );
    expect(generatedTransaction.received_time).toEqual(
      mockedTransaction.received_time
    );
    expect(generatedTransaction.size).toEqual(mockedTransaction.size);
    expect(generatedTransaction.status).toEqual(mockedTransaction.status);
    expect(generatedTransaction.total_fees).toEqual(
      mockedTransaction.total_fees
    );
    expect(generatedTransaction.total_input).toEqual(
      mockedTransaction.total_input
    );
    expect(generatedTransaction.total_output).toEqual(
      mockedTransaction.total_output
    );
  });

  test("Get a transaction example (mock) with a given validation that is an transaction", () => {
    const exchangeValue = exchangeRate(rates, "USD", 0.023);
    expect(exchangeValue).toEqual(637.62785);
  });
});
