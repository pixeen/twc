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

#### Variants

- **color**: `primary` `secondary` `positive` `negative`
- **size**: `small` `medium` `large`
- **surface**: `ghost` `fill`
- **space**: `full` `auto`

#### Example

```html
<button data-component="button" data-color="positive">Click Me!</button>
```

### Button Group

#### Variants

- **direction**: `horizontal`, `vertical`
- **space**: `auto`, `full`

#### Example

```html
<div data-component="button-group">
  <button data-component="button">Click</button>
  <button data-component="button">Click</button>
  <button data-component="button">Click</button>
</div>
```

### Checkbox

#### Example

```html
<input type="checkbox" data-component="checkbox" />
```

### Label

#### Example

```html
<label data-component="label">Some Label!</label>
```

### Link

#### Example

```html
<a data-component="link" href="#">Click Me!</a>
```

### Paragraph

#### Example

```html
<p data-component="paragraph">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid
  atque beatae, cupiditate debitis distinctio fugit iste itaque laudantium natus
  nemo nisi obcaecati officia porro praesentium quisquam sint voluptate
  voluptatum?
</p>
```

### Radio

#### Example

```html
<input type="radio" data-component="radio" />
```

### Text Input

#### Variants

- **size**: `small` `medium` `large`
- **space**: `full` `auto`
- **color**: `primary` `secondary` `positive` `negative`

#### Example

```html
<input
  type="text"
  data-component="text-input"
  data-size="medium"
  data-color="primary"
/>
```
