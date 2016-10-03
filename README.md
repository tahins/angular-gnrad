# angular-gnrad

[![npm version](https://badge.fury.io/js/angular-gnrad.svg)](https://badge.fury.io/js/angular-gnrad)
[![Bower version](https://badge.fury.io/bo/angular-gnrad.svg)](https://badge.fury.io/bo/angular-gnrad)

This module lets you integrate your G&R advertisements in your AngularJS applications easily.

## Installation

`bower install angular-gnrad` or `npm install angular-gnrad`

Or alternatively, grab the `dist/angular-gnrad.min.js` file and include it in your project


In your application, declare the angular-gnrad module dependency :

```javascript
angular.module('app', ['angular-gnrad']);
```
There is no need to include any G&R ads lib yourself, the directive takes care of it and include it (async) only when it is needed.

### Use the directive in your html file :

Replace the 'site-id' and 'slot-id' attributes with your values.

The directive doesn't support "Placement Code" of G&R.

```html
<gnrad site-id="1580" slot-id="25425"></gnrad>
```
