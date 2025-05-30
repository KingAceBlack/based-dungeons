import { createConfig, http, WagmiProvider } from "wagmi";
import { mainnet,
   optimism,
   polygon,
   base,
   arbitrum,
   degen } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { farcasterFrame } from "@farcaster/frame-wagmi-connector";

export const config = createConfig({
  chains: [
    base,
    optimism,
    polygon,
    mainnet,
    arbitrum,
    degen
  ],
  transports: {
    [base.id]: http(),
    [mainnet.id]: http(),
    [optimism.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
    [degen.id]: http(),
  },
  connectors: [farcasterFrame()],
});

const queryClient = new QueryClient();

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
