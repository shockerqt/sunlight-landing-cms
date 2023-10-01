import { payloadCloud } from '@payloadcms/plugin-cloud';
import path from 'path';
import { buildConfig } from 'payload/config';
import Categories from './collections/Categories';
import Posts from './collections/Posts';
import Users from './collections/Users';

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Categories,
    Posts,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud()
  ]
});
