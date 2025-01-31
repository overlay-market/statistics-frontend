import { SUPPORTED_CHAINID } from "./chains";

export const SRC_DAILY_PROTOCOL_DATA: {
  [chainId in SUPPORTED_CHAINID | number]: string;
} = {
  [SUPPORTED_CHAINID.ARBITRUM_SEPOLIA]: "https://grafana.overlay.market/public-dashboards/2839d73ea7eb4cb98834a7df2fae54e2",
  [SUPPORTED_CHAINID.BARTIO]: "https://grafana.overlay.market/public-dashboards/c9e1f4ced2eb466bb69939c872d70ab7",
}

export const SRC_HOURLY_PROTOCOL_DATA: {
  [chainId in SUPPORTED_CHAINID | number]: string;
} = {
  [SUPPORTED_CHAINID.ARBITRUM_SEPOLIA]: "https://grafana.overlay.market/public-dashboards/43b127230e104df69cb949e625638af5",
  [SUPPORTED_CHAINID.BARTIO]: "https://grafana.overlay.market/public-dashboards/ace364309f724435b49a6086950d6df4",
}

export const SRC_PROTOCOL_GLOBALS: {
  [chainId in SUPPORTED_CHAINID | number]: string;
} = {
  [SUPPORTED_CHAINID.ARBITRUM_SEPOLIA]: "https://grafana.overlay.market/public-dashboards/c97517b6ebd64e6b830a0c8d90fe10c3",
  [SUPPORTED_CHAINID.BARTIO]: "https://grafana.overlay.market/public-dashboards/554619d4561942ea849eb7c92a3cfddb",
}

export const SRC_MARKETS_OI_FUNDING_RATE: {
  [chainId in SUPPORTED_CHAINID | number]: string;
} = {
  [SUPPORTED_CHAINID.ARBITRUM_SEPOLIA]: "https://grafana.overlay.market/public-dashboards/7e1bd3277cb84af8933342a513f2e036",
  [SUPPORTED_CHAINID.BARTIO]: "https://overlay.market",
}


