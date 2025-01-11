//import Image from "next/image";
import { sanityFetch } from '@/sanity/lib/fetch';
import {  getAllBlogPosts, getHomePageData,  getHeroData  } from '@/sanity/lib/queries'
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/client'
import  { SanityDocument } from 'next-sanity';

/*
SanityDocument is essential  for defining the structure of document fetched
 from Sanity CMS, enabling type safety.

 Type Definition. `SanityDocument` represents a document retrieved from Sanity. It 
                  typically includes properties like _id, _type and any additional fields defined in your Sanity schema

 */
 /* 
 NB getstaticProps and getServerSideProps  data-fetching functions are not supported in App Router.
 They are specific to the Pages Router

 The App Router uses a different approach for data fetching, relying on fetch and async/awaitdirectly inside components** or **usingasync components.
 */

// export async function getStaticProps(){
//   const posts: SanityDocument[] = await client.fetch( getAllBlogPosts ) 

//   return {
//     props:{
//       posts,
//     },
//     revalidate: 60,
//   }
// }

export default  async function Home() {
  //let posts: SanityDocument[] = [];
  let  homePageData: SanityDocument[] = [];
  try{
    homePageData = await sanityFetch<SanityDocument[]>({
      query: getHomePageData,
    });
  }
  catch(error){
    console.error(error);
  }

  console.log( getHomePageData)

// try{
//   posts = await sanityFetch<SanityDocument[]>({
//     query: getHomePageData,
//   });

// }
// catch(error){
//   console.log(`Error Fetching allblogposts : ${error}`)
// }

// console.log(`Data: ${posts}`);
  /*
  React Server Components don't support conditional return statements based on fetched data
  Render conditional UI based on fetched data inside the JSX, not before the return statement.
  */
  //  if(posts.length === 0){
  //    return <div> No posts found</div>
  // }

  return (  <div>
    {homePageData.length === 0 ? (
      <p>No data available</p>
    ) : (
      homePageData.map((page) => (
        <div key={page._id}>
          <h1 className="text-xl font-bold">{page.title}</h1>
          {page.sections?.map((section, index) => {
            if (section._type === 'hero') {
              return (
                <div key={index}>
                  <h2 className="text-3xl">{section.heading}</h2>
                  <p>{section.tagline}</p>
                  <p>{section.subTagline}</p>
                  {section.imageUrl && (
                    <Image
                      src={section.imageUrl}
                      alt="Hero Image"
                      width={800}
                      height={400}
                    />
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>
      ))
    )}
  </div>
  );
}
