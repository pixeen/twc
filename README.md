# Pixeen TWC

A tiny collection of components designed as Tailwind CSS plugins.

- [Usage](#usage)
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

## Usage

You can apply the component styles either using a class or attribute selector, for example with the button component:

```html
<!-- class selector -->
<button class="button button--size-large button--color-secondary">
  Click Me!
</button>

<!-- attribute selector -->
<button data-component="button" data-size="large" data-color="secondary">
  Click Me!
</button>
```

## Components

### Button

```html
<button data-component="button" data-color="positive">Click Me!</button>
```

| Variant     | Values                                      |
| ----------- | ------------------------------------------- |
| **size**    | `small` `medium` `large`                    |
| **surface** | `ghost` `fill`                              |
| **space**   | `full` `auto`                               |
| **color**   | `primary` `secondary` `positive` `negative` |

### Button Group

```html
<div data-component="button-group">
  <button data-component="button">Click</button>
  <button data-component="button">Click</button>
  <button data-component="button">Click</button>
</div>
```

| Variant       | Value                    |
| ------------- | ------------------------ |
| **direction** | `horizontal`, `vertical` |
| **space**     | `auto`, `full`           |

### Checkbox

```html
<input type="checkbox" data-component="checkbox" />
```

### Label

```html
<label data-component="label">Some Label!</label>
```

### Link

```html
<a data-component="link" href="#">Click Me!</a>
```

### Paragraph

```html
<p data-component="paragraph">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid
  atque beatae, cupiditate debitis distinctio fugit iste itaque laudantium natus
  nemo nisi obcaecati officia porro praesentium quisquam sint voluptate
  voluptatum?
</p>
```

### Radio

```html
<input type="radio" data-component="radio" />
```

### Text Input

```html
<input type="text" data-component="text-input" />
```

| Variant   | Value                                       |
| --------- | ------------------------------------------- |
| **size**  | `small` `medium` `large`                    |
| **space** | `full` `auto`                               |
| **color** | `primary` `secondary` `positive` `negative` |

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
