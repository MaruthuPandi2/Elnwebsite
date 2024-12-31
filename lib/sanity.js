import { createClient } from 'next-sanity';
export const client = createClient({
    projectId: 'p5knmc1b', 
    dataset: 'production', 
    apiVersion: '2024-09-03', // use the latest version date
    useCdn: true, 
});
