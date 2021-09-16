export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61439e1f0f59fa174269956f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-3x6k3enc",
                  apiId: "30fdd053-c601-4ee0-b80a-3a7a768271d1",
                },
                {
                  buildHookId: "61439e1f56d0600c14d3d641",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ekv6p42p",
                  apiId: "27eac53c-5f09-42f5-8232-e7967c1d0fea",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/tsondger/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ekv6p42p.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
