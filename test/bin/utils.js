/**
 * @typedef { import("../../types/plugins").SanityBuildPluginEntity } SanityBuildPluginEntity
 */

import test from 'ava'

import { getSanityPluginLookup } from '../../bin/utils.js'

test('should generate Sanity build plugin lookup', async (t) => {
  /**
   * @type {Promise<SanityBuildPluginEntity[]>}
   */
  const query = Promise.resolve([
    {
      authors: [{ _id: '03fb09e4-2f37-4242-a9f2-664daf4c7ff9', name: 'Ben Lmsc' }],
      compatibility: null,
      description: 'Make some environment variables available only at build time in the runtime of your application.',
      packageName: 'netlify-plugin-use-env-in-runtime',
      repoUrl: 'https://github.com/ARKHN3B/netlify-plugin-use-env-in-runtime',
      title: 'Use Env in Runtime',
      version: '1.2.1',
    },
    {
      authors: [{ _id: '1dccdb09-71f8-482a-aa0f-9bae32df2e2a', name: 'Bharathvaj Ganesan' }],
      compatibility: null,
      description: 'Automatically notifies Airbrake of new site deploys.',
      packageName: '@bharathvaj/netlify-plugin-airbrake',
      repoUrl: 'https://github.com/bharathvaj-ganesan/netlify-plugin-airbrake',
      title: 'Airbrake',
      version: '1.0.2',
    },
    {
      authors: [{ _id: 'eaf7029b-a72b-406f-a2cc-4b8b48fb50a3', name: null }],
      compatibility: null,
      description: 'Debug & verify the contents of your Netlify build cache',
      packageName: 'netlify-plugin-debug-cache',
      repoUrl: 'https://github.com/netlify-labs/netlify-plugin-debug-cache',
      title: 'Debug cache',
      version: '1.0.4',
    },
  ])
  const expected = {
    'netlify-plugin-use-env-in-runtime': {
      authors: [{ _id: '03fb09e4-2f37-4242-a9f2-664daf4c7ff9', name: 'Ben Lmsc' }],
      compatibility: null,
      description: 'Make some environment variables available only at build time in the runtime of your application.',
      packageName: 'netlify-plugin-use-env-in-runtime',
      repoUrl: 'https://github.com/ARKHN3B/netlify-plugin-use-env-in-runtime',
      title: 'Use Env in Runtime',
      version: '1.2.1',
    },
    '@bharathvaj/netlify-plugin-airbrake': {
      authors: [{ _id: '1dccdb09-71f8-482a-aa0f-9bae32df2e2a', name: 'Bharathvaj Ganesan' }],
      compatibility: null,
      description: 'Automatically notifies Airbrake of new site deploys.',
      packageName: '@bharathvaj/netlify-plugin-airbrake',
      repoUrl: 'https://github.com/bharathvaj-ganesan/netlify-plugin-airbrake',
      title: 'Airbrake',
      version: '1.0.2',
    },
    'netlify-plugin-debug-cache': {
      authors: [{ _id: 'eaf7029b-a72b-406f-a2cc-4b8b48fb50a3', name: null }],
      compatibility: null,
      description: 'Debug & verify the contents of your Netlify build cache',
      packageName: 'netlify-plugin-debug-cache',
      repoUrl: 'https://github.com/netlify-labs/netlify-plugin-debug-cache',
      title: 'Debug cache',
      version: '1.0.4',
    },
  }
  const actual = await getSanityPluginLookup(query)
  t.deepEqual(actual, expected)
})
