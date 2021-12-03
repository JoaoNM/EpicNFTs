const main = async () => { 
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
    const nftContract = await nftContractFactory.deploy(); 
    await nftContract.deployed();

    console.log('contract deployed to:', nftContract.address);

    // call function 
    let txn = await nftContract.makeAnEpicNFT();
    // wait for mining 
    await txn.wait(); 

    // mint another one for fun 
    txn = await nftContract.makeAnEpicNFT();
    // wait for mining (again)
    await txn.wait();
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();