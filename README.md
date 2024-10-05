# Tailwind CSS Component Plugins

A tiny collection of component made as Tailwind CSS plugins

## Table of Contents

- [Button](#button)
- [Button Group](#button-group)

## Button

```html
<button style-as="button">Click Me!</button>
```

### Button Color

`primary` `secondary` `positive` `negative`

```html
<button style-as="button" with-color="positive">Click Me!</button>
```

### Button Size

`small` `medium` `large`

```html
<button style-as="button" with-size="small">Click Me!</button>
```

### Button Surface

`ghost` `fill`

```html
<button style-as="button" with-surface="ghost">Click Me!</button>
```

### Button Space

`full` `auto`

```html
<button style-as="button" with-space="full">Click Me!</button>
```

## Button Group

```html
<div style-as="button-group">
  <button style-as="button">Click</button>
  <button style-as="button">Click</button>
  <button style-as="button">Click</button>
</div>
```

- @todo add button group variants
- @todo add link component
