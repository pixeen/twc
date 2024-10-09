# Pixeen TWC

A tiny collection of components designed as Tailwind CSS plugins.

## Usage

```html
<button as="button" with-size="large" with-color="secondary">Click Me!</button>
```

## Components

### `button`

- **color**: `primary` `secondary` `positive` `negative`
- **size**: `small` `medium` `large`
- **surface**: `ghost` `fill`
- **space**: `full` `auto`

```html
<button as="button"></button>
```

### `button-group`

- **direction**: `horizontal`, `vertical`
- **space**: `auto`, `full`

```html
<div as="button-group"></div>
```

### `checkbox`

```html
<input type="checkbox" as="checkbox" />
```

### `divider`

- **color**: `primary` `secondary` `positive` `negative`

```html
<hr as="divider" />
```

### `field`

- **direction**: `horizontal`, `vertical`

```html
<div as="field"></div>
```

### `heading`

- **color**: `primary` `secondary` `positive` `negative``dimmed`
- **size**: `small` `medium` `large`

```html
<h1 as="heading"></h1>
```

### `label`

- **color**: `primary` `secondary` `positive` `negative`

```html
<label as="label"></label>
```

### `link`

```html
<a as="link" href="#"></a>
```

### `paragraph`

- **color**: `primary` `secondary` `positive` `negative` `dimmed`
- **size**: `small` `medium` `large`

```html
<p as="paragraph"></p>
```

### `radio`

```html
<input type="radio" as="radio" />
```

### `text-input`

- **size**: `small` `medium` `large`
- **space**: `full` `auto`
- **color**: `primary` `secondary` `positive` `negative`

```html
<input type="text" as="text-input" size="medium" color="primary" />
```
