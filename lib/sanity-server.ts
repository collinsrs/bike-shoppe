/**
 * Server-side Sanity utilities. By having these in a separate file from the
 * utilities we use on the client side, we are able to tree-shake (remove)
 * code that is not used on the client side.
 */
import { createClient } from 'next-sanity';
import { sanityConfig } from './sanity-config';

export const sanityClient = createClient(sanityConfig);

export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: 'sk3fnBd2W6aC52N0zSkjIsp7SeEZpFiIsOWtMP0Kb209cC9BtGwfkBxBfUJ4UhJddKyrP59ZairL5vRxOMu1LaGDCpwcMiDpscICj8qMmrXWXjbaTJBf6fTxN7CbsRYAkpEVabkamj4h9Tfw22A3LzctzBGky1kSW5AbYOysNMRAZVOZn8ko'
});

export const getClient = (preview) => (preview ? previewClient : sanityClient);
