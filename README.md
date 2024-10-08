# Pixeen TWC

A tiny collection of components designed as Tailwind CSS plugins.

- [Components](#components)
  - [Button](#button)
  - [Button Group](#button-group)
  - [Checkbox](#checkbox)
  - [Label](#label)
  - [Link](#link)
  - [Paragraph](#paragraph)
  - [Radio](#radio)
  - [Text Input](#text-input)
- [Custom Component](#custom-component)
  - [Generated Classes](#generated-classes)

## Components

### Button

A customizable button component.

```html
<button class="button">Click Me!</button>
```

<details><summary><strong>Color</strong></summary>

Available color variants: `primary`, `secondary`, `positive`, `negative`

```html
<button class="button button--color-primary">Click Me!</button>
<button class="button button--color-secondary">Click Me!</button>
<button class="button button--color-positive">Click Me!</button>
<button class="button button--color-negative">Click Me!</button>
```

</details>

<details><summary><strong>Size</strong></summary>

Available size variants: `small`, `medium`, `large`

```html
<button class="button button--size-small">Click Me!</button>
<button class="button button--size-medium">Click Me!</button>
<button class="button button--size-large">Click Me!</button>
```

</details>

<details><summary><strong>Surface</strong></summary>

Available surface variants: `fill`, `ghost`

```html
<button class="button button--surface-fill">Click Me!</button>
<button class="button button--surface-ghost">Click Me!</button>
```

</details>

<details><summary><strong>Space</strong></summary>

Available space variants: `full`, `auto`

```html
<button class="button button--space-full">Click Me!</button>
<button class="button button--space-auto">Click Me!</button>
```

</details>

### Button Group

A flexible container for grouping multiple buttons together.

```html
<div class="button-group">
  <button class="button">Click</button>
  <button class="button">Click</button>
  <button class="button">Click</button>
</div>
```

<details><summary><strong>Direction</strong></summary>

Available direction variants: `horizontal`, `vertical`

```html
<div class="button-group button-group--direction-horizontal">
  <button class="button">Click</button>
  <button class="button">Click</button>
</div>

<div class="button-group button-group--direction-vertical">
  <button class="button">Click</button>
  <button class="button">Click</button>
</div>
```

</details>

<details><summary><strong>Space</strong></summary>

Available space variants: `auto`, `full`

```html
<div class="button-group button-group--space-auto">
  <button class="button">Click</button>
  <button class="button">Click</button>
  <button class="button">Click</button>
</div>

<div class="button-group button-group--space-full">
  <button class="button">Click</button>
  <button class="button">Click</button>
  <button class="button">Click</button>
</div>
```

</details>

### Checkbox

```html
<input type="checkbox" class="checkbox" />
```

### Label

A styled label component

```html
<label class="label">Some Label!</label>
```

### Link

A styled link component

```html
<a class="link" href="#">Click Me!</a>
```

### Paragraph

A styled paragraph component

```html
<p class="paragraph">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid
  atque beatae, cupiditate debitis distinctio fugit iste itaque laudantium natus
  nemo nisi obcaecati officia porro praesentium quisquam sint voluptate
  voluptatum?
</p>
```

### Radio

A styled radio component

```html
<input type="radio" class="radio" />
```

### Text Input

A styled text input component

```html
<input type="text" class="text-input" />
```

<details><summary><strong>Color</strong></summary>

Available color variants: `primary`, `secondary`, `positive`, `negative`

```html
<input type="text" class="text-input text-input--color-primary" />
<input type="text" class="text-input text-input--color-secondary" />
<input type="text" class="text-input text-input--color-positive" />
<input type="text" class="text-input text-input--color-negative" />
```

</details>

<details><summary><strong>Size</strong></summary>

Available size variants: `small`, `medium`, `large`

```html
<input class="text-input text-input--size-small" />
<input class="text-input text-input--size-medium" />
<input class="text-input text-input--size-large" />
```

</details>

<details><summary><strong>Space</strong></summary>

Available space variants: `full`, `auto`

```html
<input class="text-input text-input--space-full" />
<input class="text-input text-input--space-auto" />
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
