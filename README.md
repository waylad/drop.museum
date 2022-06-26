# drop.museum

## Live Demo: https://drop.museum

## Demo Video: https://youtu.be/1frvVAl_OY4

# About

## What is it?

drop.museum is an open-source, friendly platform that allows artists and museums to create an NFT Airdrop for their users/visitors in a few clicks while retaining full admin access over their smart contract.

Go to https://drop.museum to try the demo. Make sure you have installed the **Temple Wallet** and connected it to **Ithacanet**. The Homepage presents the concept of the site:
![](https://drop.museum/screenshots/home.png)

We created a great design for the platform and took a great domain name as we intend to make this an actual product on the mainnet in the coming months.

Once on the homepage, click connect and allow the Dapp to connect to your wallet. The next page will allow you to deploy a new FA2 smart contract. Indeed, you are not using a pre-deployed smart contract but actually deploying a brand new FA2 contract via the platform. You will be the owner of the contract and have full admin right on it, not drop.museum. This makes the platform very interesting for artists and museums that want to stay independent. There is no obligation to keep using drop.museum at any time, the artist/museum can just connect and manage his smart contract on any other platform.
![](https://drop.museum/screenshots/originate.png)

Once the contract is deployed, the next step is to create a new token and associated airdrop in the smart contract (Note that only the admin of the contract can do so.) Please enter a name and description for your NFT airdrop and upload an image via IPFS. (The current version of drop.museum only supports airdrops of identical NFT art, but the next versions will allow multiple unique NFT art per airdrop.)

![](https://drop.museum/screenshots/create.png)

You then receive a link and a QR code that you can share with your users/visitors to mint an NFT from your contract.

![](https://drop.museum/screenshots/qrcode.png)

Now, as a user/visitor, scan the QR code and visit the provided mint URL. Connect your wallet and click mint, you will then receive the NFT in your wallet.

![](https://drop.museum/screenshots/mint.png)

## What's next?

drop.museum is only at the Proof-of-concept level right now. In the coming months, we want to:

- Make the platform compatible with mobiles. Right now, you cannot connect Temple to the Dapp on a mobile. We have however seen alternative solutions such as Airgap wallet that seem to provide such a feature.

- Make the mint seamless. Instead of scanning a QR code that redirects you to the mint page on drop.museum, we want to create a QR code that contains the unsigned mint transaction already. That way you can just scan it with your mobile wallet, sign it and send it, without having to ever go to drop.museum at all.

- Add the possibility to upload multiple NFT arts in an airdrop so visitors would get a unique NFT art per mint.

- Add options such as the max number to mint, start and stop dates, etc...

# How to run

You can access a demo on https://drop.museum
However, if you'd rather deploy and run the platform locally, here are the instructions:

## Smart contracts

If you want to redeploy the smart contracts, go to `src/contracts`, rename `.env.example` to `.env` and fill in your private and public addresses. Then run:

```
yarn install
make compile
make test
make deploy
```

Note: We have used [Pierre-Emmanuel Wulfman’s FA2 implementation](<https://github.com/pewulfman/Tezos-TZIP-implementation/tree/main/TZIP-12%20(FA2)>) and customized it to generate airdrops. However, this implementation lacks any means of deployment so we have coded our own deployment script in `Makefile`.

## Frontend

If you want to run the frontend locally, go to `src/frontend`, rename `.env.example` to `.env` and fill in your own data. Then run:

```
yarn install
yarn start
```

# Questions?

If you need anything, please let me know at waylad42@gmail.com
