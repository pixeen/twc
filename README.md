# Tailwind CSS Components

A tiny collection of component made as Tailwind CSS plugins

## Components

### Button

```html
<button class="button">Click Me!</button>
```

#### Button Variants

`button--primary` `button--secondary` `button--positive` `button--negative` `button--small` `button--medium` `button--large` `button--ghost` `button--fill`, `button--full`

<details><summary>Color</summary>

#### Button Color

`primary` `secondary` `positive` `negative`

```html
<button class="button button--primary">Click Me!</button>
<button class="button button--secondary">Click Me!</button>
<button class="button button--positive">Click Me!</button>
<button class="button button--negative">Click Me!</button>
```

</details>

<details><summary>Size</summary>

#### Button Size

`small` `medium` `large`

```html
<button class="button button--small">Click Me!</button>
<button class="button button--medium">Click Me!</button>
<button class="button button--large">Click Me!</button>
```

</details>

<details><summary>Surface</summary>

#### Button Surface

`ghost` `fill`

```html
<button class="button button--fill">Click Me!</button>
<button class="button button--ghost">Click Me!</button>
```

</details>

<details><summary>Space</summary>

#### Button Space

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

#### Button Group Variants

<details><summary>Direction</summary>

#### Button Group Direction

`horizontal` `vertical`

```html
<div class="button-group button-group--horizontal">
  <button class="button">Click</button>
  <button class="button">Click</button>
</div>
<div class="button-group button-group--vertical">
  <button class="button">Click</button>
  <button class="button">Click</button>
</div>
```

</details>

<details><summary>Space</summary>

#### Button Group Space

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
