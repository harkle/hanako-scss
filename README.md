# hanako-scss
[![npm version](https://badge.fury.io/js/hanako-scss.svg)](https://badge.fury.io/js/hanako-scss)

> Basic SCSS toolkit and workflow compatible with bootstap.

## Demo

Nothing much interesting yet...

- [See demo](https://harkle.github.io/hanako-scss/demo)

## Installation
### Install with NPM

You can install `hanako-scss` using the [npm](https://www.npmjs.com/) package manager.

```sh
npm install hanako-scss
```

### Build from source

You can also use inside your project `hanako-scss` directly from source.

```sh
git clone https://github.com/harkle/hanako-scss.git
```


## Integrate in your project

- Install via npm or Clone the repository in your project
- Create a `.scss` file (entry point of your compilation)
- Include following line on top of your file:

**npm**
```scss
$html-font-size: 18px;

$spacings: .5, 1, 2, 2.5, 3, 4, 0;

$colors: (
  white: #fff,
  black: #000,
  gray: #808080,
  primary: #f50057,
);

$breakpoints: (
  '': 0,
  md-: 768px,
  lg-: 992px,
  xl-: 1200px,
  xxl-: 1400px,
);

@import '~/hanako-scss/scss/index';
```

**source**
```scss
$html-font-size: 18px;

$spacings: .5, 1, 2, 2.5, 3, 4, 0;

$colors: (
  white: #fff,
  black: #000,
  gray: #808080,
  primary: #f50057,
);

$breakpoints: (
  '': 0,
  md-: 768px,
  lg-: 992px,
  xl-: 1200px,
  xxl-: 1400px,
);

@import 'hanako-scss/scss/index';
```

## Add bootstrap

Install boostrap from npm.

```sh
npm install bootstrap
```

Add boostrap each bootstrap file you need in your scss file, prior to hanako-scss. Alternativly, you can create a `_boostrap.scss` file containing all calls.

```scss
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';
@import '~bootstrap/scss/mixins';
@import '~bootstrap/scss/utilities';

@import '~bootstrap/scss/root';
@import '~bootstrap/scss/reboot';
@import '~bootstrap/scss/type';
@import '~bootstrap/scss/images';
@import '~bootstrap/scss/containers';
@import '~bootstrap/scss/grid';
...

@import '~/hanako-scss/scss/index';
```
