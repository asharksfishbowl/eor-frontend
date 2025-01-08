import React from 'react';
import { WalletAdapter } from '@solana/wallet-adapter-base';

interface SelectWalletDropdownProps {
    wallets: { adapter: WalletAdapter }[]; // Updated type to match the structure of wallets
    selectedWallet: string | null;
    onWalletSelect: (walletName: string) => void;
    onConnect: () => void;
}

const SelectWalletDropdown: React.FC<SelectWalletDropdownProps> = ({
   wallets,
   selectedWallet,
   onWalletSelect,
   onConnect,
}) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <select
                value={selectedWallet || ''}
                onChange={(e) => onWalletSelect(e.target.value)}
                style={{
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    width: '200px',
                }}
            >
                <option value="" disabled>
                    Select a Wallet
                </option>
                {wallets.map(({ adapter }) => (
                    <option key={adapter.name} value={adapter.name}>
                        {adapter.name}
                    </option>
                ))}
            </select>
            <button
                onClick={onConnect}
                style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                disabled={!selectedWallet}
            >
                Connect
            </button>
        </div>
    );
};

export default SelectWalletDropdown;
