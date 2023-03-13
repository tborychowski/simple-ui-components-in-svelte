simple-ui-components-in-svelte
==============================

A set of simple, but perfect, UI components, written in Svelte (the only front-end framework worth learning).

### Github pages site with docs
https://perfect-things.github.io/simple-ui-components-in-svelte/


![Screenshot](screen.png)



### TODO
- [ ] add wai-aria roles: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques

- [ ] rebranding to `@perfectthings/ui`:
  - [ ] change `start.svelte` page & logotype
  - [ ] `change package.json` name
  - [ ] publish to npm
  - [ ] update github repo name
  - [ ] update github pages


- [ ] unit-tests backfill & coverage
- [ ] https://github.com/davipon/svelte-component-test-recipes#testing-the-bind-directive-two-way-binding




- [ ] upgrade dialogs? (https://web.dev/building-a-dialog-component/)
- [ ] consider rem vs em (https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/)


- [ ] Bug: toggle doesn't work on mobile
- [ ] Bug: splitter doesn't work on mobile



- [ ] color palette
  - reduce text & bg
  - colors
  - text-primary, secondary
  - rm semi, etc



## Install & Setup

### Firstly, install the module as a dev dependency:
```sh
npm i -D simple-ui-components-in-svelte
```

### Importing the CSS
You need to import the `docs/ui.css` into your bundle.
There are many ways to do that. I specifically didn't use any css-to-js imports as these restrict the tools & the setup you may want to have.

The easiest way is probably to add a `postinstall` script into your `package.json` that will just copy the file into your `dist` folder:
```sh
...
"postinstall": "cp node_modules/simple-ui-components-in-svelte/docs/ui.css ./dist/ui.css"
...
```
From there - you can just add it directly to the `index.html`.

### Svelte components
Just `import` them from the module, as normal:
```js
import { Button } from 'simple-ui-components-in-svelte';
```


## Development

You need node & npm (obviously). Run these:
```sh
git clone git@github.com:perfect-things/simple-ui-components-in-svelte.git
cd simple-ui-components-in-svelte
npm i && npm start
```
A browser window should open with the demo of the components.



## Resources
- icons: https://tablericons.com
- https://developer.apple.com/design/human-interface-guidelines/components/


## Support me
<a href="https://www.buymeacoffee.com/tborychowski" target="_blank"><img height="60" width="217" src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
<br>
<a href="https://liberapay.com/tborychowski/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>
