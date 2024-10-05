# Tailwind CSS Components

A tiny collection of component made as Tailwind CSS plugins

## Usage

Add `twc` as a plugin to the `tailwind.config.js`

```js
export default {
  // ...
  plugins: [twc], // < add twc over here
  // ...
};
```

## Components

- [Button](#button)
- [Button Group](#button-group)
- [Link](#link)

## Button

```html
<button style-as="button">Click Me!</button>
```

### Color

`primary` `secondary` `positive` `negative`

<details><summary>Usage</summary>

```html
<button style-as="button" with-color="positive">Click Me!</button>
```

</details>

### Size

`small` `medium` `large`

<details><summary>Usage</summary>

```html
<button style-as="button" with-size="small">Click Me!</button>
```

</details>

### Surface

`ghost` `fill`

<details><summary>Usage</summary>

```html
<button style-as="button" with-surface="ghost">Click Me!</button>
```

</details>

### Space

`full` `auto`

<details><summary>Usage</summary>

```html
<button style-as="button" with-space="full">Click Me!</button>
```

</details>

## Button Group

```html
<div style-as="button-group">
  <button style-as="button">Click</button>
  <button style-as="button">Click</button>
  <button style-as="button">Click</button>
</div>
```

### Direction

`horizontal` `vertical`

<details><summary>Usage</summary>

```html
<div style-as="button-group" with-direction="vertical">
  <button style-as="button">Click</button>
  <button style-as="button">Click</button>
  <button style-as="button">Click</button>
</div>
```

</details>

### Space

`auto` `full`

<details><summary>Usage</summary>

```html
<div style-as="button-group" with-space="fill">
  <button style-as="button">Click</button>
  <button style-as="button">Click</button>
  <button style-as="button">Click</button>
</div>
```

</details>

## Link

```html
<a style-as="link" href="#">Click Me!</a>
```
