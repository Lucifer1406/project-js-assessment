# project-js-assessment


This code represents a simple NFT system that mints unique digital assets with metadata, stores them in an array, and provides functions to display and track the total supply of NFTs.

This code represents a simple NFT system that mints unique digital assets with metadata, stores them in an array, and provides functions to display and track the total supply of NFTs.

## Description

This code defines a simple system for minting, storing, and listing NFTs (Non-Fungible Tokens) in JavaScript. Each NFT contains basic metadata like a name, eye color, shirt type, and bling, which are stored in an array. The program also includes functions to mint new NFTs, display their metadata, and print the total number of NFTs created.

## Getting Started
To run this program, you can use Gitpod . To get started, go to the Gitpod website at https://metacrafter-beginningja-qr8y122txo3.ws-us116.gitpod.io/
Set up All configuration and create a js file.
Write your code on this website and run your code.

### Executing program

To run this program, you can use Gitpod Compiler. To get started, go to the Gitpod website at https://metacrafter-beginningja-qr8y122txo3.ws-us116.gitpod.io/
Create your file. And Set up all confuguration.
Write your code on this file and run your code.


###Variable to Hold NFTs
```javascript
const NFTs = [];
```

###Function to Mint NFTs: The mintNFT() function accepts four parameters (name, eyecolor, shirtType, bling), which represent the properties of the NFT.It creates an NFT object using the passed parameters.
```javascript
function mintNFT(name, eyecolor, shirtType, bling) {
  const NFT = {
    name: name,
    eyecolor: eyecolor,
    shirtType: shirtType,
    bling: bling,
  };
  NFTs.push(NFT);
  console.log("Minted \t" + name);
}

```
###Function to List All NFTs: listNFTs() loops through the NFTs array, printing out each NFT's metadata.
###For each NFT in the array, it logs the ID (which is the index + 1), and the metadata like name, eyecolor, shirtType, and bling.
```javascript
function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("\nID: \t\t" + (i + 1));
    console.log("Name: \t\t" +NFTs[i].name);
    console.log("Eyecolor: \t" +NFTs[i].eyecolor);
    console.log("Shirt Type:\t" +NFTs[i].shirtType);
    console.log("Bling: \t\t" +NFTs[i].bling);
  }
}
```
###Function to Get Total NFT Supply:getTotalSupply() logs the total number of NFTs that have been minted by printing the length of the NFTs array, which represents the total supply of NFTs
```javascript
function getTotalSupply() {
  console.log("\n", +NFTs.length);
}
```
###Minting and Listing NFTs: Four NFTs are minted with different metadata and stored in the NFTs array.
```javascript
mintNFT("Tushar", "black", "shirt full sleeve", " Gold bracelet");
mintNFT("Deepesh", "grey", "Hoodie", "Gold chain");
mintNFT("Harsh", "blue", "Jacket", "Ear ring");
mintNFT("Amit", "brown", "Hoodie", "Silver bracelet");
listNFTs();
getTotalSupply();

```



## Authors

Tushar Srivastav 



## License

This project is licensed under the MIT License - see the LICENSE.md file for details

