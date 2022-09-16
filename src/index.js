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
         chainId: '0x1A',
         chainName: 'avaxcadabra',
         nativeCurrency:
             {
                 name: 'avaxcadabra',
                 symbol: 'AXD',
                 decimals: 18
             },
         rpcUrls: ['http://pedro.dcbra.in:9650/ext/bc/2BEDN7HrZGETv6uZSUxuW5G29hvEMa4PpgWuavm1iEyjP9VUxy/rpc'],
         blockExplorerUrls: ['http://pedro.dcbra.in:8000'],
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


