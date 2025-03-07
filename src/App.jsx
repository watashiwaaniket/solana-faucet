import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import './App.css'
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css'
import Airdrop from './components/Airdrop'



function App() {
  return (
    <>
    <ConnectionProvider endpoint={import.meta.env.VITE_ALCHEMY_DEVNET_RPC_URL}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className='w-[560px] h-[600px] flex flex-col items-center justify-center bg-[#640D5F] rounded-3xl p-4 text-slate-900 border-2 border-orange-400'>
            <div className='flex flex-col items-center justify-center bg-[#D91656] rounded-2xl p-6 w-[400px] h-[280px] border-2 border-slate-900'>
              <h2 className='font-bold text-3xl'>Solana Faucet</h2>
              <p className='text-[#FFB200] font-semibold mb-8'>Gift yourself some devnet solana!</p>
              <h2 className='font-semibold text-base'>Connect Wallet</h2>
              <WalletMultiButton />
            </div>
            <Airdrop />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
    </>
  )
}

export default App
