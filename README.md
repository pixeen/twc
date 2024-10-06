# Pixeen TWC

A tiny collection of components designed as Tailwind CSS plugins.

## Table of Contents

- [Components](#components)
  - [Button](#button)
  - [Button Group](#button-group)
  - [Link](#link)
- [Custom Component](#custom-component)

## Components

### Button

A customizable button component.

<details><summary><strong>Default</strong></summary>

```html
<button class="button">Click Me!</button>
```

</details>

#### Variants

<details><summary><strong>Color</strong></summary>

Available color variants: `primary`, `secondary`, `positive`, `negative`

```html
<button class="button button--primary">Click Me!</button>
<button class="button button--secondary">Click Me!</button>
<button class="button button--positive">Click Me!</button>
<button class="button button--negative">Click Me!</button>
```

</details>

<details><summary><strong>Size</strong></summary>

Available size variants: `small`, `medium`, `large`

```html
<button class="button button--small">Click Me!</button>
<button class="button button--medium">Click Me!</button>
<button class="button button--large">Click Me!</button>
```

</details>

<details><summary><strong>Surface</strong></summary>

Available surface variants: `fill`, `ghost`

```html
<button class="button button--fill">Click Me!</button>
<button class="button button--ghost">Click Me!</button>
```

</details>

<details><summary><strong>Space</strong></summary>

Available space variants: `full`, `auto`

```html
<button class="button button--full">Click Me!</button>
<button class="button button--auto">Click Me!</button>
```

</details>

### Button Group

A flexible container for grouping multiple buttons together.

<details><summary><strong>Default</strong></summary>

```html
<div class="button-group">
  <button class="button">Click</button>
  <button class="button">Click</button>
  <button class="button">Click</button>
</div>
```

</details>

#### Variants

<details><summary><strong>Direction</strong></summary>

Available direction variants: `horizontal`, `vertical`

```html
<div class="button-group button-group--horizontal">
  <button class="button">Click</button>
  <button class="button">Click</button>
</div>

<div class="button-group button-group--vertical">
  <button class="button">Click</button>
  <button class="button">Click</button>
</div>
```

</details>

<details><summary><strong>Space</strong></summary>

Available space variants: `auto`, `full`

```html
<div class="button-group button-group--auto">
  <button class="button">Click</button>
  <button class="button">Click</button>
  <button class="button">Click</button>
</div>

<div class="button-group button-group--full">
  <button class="button">Click</button>
  <button class="button">Click</button>
  <button class="button">Click</button>
</div>
```

</details>

### Link

A styled link component

<details><summary><strong>Default</strong></summary>

```html
<a class="link" href="#">Click Me!</a>
```

</details>

## Custom Component

Easily define components using the `defineComponent` function, allowing for the creation of base styles and variants.

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
      positive: {
        backgroundColor: "green",
      },
      negative: {
        backgroundColor: "red",
      },
    },
    size: {
      small: {
        padding: "0.5rem 1rem",
      },
      medium: {
        padding: "1rem 2rem",
      },
      large: {
        padding: "1.5rem 3rem",
      },
    },
  },
  defaultVariants: { color: "primary", size: "medium" },
});
```

### Generated Classes

These classes are automatically generated and can be used directly in your HTML:

```css
.button {
  /* base styles */
}
.button--primary {
  /* primary color variant */
}
.button--secondary {
  /* secondary color variant */
}
.button--positive {
  /* positive color variant */
}
.button--negative {
  /* negative color variant */
}
.button--small {
  /* small size variant */
}
.button--medium {
  /* medium size variant */
}
.button--large {
  /* large size variant */
}
/* More generated classes based on defined variants */
```
