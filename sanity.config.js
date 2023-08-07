import {defineConfig} from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './sanity/schemas';


export const config = defineConfig({
  projectId: 'x1vygdo4',
  dataset: 'production',
  title: 'this-fabulous-family-boosted',
  apiVersion: '2023-08-01',
  basePath: '/studio',
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas }
});

export default config;
