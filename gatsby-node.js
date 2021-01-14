// const path = require(`path`)



// exports.createPages = async ({ page, actions }) => {
//   const { createPage } = actions
//   if(page.path.match(/^\/groups/)){
//     createPage({
//       path: "/groups",
//       matchPath: "/groups/*",
//       component:path.resolve("/src/pages/groups.js")
      
//     })
//   }
// }

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions

//   // page.matchPath is a special key that's used for matching pages
//   // only on the client.
//   if (page.path.match(/^\/app/)) {
//     page.matchPath = "/app/*"

//     // Update the page.
//     createPage(page)
//   }
// }
//exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions

//   // page.matchPath is a special key that's used for matching pages
//   // only on the client.
//   if (page.path.match(/^\/app/)) {
//     page.matchPath = "/app/*"

//     // Update the page.
//     createPage(page)
//   }
// }


exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

    // Here you can create your static pages
    // createPage();
}
