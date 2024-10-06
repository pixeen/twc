# Tailwind CSS Components

A tiny collection of defineComponent made as Tailwind CSS plugins

## Components

### Button

<details><summary>Default</summary>

```html
<button class="button">Click Me!</button>
```

</details>

<details><summary>Color</summary>

```html
<button class="button button--secondary">Click Me!</button>
<button class="button button--positive">Click Me!</button>
<button class="button button--negative">Click Me!</button>
```

</details>

`primary` `secondary` `positive` `negative`

<details><summary>Size</summary>

```html
<button class="button button--small">Click Me!</button>
<button class="button button--medium">Click Me!</button>
<button class="button button--large">Click Me!</button>
```

</details>

`small` `medium` `large`

<details><summary>Surface</summary>

```html
<button class="button button--fill">Click Me!</button>
<button class="button button--ghost">Click Me!</button>
```

</details>

`ghost` `fill`

<details><summary>Space</summary>

```html
<button class="button button--full">Click Me!</button>
<button class="button button--full">Click Me!</button>
```

</details>

`full` `auto`

### Button Group

<details><summary>Default</summary>

```html
<div class="button-group">
  <button class="button">Click</button>
  <button class="button">Click</button>
  <button class="button">Click</button>
</div>
```

</details>

<details><summary>Direction</summary>

```html
<div class="button-group button-group--vertical">
  <button class="button">Click</button>
  <button class="button">Click</button>
</div>
```

</details>

`horizontal` `vertical`

<details><summary>Space</summary>

```html
<div class="button-group button-group--fill">
  <button class="button">Click</button>
  <button class="button">Click</button>
  <button class="button">Click</button>
</div>
```

</details>

`auto` `full`

### Link

<details><summary>Default</summary>

```html
<a class="link" href="#">Click Me!</a>
```

</details>

## Define Component

```js
defineComponent("button", {
  base: { fontWeight: "bold" },
  variants: {
    color: {
      primary: {
        backgroundColor: "red",
      },
      secondary: {
        backgroundColor: "blue",
      },
    },
  },
  defaultVariants: { color: "primary" },
});
```

Generate classes with corresponding values

```css
.button
.button--primary
.button--secondary
```
