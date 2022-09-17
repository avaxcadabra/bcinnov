// debut 
const { ethers } = require("ethers");

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        await ethereum.request({ method: "eth_requestAccounts"})
    } else {
        window.open("https://metamask.io/download/", "_blank")
    }
}
async function chain() {
     let ethereum = window.ethereum;
     const data = [{
         chainId: '0x1092',
         chainName: 'blockchaininnnov',
         nativeCurrency:
             {
                 name: 'blockchaininnnov',
                 symbol: 'BCI',
                 decimals: 18
             },
         rpcUrls: ['http://127.0.0.1:9650/ext/bc/2VKvYHWy68UNRAkwBDNhJBHnQAQZwXgxP9SENyJLRKpgTHLbBW/rpc'],
         blockExplorerUrls: ['http://127.0.0.1:8000'],
     }]
     const tx = await ethereum.request({method: 'wallet_addEthereumChain', params: data}).catch()
     if (tx) {
         console.log(tx)
     }
 }

module.exports = {
    connect,
    chain,
};

// fin

var isFormVisible = false;

function toggleNewElectionForm() {
  if(isFormVisible) {
    $('#newElectionButton').show();
    $('#newElectionForm').hide();
    isFormVisible = false;
  } else {
    $('#newElectionButton').hide();
    $('#newElectionForm').show();
    isFormVisible = true;
  }
}

async function submitNewElection() {
  var details = document.getElementsByName('details[]');
  var candidates = document.getElementsByName('candidates[]');
  toggleNewElectionForm();
  try {
    await ElectionData.createElection([details[0].value, details[1].value], [candidates[0].value, candidates[1].value]);
    document.getElementById('formData').reset();
  } catch(e) {
    document.getElementById('formData').reset();        
  }
}


