# Welcome to code challenge

## To run this application follow the steps bellow

### `yarn install`
### `yarn start`

I've used 2 different api's (one for getting data and other to create websockets). This configuration can be done in ./src/config/config.ts file. If changed, you need to pay attention to Main files (./src/pages/main/AddressInfo.tsx, ./src/pages/main/TransactionInfo.tsx and ./src/pages/main/List.tsx). I want to move the calls to the endpoint to API.ts file, to don't have duplicated code. If I don't have time, here is a note that is something that I was going to do to centralize all equal call in api and also when the endpoint is changed we can easily change the url address.

**Note: Because Blockchain.info api and Blockcypher websocket api was unstable (especially in testnet), i decided to mock the api and the websocket events to simulate a real experience.**

**Note 2: Another feature i didn't do because i didn't have time was create an api as backend that the frontend would call for authentication, and also requests to blockchain to get information about addresses and transactions. In a real application, all subscriptions would be stored in a database as well as the user and its definition and information. To simplify I also mocked a simulation of an authentication forcing a dummy token in login.**

<br />
<br />

## Main features

### Authentication

An user can insert any email and password to authenticate in the application (since i'm only simulating an authentication) which will take him to the homepage which presents the top 5 searches for addresses and transactions. I didn't connect them but would be something easy as i did in search or in notifications and subscriptions.

### Top Search

In the homepage (clicking in 'Zeply' in the top left of the menu) or calling url '/' will take the user to top 5 searches


### List

In this menu option will search for an hash (either address or transaction), which in a real world would be connected to an endpoint that would retrieve the correct data, since i was having issues because the endpoint was too unstable and had limitation of queries,... i decided to mount all code to be able to get data from an endpoint, but changing the option `MOCK_DATA` to `true` in config file (./src/config/config.ts) will simulate a response from the endpoint and show information.
Either if is an address or a transaction the option of subscribe will show on the bottom of the information and will trigger a subscription to be notified whenever a change happens in the address or transaction.

### Subscriptions

This menu option will show all subscription that an user has and is able to go to address or transaction details (link in the hash).

### Notifications

This menu option will show all notification that an user has, when subscribe an hash, and is able to go to address or transaction details (link in the hash). Also i added a small feature that whenever a notification is created will show an icon next to the `Notifications` menu.

### Change Currency

As requested I add in the menu an option for the user select which currency he want to show the values. This changes all views that has currency values (address information, transaction information,...).

<br />
<br />
<br />

### Tests

Currently I didn't had any tests but I'll try to add cypress and some tests examples until deadline to show you as in a real application I would do.

