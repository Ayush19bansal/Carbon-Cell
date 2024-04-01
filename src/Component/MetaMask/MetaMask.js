import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import meta from "../../assests/meta2.webp"
import "./meta.css"
import Navigation_Bar from '../Navbar/Navigation_Bar';
import Navbar2 from '../NavBar2/Navbar2';

function MetaMask() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadWeb3() {
      if (window.ethereum) {
        try {
          // Request access to MetaMask accounts
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          // Get the currently selected account
          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);

          // Subscribe to MetaMask account change events
          window.ethereum.on('accountsChanged', (newAccounts) => {
            setAccount(newAccounts[0]);
          });
        } catch (error) {
          setError('Failed to connect to MetaMask. Please make sure MetaMask is installed and unlocked.');
        }
      } else {
        setError('MetaMask is not installed. Please install MetaMask to use this feature.');
      }
    }

    loadWeb3();
  }, []);

  const handleConnectWallet = async () => {
    try {
      // Request access to MetaMask accounts
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    } catch (errors) {
      setError('Failed to connect to MetaMask. Please make sure MetaMask is installed and unlocked.');
      alert(error)
    }
  };

  return (
    <div className='metacont'>
      <Navbar2/>
      <Navigation_Bar/>
      <div className='metacotainer'>
      <img src={meta} className='meta2'></img>
      {account ? (
        <p>Connected account: {account}</p>
      ) : (
        <>
          <button onClick={handleConnectWallet}>Connect Wallet</button>
          {error && <p>{error}</p>}
        </>
      )}
      </div>
    </div>
  );
}

export default MetaMask;
