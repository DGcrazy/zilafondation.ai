let provider;
let signer;
let userAddress;

const ZILA_CONTRACT="0xd23b7c66a2ecc676bba26df94cf75a70099a3c42";

async function connectWallet(){

if(!window.ethereum){

alert("Install MetaMask");
return;

}

provider = new ethers.providers.Web3Provider(window.ethereum);

await provider.send("eth_requestAccounts",[]);

signer = provider.getSigner();

userAddress = await signer.getAddress();

const message="Sign this message to connect to ZILA AI DeFi Platform";

await signer.signMessage(message);

document.getElementById("connectBtn").innerText=
userAddress.slice(0,6)+"..."+userAddress.slice(-4);

getBalances();

}

async function getBalances(){

const balance=await provider.getBalance(userAddress);

document.getElementById("maticBalance").innerText=
ethers.utils.formatEther(balance);

}

function showPage(page){

document.querySelectorAll(".page")
.forEach(p=>p.classList.remove("active"));

document.getElementById(page).classList.add("active");

}

function goHome(){

location.reload();

}
