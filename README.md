# Tailwind CSS Components

A tiny collection of component made as Tailwind CSS plugins

## Components

### Button

```html
<button class="button">Click Me!</button>
```

<details><summary>Color `primary` `secondary` `positive` `negative`</summary>



```html
<button class="button button--secondary">Click Me!</button>
<button class="button button--positive">Click Me!</button>
<button class="button button--negative">Click Me!</button>
```

</details>

<details><summary>Size</summary>

`small` `medium` `large`

```html
<button class="button button--small">Click Me!</button>
<button class="button button--medium">Click Me!</button>
<button class="button button--large">Click Me!</button>
```

</details>

<details><summary>Surface</summary>

`ghost` `fill`

```html
<button class="button button--fill">Click Me!</button>
<button class="button button--ghost">Click Me!</button>
```

</details>

<details><summary>Space</summary>

`full` `auto`

```html
<button class="button button--full">Click Me!</button>
<button class="button button--full">Click Me!</button>
```

</details>

### Button Group

```html
<div class="button-group">
  <button class="button">Click</button>
  <button class="button">Click</button>
  <button class="button">Click</button>
</div>
```

<details><summary>Direction</summary>

`horizontal` `vertical`

```html
<div class="button-group button-group--vertical">
  <button class="button">Click</button>
  <button class="button">Click</button>
</div>
```

</details>

<details><summary>Space</summary>

`auto` `full`

```html
<div class="button-group button-group--fill">
  <button class="button">Click</button>
  <button class="button">Click</button>
  <button class="button">Click</button>
</div>
```

</details>

### Link

```html
<a class="link" href="#">Click Me!</a>
```
