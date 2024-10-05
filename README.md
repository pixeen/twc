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

### Button

```html
<button style-as="button">Click Me!</button>
```

<details><summary>Color</summary>

`primary` `secondary` `positive` `negative`

```html
<button style-as="button" with-color="positive">Click Me!</button>
```

</details>

<details><summary>Size</summary>

`small` `medium` `large`

```html
<button style-as="button" with-size="small">Click Me!</button>
```

</details>

<details><summary>Surface</summary>

`ghost` `fill`

```html
<button style-as="button" with-surface="ghost">Click Me!</button>
```

</details>

<details><summary>Space</summary>

`full` `auto`

```html
<button style-as="button" with-space="full">Click Me!</button>
```

</details>

### Button Group

```html
<div style-as="button-group">
  <button style-as="button">Click</button>
  <button style-as="button">Click</button>
  <button style-as="button">Click</button>
</div>
```

<details><summary>Direction</summary>

`horizontal` `vertical`

```html
<div style-as="button-group" with-direction="vertical">
  <button style-as="button">Click</button>
  <button style-as="button">Click</button>
  <button style-as="button">Click</button>
</div>
```

</details>

<details><summary>Space</summary>

`auto` `full`

```html
<div style-as="button-group" with-space="fill">
  <button style-as="button">Click</button>
  <button style-as="button">Click</button>
  <button style-as="button">Click</button>
</div>
```

</details>

### Link

```html
<a style-as="link" href="#">Click Me!</a>
```
