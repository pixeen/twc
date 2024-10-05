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

## Button

```html
<button style-as="button">Click Me!</button>
```

#### Button Color

`primary` `secondary` `positive` `negative`

```html
<button style-as="button" with-color="positive">Click Me!</button>
```

#### Button Size

`small` `medium` `large`

```html
<button style-as="button" with-size="small">Click Me!</button>
```

#### Button Surface

`ghost` `fill`

```html
<button style-as="button" with-surface="ghost">Click Me!</button>
```

#### Button Space

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

#### Button Group Direction

`horizontal` `vertical`

```html
<div style-as="button-group" with-direction="vertical">
  <button style-as="button">Click</button>
  <button style-as="button">Click</button>
  <button style-as="button">Click</button>
</div>
```

#### Button Group Space

`auto` `full`

```html
<div style-as="button-group" with-space="fill">
  <button style-as="button">Click</button>
  <button style-as="button">Click</button>
  <button style-as="button">Click</button>
</div>
```

## Link

```html
<a style-as="link" href="#">Click Me!</a>
```
