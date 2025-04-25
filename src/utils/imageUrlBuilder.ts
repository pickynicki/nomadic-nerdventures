import imageUrlBuilder from '@sanity/image-url'

const config = {
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID!, // replace with your Sanity project ID
  dataset: import.meta.env.PUBLIC_SANITY_DATASET!,      // or your dataset name
}

const builder = imageUrlBuilder(config)

export function urlFor(source) {
  console.log(import.meta.env);
  return builder.image(source).url()
}