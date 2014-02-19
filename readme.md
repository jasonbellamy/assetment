# assetment [![Build Status](https://travis-ci.org/jasonbellamy/assetment.png?branch=master)](https://travis-ci.org/jasonbellamy/assetment)

> Assesses & extracts references to all the assets in your markup.


## Install

```
npm install --save assetment
```


## Example

Passing a string of markup into `assetment()` will return an object with references to all the assets and their attributes found.
```javascript
var assetment = require( "assetment" );
var assets    = assetment( fs.readFile( "filename.html", "utf8" ) );

console.log( assets );
/*
{
  images: [
    { 
      resource: "image.png",
      attributes: [ { alt: "image" }, { src: "image.png" } ]
    {
  ],
  javascripts: [
    { 
      resource: "script.js",
      attributes: [ { type: "text/javascript" }, { src: "script.js" } ]
    {
  ],
  stylesheets: [
    { 
      resource: "style.css",
      attributes: [ { type: "text/css" }, { src: "style.css" } ]
    {
  ]
*/
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License
Copyright (c) 2014 [Jason Bellamy ](http://jasonbellamy.com)  
Licensed under the MIT license.
