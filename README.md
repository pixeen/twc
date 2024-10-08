# Pixeen TWC

A tiny collection of components designed as Tailwind CSS plugins.

- [Usage](#usage)
- [Components](#components)
  - [Button](#button)
  - [Button Group](#button-group)
  - [Checkbox](#checkbox)
  - [Divider](#divider)
  - [Field](#field)
  - [Heading](#heading)
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

- **color**: `primary` `secondary` `positive` `negative`
- **size**: `small` `medium` `large`
- **surface**: `ghost` `fill`
- **space**: `full` `auto`

```html
<button data-component="button"></button>
```

### Button Group

- **direction**: `horizontal`, `vertical`
- **space**: `auto`, `full`

```html
<div data-component="button-group"></div>
```

### Checkbox

```html
<input type="checkbox" data-component="checkbox" />
```

### Divider

- **color**: `primary` `secondary` `positive` `negative`

```html
<hr data-component="divider" />
```

### Field

- **direction**: `horizontal`, `vertical`

```html
<div data-component="field"></div>
```

### Heading

- **color**: `primary` `secondary` `positive` `negative`
- **size**: `small` `medium` `large`

```html
<h1 data-component="heading"></h1>
```

### Label

- **color**: `primary` `secondary` `positive` `negative`

```html
<label data-component="label"></label>
```

### Link

```html
<a data-component="link" href="#"></a>
```

### Paragraph

- **color**: `primary` `secondary` `positive` `negative`
- **size**: `small` `medium` `large`

```html
<p data-component="paragraph"></p>
```

### Radio

```html
<input type="radio" data-component="radio" />
```

### Text Input

- **size**: `small` `medium` `large`
- **space**: `full` `auto`
- **color**: `primary` `secondary` `positive` `negative`

```html
<input
  type="text"
  data-component="text-input"
  data-size="medium"
  data-color="primary"
/>
```
