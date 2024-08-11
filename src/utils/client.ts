import {createClient} from '@sanity/client';


const projectId =
  import.meta.env.SANITY_STUDIO_PROJECT_ID!;
  const dataset =
  import.meta.env.SANITY_STUDIO_DATASET!;

const client = createClient({
    projectId,
    dataset,
    useCdn: true
});

export default client;