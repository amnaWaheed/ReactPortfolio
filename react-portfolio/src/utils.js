export const getImagesUrl = (path) =>{
    return new URL(`assets/${path}`,import.meta.url).href 
}