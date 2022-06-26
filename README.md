# drop.museum

## Live Demo : https://drop.museum

## Demo Video : Currently uploading, coming very soon!

# About

drop.museum is an open-source, friendly platform that allows artists and museums to create an NFT Airdrop for their users/visitors.

![](https://drop.museum/screenshots/home.png)

You are about to create an NFT airdrop. This page will allow you to deploy a new FA2 smart contract. You will be the owner of the contract and have full admin right on it, not drop.museum. Once deployed, you will be able to create a new token and associated airdrop.

![](https://drop.museum/screenshots/originate.png)

The next step is to create a new token and associated airdrop in the smart contract (Note that only the admin of your contract can do so.) Please enter a name and description for your NFT airdrop and upload an image via IPFS. (The current version of drop.museum only support airdrop of identical NFT art, but next versions will allow airdrop of unique NFT art per mint.) You will then receive a link and a QR code that you can share with your users/visitors to mint an NFT from your contract.

![](https://drop.museum/screenshots/create.png)

Share this url or QR code with your visitors for them to mint your NFT.

![](https://drop.museum/screenshots/qrcode.png)

Congratulation, you can participate in this airdrop and mint the NFT below!

![](https://drop.museum/screenshots/mint.png)

# How to run

## Live demo

You can access a demo on https://drop.museum
Make sure you have installed the **Temple** wallet and have selected **Ithacanet**

## Smart contracts

If you want to redeploy the smart contracts, go to `src/contracts`, rename `.env.example` to `.env` and fill in your private and public addresses. Then run:

```
yarn install
make compile
make test
make deploy
```

Note: We have used [Pierre-Emmanuel Wulfman’s FA2 implementation](<https://github.com/pewulfman/Tezos-TZIP-implementation/tree/main/TZIP-12%20(FA2)>) and customized it to generate airdrops. Howver this implementation lack any mean of deployment so we have coded our own deployment script in `Makefile`.

## Frontend

If you want to run the frontend locally, got to `src/frontend` and run:

```
yarn install
yarn start
```

# Questions?

If you need anything, please let me know at waylad42@gmail.com
