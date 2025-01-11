/*import & create a new client instance, and use its methods to interact with your project's content lake
 */
import { createClient } from 'next-sanity';
//Import  {createClient} from 'https://esm.sh/@sanity/client
import { apiVersion, dataset, projectId } from '@/sanity/env';
//
import  imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true, //set it to 'false' to bypass the edge cache
    /*Edge Cache  refers to a content delivery strategy where data is stored on servers (edge nodes) geographically closer to the end-users
    . This reduces latency and improves the performance of API responses.
    
    In the Sanity content useCdn:true means:
    1. Faster Data Fetchng: Cached content is delivered from edge nodes instead of hitting the origin Sanity database everytime
    2.Reduced Latency: Users worldwide get faster responses as content is served from the closet edge server
    
    useCdn: false:

    Bypasses the CDN and fetches fresh data directly from the Sanity API.
    Best for: Real-time content, frequently changing data, or admin dashboards.
    Pros: Always returns the most up-to-date data.
    Cons: Slightly slower response time and higher resource usage.
    */
})

// Helper for images URLS
 const Builder = imageUrlBuilder(client)
export const urlFor = (source: string) => Builder.image(source);

