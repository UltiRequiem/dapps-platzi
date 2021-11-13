const { ethers } = require('ethers');
const process = require('node:process');

const deploy = async ()=>{
    const [deployer] = await ethers.getSigners()
    console.log(`Deploying with ${deployer}.`)
    const PlatziPunks = await ethers.getContractFactory('PlatziPunks')
    const deployed = await PlatziPunks.deploy(deployer)
}

deploy().then(()=>process.exit(0))
