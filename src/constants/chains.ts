import ArbitrumSepoliaLogo from "../assets/images/arbitrum-testnet-logo.png";
import BartioLogo from "../assets/images/bartio-logo.png";
import BscTestnetLogo from '../assets/images/bsc-testnet-logo.webp';

export const CHAIN_ID_LOCAL_STORAGE_KEY = 'selectedChainId'

export enum SUPPORTED_CHAINID {
  ARBITRUM_SEPOLIA = 421614,
  BARTIO = 80084,
  BSC_TESTNET = 97,
}

export const DEFAULT_CHAINID: number = SUPPORTED_CHAINID.BSC_TESTNET;

export const NETWORK_ICONS: {
  [chainId in SUPPORTED_CHAINID | number]: string;
} = {
  [SUPPORTED_CHAINID.ARBITRUM_SEPOLIA]: ArbitrumSepoliaLogo,
  [SUPPORTED_CHAINID.BARTIO]: BartioLogo,
  [SUPPORTED_CHAINID.BSC_TESTNET]: BscTestnetLogo,
};

export const CHAIN_LIST: { [chainId in SUPPORTED_CHAINID | number]: string } = {
  // [SUPPORTED_CHAINID.ARBITRUM_SEPOLIA]: "Arbitrum Sepolia",
  // [SUPPORTED_CHAINID.BARTIO]: "Berachain bArtio",
  [SUPPORTED_CHAINID.BSC_TESTNET]: 'Binance Smart Chain Testnet',
};

export const CHAIN_LIST_ORDER: { [x: number]: number } = {
  // [0]: SUPPORTED_CHAINID.BARTIO,
  // [1]: SUPPORTED_CHAINID.ARBITRUM_SEPOLIA,
  [2]: SUPPORTED_CHAINID.BSC_TESTNET,
};