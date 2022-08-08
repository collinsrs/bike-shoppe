export const sanityConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: 'nb6dptbv',
  useCdn: process.env.NODE_ENV !== 'production',
  apiVersion: '2022-02-03'
};
