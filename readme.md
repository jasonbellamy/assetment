# assetment [![Build Status](https://travis-ci.org/jasonbellamy/assetment.png?branch=master)](https://travis-ci.org/jasonbellamy/assetment)

> Assesses & extracts references to all the assets in your markup.


## Getting Started

```
npm install --save assetment
```


## Usage

Pass `assetment()` a `String` of markup and an `Object` with the types of assets you would like to extract.
```javascript
var assetment = require( "assetment" );
var markup = fs.readFile( "filename.html", "utf8" );
var filters = {
  images: true,
  javascripts: true,
  stylesheets: true
}


console.log( assetment( markup, filters ) );
/*
{
  images: [
    {
      resource: "image.png",
      attributes: { alt: "image", src: "image.png" }
    {
  ],
  javascripts: [
    {
      resource: "script.js",
      attributes: { type: "text/javascript", src: "script.js" }
    {
  ],
  stylesheets: [
    {
      resource: "style.css",
      attributes: { type: "text/css" , src: "style.css" }
    {
  ]
}
*/
```


## API

### assetment( markup, filters )

Name                | Type      | Argument     | Default | Description
--------------------|-----------|--------------|---------|--------------
markup              | `string`  | `<required>` | `null`  | Markup that you would like to extract the assets from.
filters             | `Object`  | `<required>` | `null`  | Object that contains the types of assets you want to extract.
filters.images      | `boolean` | `<optional>` | `false` | Extract references to image files.
filters.javascripts | `boolean` | `<optional>` | `false` | Extract references to JavaScript files.
filters.stylesheets | `boolean` | `<optional>` | `false` | Extract references to stylesheet files.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License
Copyright (c) 2014 [Jason Bellamy ](http://jasonbellamy.com)  
Licensed under the MIT license.
