'use client';

import { BalancerProvider } from 'react-wrap-balancer';

export function Providers({ children }: { children: React.ReactNode }) {
  return <BalancerProvider>{children}</BalancerProvider>;
}
