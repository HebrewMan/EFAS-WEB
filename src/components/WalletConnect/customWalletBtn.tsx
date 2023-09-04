import { ConnectButton } from '@rainbow-me/rainbowkit';
import './index.scss'
import { Button } from 'antd';
import { WalletOutlined, } from '@ant-design/icons';

export const CustomWalletBtn = ({ walletText = "Log In With Wallet" }) => {
    const handleBtnClick = (event: React.MouseEvent, action: () => void) => {
        event.stopPropagation(); // This will stop the event from being propagated to parent elements
        action && action();
    }

    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');
                return (
                    <div className='wh-full'
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    // <button  className='connect-btn hover' type="button">
                                    //     Connect Wallet
                                    // </button>
                                    <Button onClick={(event) => handleBtnClick(event, openConnectModal)} type="primary" icon={<WalletOutlined />} className='btn wh-full text-14px'>
                                        {walletText}
                                    </Button>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <button onClick={(event) => handleBtnClick(event, openChainModal)} className='connect-btn' type="button">
                                        Wrong network
                                    </button>
                                );
                            }
                            return (
                                <div style={{ display: 'flex', gap: 12 }}>
                                    <button className='connect-btn'
                                        onClick={openChainModal}
                                        style={{ display: 'flex', alignItems: 'center' }}
                                        type="button"
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    background: chain.iconBackground,
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: 999,
                                                    overflow: 'hidden',
                                                    marginRight: 4,
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <img
                                                        alt={chain.name ?? 'Chain icon'}
                                                        src={chain.iconUrl}
                                                        style={{ width: 12, height: 12 }}
                                                    />
                                                )}
                                            </div>
                                        )}
                                        {chain.name}
                                    </button>
                                    <button className='connect-btn' onClick={openAccountModal} type="button">
                                        {account.displayName}
                                        {account.displayBalance
                                            ? ` (${account.displayBalance})`
                                            : ''}
                                    </button>

                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};