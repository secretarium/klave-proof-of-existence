<a href="https://klave.com/">
  <img alt="Klave - Proof of existence" src="https://klave.com/images/marketplace/proof-of-existance.svg">
  <h1 align="center">Proof of existence - Certify documents, verify ownership, prove the existence of digital assets easily.</h1>
</a>

<p align="center">
  An implementation on Klave of a Proof of Existence concept which stores hashes and associates to the hash a timestamp and a block height.
</p>

<p align="center">
  <a href="#description"><strong>Description</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#build-locally"><strong>Build Locally</strong></a> ·
  <a href="#test-locally"><strong>Test Locally</strong></a> ·
  <a href="#authors"><strong>Authors</strong></a>
</p>

![Wasm](https://img.shields.io/badge/Webassembly-5E4EE3?style=for-the-badge&labelColor=white&logo=webassembly&logoColor=5E4EE3) ![AssemblyScript](https://img.shields.io/badge/Assemblyscript-3578C7?style=for-the-badge&labelColor=white&logo=assemblyscript&logoColor=3578C7)

## Description

Leverage Klave's cryptographic proof of integrity to prove the existence, certify, or prove the ownership of your digital assets.

The proof existence contract implements an API that provides the following functions:

- Fetch the proof of existence of a digital asset providing a cryptographically trusted timestamp
- Store the proof of existence of a digital asset
- Get the current number of certified digital assets
  
## Features

- **Fetch proof:** Fetch the proof of existence of the hash of a document
- **Store proof:** Store the proof of existence of the hash of a document
- **Fetch index:** Fetch the number of existing documents

## Deploy Your Own

You can deploy your own version of the Klave Proof of Existence to Klave with one click:

[![Deploy on Klave](https://klave.com/images/deploy-on-klave.svg)](https://app.klave.com/template/github/secretarium/klave-proof-of-existence)

## Build Locally

You can build your template into wasm locally, allowing you to validate the hash of the application deployed on Klave.

> Note: You should have node and yarn installed to be able to build locally.

```bash
yarn install
yarn build
```
This will create the .wasm file in the ./klave folder.

## Test Locally

You will find on Klave's github an example of a simple UI to target your proof of existence app deployed using this template:
- Clone this repo: https://github.com/klave-network/examples

## Authors

This library is created by [Klave](https://klave.com) and [Secretarium](https://secretarium.com) team members, with contributions from:

- Jeremie Labbe ([@jlabbeklavo](https://github.com/jlabbeKlavo)) - [Klave](https://klave.com) | [Secretarium](https://secretarium.com)
- Nicolas Marie ([@Akhilleus20](https://github.com/Akhilleus20)) - [Klave](https://klave.com) | [Secretarium](https://secretarium.com)
- Etienne Bosse ([@Gosu14](https://github.com/Gosu14)) - [Klave](https://klave.com) | [Secretarium](https://secretarium.com)
