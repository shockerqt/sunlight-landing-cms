import { buildConfig } from 'payload/config';
import Categories from './collections/Categories';
import Posts from './collections/Posts';
import Users from './collections/Users';
import { viteBundler } from '@payloadcms/bundler-vite';
import {
  SlateToLexicalFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';
import { mongooseAdapter } from '@payloadcms/db-mongodb';

export default buildConfig({
  admin: {
    bundler: viteBundler(),
    user: Users.slug,
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
  }),
  collections: [Users, Categories, Posts],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      SlateToLexicalFeature(),
    ],
  }),
});
