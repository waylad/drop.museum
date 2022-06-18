import code from '../compiled/FA2_NFT.json'
import { InMemorySigner } from '@taquito/signer'
import { MichelsonMap, TezosToolkit } from '@taquito/taquito'
import { char2Bytes } from '@taquito/utils'
import dotenv from 'dotenv'

import { saveContractAddress } from './helpers'
import metadataJson from './metadata.json'

// Read environment variables from .env file
dotenv.config()

// Initialize RPC connection
//@ts-ignore
const Tezos = new TezosToolkit(process.env.NODE_URL)

// Deploy to configured node with configured secret key
const deploy = async () => {
  try {
    //@ts-ignore
    const signer = await InMemorySigner.fromSecretKey(process.env.SECRET_KEY)

    Tezos.setProvider({ signer })

    const storage = {
      metadata: MichelsonMap.fromLiteral({
        '': char2Bytes('tezos-storage:contents'),
        contents: char2Bytes(JSON.stringify(metadataJson)),
      }),
    }

    const op = await Tezos.contract.originate({ code, storage })
    await op.confirmation()
    console.log(`[OK] ${op.contractAddress}`)
    saveContractAddress('factory', op.contractAddress as string)
  } catch (e) {
    console.log(e)
  }
}

deploy()
