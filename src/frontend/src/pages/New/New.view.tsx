import { Input } from 'app/App.components/Input/Input.view'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import { create } from 'ipfs-http-client'

// prettier-ignore
import { NewBgLeft, NewBgRight, NewGrid, NewStyled, UploaderFileSelector, UploaderLabel } from './New.style'
const { create } = require('ipfs-http-client')

const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
})

type NewViewProps = {
  tempTxCallback: (amount: number) => void
  loading: boolean
  accountPkh?: string
}

export const NewView = ({ tempTxCallback, loading, accountPkh }: NewViewProps) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  async function handleUpload(file: File) {
    try {
      setIsUploading(true)

      const uploadImage = await client.add(file)
      setImageUrl(`ipfs://${uploadImage.path}`)
      console.log(`Uploaded to ipfs://${uploadImage.path}`)

      setIsUploading(false)
    } catch (error: any) {
      console.error(error)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <NewGrid>
      <NewBgLeft>
        <img alt="bg-left" src="/bg2-left.svg" />
      </NewBgLeft>
      <NewStyled>
        <Link to="/">
          <img alt="logo" src="/logo.svg" />
        </Link>

        <div>
          You are about to create an NFT airdrop. This page will allow you to deploy a new FA2 smart contract. You will be the owner of the
          contract and have full admin rights over it, not drop.museum. You will then receive a link and a QR code that you can share and
          will allow people to mint an NFT from your contract.
        </div>
        <div>
          Logged in as <b>{accountPkh}</b>
        </div>

        <label htmlFor="name">Name</label>
        <Input
          name="name"
          placeholder=""
          type="text"
          onChange={(e: any) => setName(e.target.value)}
          value={name}
          onBlur={() => {}}
          inputStatus={undefined}
          errorMessage={undefined}
        />

        <label htmlFor="name">Description</label>
        <Input
          name="description"
          placeholder=""
          type="text"
          onChange={(e: any) => setDescription(e.target.value)}
          value={description}
          onBlur={() => {}}
          inputStatus={undefined}
          errorMessage={undefined}
        />

        <label htmlFor="image">Image</label>
        {imageUrl ? (
          <div>{imageUrl}</div>
        ) : (
          <UploaderFileSelector>
            <UploaderLabel htmlFor="uploader">{isUploading ? 'Uploading...' : 'Upload with Filecoin'}</UploaderLabel>
            <input
              id="uploader"
              type="file"
              accept="image/*"
              onChange={(e) => e.target && e.target.files && e.target.files[0] && handleUpload(e.target.files[0])}
            />
          </UploaderFileSelector>
        )}

        <Link to="/new/KT1xxxxxx">
          <img alt="button-deploy" src="/button-deploy.svg" />
        </Link>
      </NewStyled>
      <NewBgRight>
        <img alt="bg-right" src="/bg2-right.svg" />
      </NewBgRight>
    </NewGrid>
  )
}
