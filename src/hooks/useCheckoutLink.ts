import { useMemo } from 'react';
import { buildURLWithUTM } from '../utils/utm';

const CHECKOUT_BASE_URL = 'https://pay.hotmart.com/I104889347D?checkoutMode=10';

export function useCheckoutLink(): string {
  const checkoutUrl = useMemo(() => {
    return buildURLWithUTM(CHECKOUT_BASE_URL);
  }, []);

  return checkoutUrl;
}
