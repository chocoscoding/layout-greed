# layout-greed

Layout guidlines to make sure you are on the right track when developing.
Inspired by Figma 💄

# Installing

For npm users - `npm install layout-greed`

For yarn users - `yarn install layout-greed`

# Demo
 ### Grids
![Example Image](https://res.cloudinary.com/chocoscoding/image/upload/v1694645658/Web_capture_13-9-2023_234458_localhost_p9erja.jpg)
 ### Rows
![Example Image](https://res.cloudinary.com/chocoscoding/image/upload/v1694645657/Web_capture_13-9-2023_234614_localhost_y9gi6x.jpg)
 ### Columns
![Example Image](https://res.cloudinary.com/chocoscoding/image/upload/v1694645658/Web_capture_13-9-2023_234636_localhost_pc6zkk.jpg)


[![Edit strange-currying-48g5tr](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/strange-currying-48g5tr?fontsize=14&hidenavigation=1&theme=dark)

# How to use

- For normal use

```jsx
import { Layout } from 'layout-greed';
const App = () => {
  return (
    <div className="App">
      <Layout />
    </div>
  );
};
```

- To pick custom bindings / keyboard shortcuts

```jsx
import { Layout } from 'layout-greed';
const App = () => {
  return (
    <div className="App">
      <Layout customKeyBinding="ctrl+e" />
    </div>
  );
};
```

- To conditionally hide the layout grids

```jsx
import { Layout } from 'layout-greed';
const App = () => {
  const disabled = () => {
    if (process.env.NODE_ENV !== 'production') return true;
    return false;
  };
  return (
    <div className="App">
      <Layout hide={disabled} />
    </div>
  );
};
```

# <Layout/> props

| Props            | Types   | Default                |
| ---------------- | ------- | ---------------------- |
| hide             | boolean | N/A                    |
| color            | string  | rgba(250, 15, 15, 0.1) |
| customKeyBinding | string  | shift+l                |

# How to contribute

```
git clone https://github.com/chocoscoding/layout-greed layoutgreed
cd layoutgreed
yarn install
```

- Create a branch with the name of the feature you're want to contribute about. (Not too long naming)
- Run `yarn test` to make sure everything is alright and good.
- Run `yarn storybook` to see and manage ui changes .
- Make your contributions 😻
- Run the following commands
  ```
  git add .
  yarn commit
  ```
- Run yor tests
- Push the changes
- Create a pull request
- After test and requirements are passed, your changes would be merged ✨✨✨✨
