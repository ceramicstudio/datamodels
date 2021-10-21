# NFT metadata standard DataModel

DataModel implementation of the **NFT metadata standard** schema and definition specified in [CIP-19](https://github.com/ceramicnetwork/CIP/blob/main/CIPs/CIP-19/CIP-19.md).

## Installation

```sh
npm install -D @datamodels/nft-metadata-standard
```

## Rationale

The ** NFT metadata standard ** contains a DID's basic profile information.

By standardizing profile information for DIDs, th NFT metadata standard  simplifies how applications can view and display the profiles of their users.

**NFT metadata standard**: basica schame for nft metadata using the [opensa sea standards](https://docs.opensea.io/docs/metadata-standards)

**DID-agnostic support:** Since Ceramic documents can be created and controlled by any DID, the NFT metadata standard can be used in conjunction with any DID method.

## Schemas

### [BasicProfile](./schemas/nftMetadata.json)

## License

Dual licensed under MIT and Apache 2
