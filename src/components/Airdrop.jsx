import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useState } from "react";

export default function Airdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();
    const [amount, setAmount] = useState(0);

    const handleInputChange = (event) => {
        setAmount(event.target.value);
    }

    function sendAirdrop(){
        console.log(`airdrop amout requested is ${amount}ETH`)
        connection.requestAirdrop(wallet.publicKey, amount)
    }

    return(
        <div className="p-6 flex flex-col items-center justify-center bg-violet-600 rounded-2xl mt-6 w-[400px] h-[200px] border-2 border-slate-900">
            <input type="number" className="bg-orange-200 rounded-xl p-2 border-2 border-orange-400" value={amount} onChange={handleInputChange} placeholder="Enter the value" />
            <button className="mt-2 w-[160px] bg-orange-400 border-2 border-violet-600 text-violet-600 rounded-lg font-bold" onClick={sendAirdrop}>Send Airdrop</button>
        </div>
    )
};
