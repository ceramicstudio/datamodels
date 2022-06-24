# Work Credential DataModel

## Installation

```sh
npm install -D @datamodels/work-credentials
```

## Rationale

**WorkCredential** is a data model that assigns context data (what was paid for/what work was paid for) to payments on the on-chain.

Blockchain allows **"who paid how much to whom"** to be recorded in a distributed ledger, but only **financial data** is stored in the transaction history. WorkCredential adds **non-financial data** to the transaction as well.

Since this **WorkCredential** is tied to the DID, it allows individuals to own and prove their work performance data.

This is, so to speak, a receipt and a CV in the Web3 domain.

## Schemas

### [WorkCredential](./schemas/WorkCredential.json)
### [WorkCredentials](./schemas/WorkCredentials.json)


## License

Dual licensed under MIT and Apache 2
