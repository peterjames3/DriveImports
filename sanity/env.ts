export const apiVersion =
process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-14'

export const dataset = assertValues(process.env.NEXT_PUBLIC_DATASET, 'Missing environment variables: NEXT_PUBLIC_SANITY_DATASET')
export const projectId = assertValues(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 'Missing environment variables: NEXT_PUBLIC_SANITY_PROJECT_ID')

//The <T> part in the function is a generic type in Typescript. It allows the function to work with values of any type
//e.g string, number, boolean, etc
function assertValues<T>(v: T | undefined, errorMessage: string): T{
    if (v === undefined) {
        throw new Error(errorMessage)
    }
    return v
}

