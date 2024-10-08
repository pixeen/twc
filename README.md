# Pixeen TWC

A tiny collection of components designed as Tailwind CSS plugins.

## Usage

```html
<button data-component="button" data-size="large" data-color="secondary">
  Click Me!
</button>
```

## Components

### `button`

- **color**: `primary` `secondary` `positive` `negative`
- **size**: `small` `medium` `large`
- **surface**: `ghost` `fill`
- **space**: `full` `auto`

```html
<button data-component="button"></button>
```

### `button-group`

- **direction**: `horizontal`, `vertical`
- **space**: `auto`, `full`

```html
<div data-component="button-group"></div>
```

### `checkbox`

```html
<input type="checkbox" data-component="checkbox" />
```

### `divider`

- **color**: `primary` `secondary` `positive` `negative`

```html
<hr data-component="divider" />
```

### `field`

- **direction**: `horizontal`, `vertical`

```html
<div data-component="field"></div>
```

### `heading`

- **color**: `primary` `secondary` `positive` `negative`
- **size**: `small` `medium` `large`

```html
<h1 data-component="heading"></h1>
```

### `label`

- **color**: `primary` `secondary` `positive` `negative`

```html
<label data-component="label"></label>
```

### `lnk`

```html
<a data-component="link" href="#"></a>
```

### `paragraph`

- **color**: `primary` `secondary` `positive` `negative`
- **size**: `small` `medium` `large`

```html
<p data-component="paragraph"></p>
```

### `radio`

```html
<input type="radio" data-component="radio" />
```

### `text-input`

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
