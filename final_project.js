
// create a variable to hold your NFT's
const NFTs = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
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


// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("\nID: \t\t" + (i + 1));
    console.log("Name: \t\t" +NFTs[i].name);
    console.log("Eyecolor: \t" +NFTs[i].eyecolor);
    console.log("Shirt Type:\t" +NFTs[i].shirtType);
    console.log("Bling: \t\t" +NFTs[i].bling);
  }
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\n", +NFTs.length);
}

// call your functions below this line
mintNFT("Tushar", "black", "shirt full sleeve", " Gold bracelet");
mintNFT("Deepesh", "grey", "Hoodie", "Gold chain");
mintNFT("Harsh", "blue", "Jacket", "Ear ring");
mintNFT("Amit", "brown", "Hoodie", "Silver bracelet");
listNFTs();
getTotalSupply();
