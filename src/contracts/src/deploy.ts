import { InMemorySigner } from '@taquito/signer'
import { MichelsonMap, TezosToolkit } from '@taquito/taquito'
import { char2Bytes } from '@taquito/utils'
import dotenv from 'dotenv'
import { buf2hex } from '@taquito/utils'

import code from './compiled/FA2_NFT.json'
import { saveContractAddress } from './helpers'
import metadataJson from './metadata.json'

// Read environment variables from .env file
dotenv.config()

console.log('Deploying at', process.env.NODE_URL, 'with', process.env.PKH)

// Initialize RPC connection
//@ts-ignore
const Tezos = new TezosToolkit(process.env.NODE_URL)

// Deploy to configured node with configured secret key
const deploy = async () => {
  try {
    //@ts-ignore
    const signer = await InMemorySigner.fromSecretKey(process.env.SECRET_KEY)

    Tezos.setProvider({ signer })

    // Deploy Smart Contract
    const storage = {
      ledger: MichelsonMap.fromLiteral({}),
      token_metadata: MichelsonMap.fromLiteral({}),
      operators: MichelsonMap.fromLiteral({}),
      admin: process.env.PKH,
    }
    console.log('Originating...')
    const op = await Tezos.contract.originate({ code, storage })
    await op.confirmation()
    console.log(`Deployed at ${op.contractAddress}`)
    saveContractAddress('fa2', op.contractAddress as string)

    // Test Create NFT Token
    const contract = await Tezos.contract.at(op.contractAddress as string)
    console.log(`List all contract methods: ${Object.keys(contract.methods)}\n`)
    console.log(`Signature of 'create_token': ${JSON.stringify(contract.methods.create_token().getSignature(), null, 2)}`)
    const token_id = 0
    const token_info = MichelsonMap.fromLiteral({
      name: Buffer.from('TEST').toString('hex'),
      symbol: Buffer.from('TEST').toString('hex'),
      description: Buffer.from('0').toString('hex'),
    })
    const createTransaction = await contract.methods.create_token(token_id, token_info, token_id).send()
    const createDone = await createTransaction.confirmation()
    console.log(createDone)

    // Test Mint NFT
    console.log(`Signature of 'mint_token': ${JSON.stringify(contract.methods.mint_token().getSignature(), null, 2)}`)
    const owner = process.env.PKH
    console.log('owner', owner)
    const mintTransaction = await contract.methods.mint_token([{ owner, token_id }]).send()
    const mintDone = await mintTransaction.confirmation()
    console.log(mintDone)
  } catch (e) {
    console.log(e)
  }
}

deploy()
