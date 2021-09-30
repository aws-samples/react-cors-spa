const { web, ProjectType } = require('projen');
const project = new web.ReactTypeScriptProject({
  defaultReleaseBranch: 'main',
  
  name: 'react-cors-spa',
  version: '1.0.0',
  private: false,
  email: 'jguilloi@amazon.fr',
  license: 'MIT',
  copyrightOwner: 'Jean-Baptiste Guillois',

  projectType: ProjectType.APP,

  buildWorkflow: true,

  devDeps: [
    '@testing-library/jest-dom',
    '@testing-library/react',
    '@testing-library/user-event',
  ],

  deps: [
    'react',
    'react-async',
    'react-dom',
    'react-router-dom'
  ]

  // deps: [],                          /* Runtime dependencies of this module. */
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                       /* Build dependencies for this module. */
  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  // release: undefined,                /* Add release management to this project. */
});
project.synth();