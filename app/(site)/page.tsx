//import Image from "next/image";
import { sanityFetch } from '@/sanity/lib/fetch';
import {  getAllBlogPosts  } from '@/sanity/lib/queries'
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
  let posts: SanityDocument[] = [];

try{
  posts = await sanityFetch<SanityDocument[]>({
    query: getAllBlogPosts,
  });

}
catch(error){
  console.log(`Error Fetching allblogposts : ${error}`)
}

console.log(`Data: ${posts}`);
  /*
  React Server Components don't support conditional return statements based on fetched data
  Render conditional UI based on fetched data inside the JSX, not before the return statement.
  */
  //  if(posts.length === 0){
  //    return <div> No posts found</div>
  // }

  return ( 
    <div>
    <h1>Blog Posts</h1>
   
    {
      posts.map((post)=>(
        <div key={post._id}>
          <h2>{post.title}</h2>
          <h2>{post.author}</h2>
          <p><strong>Published At:</strong> {new Date(post._createdAt).toLocaleDateString()}</p>
        
       
        </div>
      ))
    }
  </div>
  );
}
