module.exports = (plop) => {
  plop.addHelper( "upperCase", ( text ) => text.toUpperCase() );
  plop.setGenerator("component", {
    description: "Create a new Component",
    // Get inputs from the user.
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?"
      }
    ],
    actions: [
      // Add a new Component + vue, js & scss boilerplates.
      {
        type: "add",
        path: "app/components/{{name}}/{{name}}.js",
        templateFile: "plop-templates/component-js.txt"
      },
      {
        type: "add",
        path: "app/components/{{name}}/index.vue",
        templateFile: "plop-templates/component-vue.txt"
      },
      {
        type: "add",
        path: "app/components/{{name}}/styles.scss",
        templateFile: "plop-templates/component-scss.txt"
      },
    ]
  });
}
