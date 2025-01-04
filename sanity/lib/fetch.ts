'use server';
import { client } from '@/sanity/lib/client';
import type { QueryParams } from "@sanity/client";
/*
Draft Mode allows you to preview draft content from your headless CMS in next js application
.This is useful for static pages that are generated at build time as it allows one to switch
to dynamic rendering */
import { draftMode } from 'next/headers';

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];



export async function sanityFetch<QueryResponse>({
    query,
    params = DEFAULT_PARAMS,
    revalidate = 60,
    tags = DEFAULT_TAGS,
}:{
    query: string;
  params?: QueryParams
  revalidate?: number | false
  tags?: string[];
}): Promise<QueryResponse>{
    const isDraftMode = (await draftMode()).isEnabled;

    if(isDraftMode){
        throw new Error(
            "The `SANITY_API_READ_TOKEN` environment variable is required."
        )
    }

    // const isDevelopment = process.env.NODE_ENV === 'development';
    return client.fetch(query, params,{
        next:{
            revalidate: tags.length ? false: revalidate,// for simple, time-based revalidation
            tags, //for tag-based revalidation
        }
    })
}