import Upload from "../artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import FileUpload from "../blockchain/fileUpload";
import Display from "../blockchain/Display";
import Modal from "../blockchain/Modal";

function ProfileUpload() {
    const ethers = require("ethers");
    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const loadProvider = async () => {
            if (provider) {
                window.ethereum.on("chainChanged", () => {
                    window.location.reload();
                });

                window.ethereum.on("accountsChanged", () => {
                    window.location.reload();
                });
                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                setAccount(address);

                const contract = new ethers.Contract(
                    "0x5FbDB2315678afecb367f032d93F642f64180aa3",
                    Upload.abi,
                    signer
                );
                // console.log(contract);
                setContract(contract);
                setProvider(provider);
            } else {
                console.error("Metamask is not installed");
            }
        };
        provider && loadProvider();
    }, []);
    return (
        <>
            {!modalOpen && (
                <button className="share" onClick={() => setModalOpen(true)}>
                    Share
                </button>
            )}
            {modalOpen && (
                <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
            )}

            <div className="upload">
                <h1>Manage files</h1>
                <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>

                <p>Account : {account ? account : "Not connected"}</p>
                <FileUpload
                    account={account}
                    provider={provider}
                    contract={contract}
                ></FileUpload>
                <Display contract={contract} account={account}></Display>
            </div>
        </>
    );
}

export default ProfileUpload;