export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619beaf89e51b2566865a256',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-cgys86a4',
                  apiId: 'e64a4ec7-7696-4196-97d3-a5591fd936e0'
                },
                {
                  buildHookId: '619beaf8f3d0336c3162d9a3',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-eviqmdbz',
                  apiId: 'f0844dd1-97a9-4149-bf5d-e3045bdf173c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/da-ol-man/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-eviqmdbz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
