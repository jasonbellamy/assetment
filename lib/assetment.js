/*
 * assetment
 * Assesses & extracts references to all the assets in your markup.
 *
 * https://github.com/jasonbellamy/assetment
 *
 * Copyright (c) 2014 Jason Bellamy
 * Licensed under the MIT license.
 */
'use strict';

var jsdom   = require( "jsdom" );

module.exports = function( html ) {

  if ( !html || typeof html !== "string" ) {
    throw new TypeError( "assesment can only be called with a string" );
  }

  var window = jsdom.jsdom( html ).parentWindow;
  var assets = Object.create( null );
  var config = Object.create( null, {
    stylesheets: {
      value: { selectors: { element: "link[rel=stylesheet]", resource: "href" } },
      enumerable: true
    },
    javascripts: {
      value: { selectors: { element: "script", resource: "src" } },
      enumerable: true
    },
    images: {
      value: { selectors: { element: "img", resource: "src" } },
      enumerable: true
    }
  });

  Object.keys( config ).forEach( function( type ) {
    Object.defineProperty( assets, type, {
      value: [].map.call( window.document.querySelectorAll( config[ type ].selectors.element ), function( element ) {
        return Object.defineProperties( {}, {
          resource: {
            value: element.getAttribute( config[ type ].selectors.resource ),
            enumerable: true
          },
          attributes: {
            value: [].map.call( element.attributes, function( attribute, index, array ) {
              return Object.defineProperty( {}, attribute.nodeName, { value: attribute.nodeValue, enumerable: true } );
            }),
            enumerable: true
          }
        });
      }),
      enumerable: true
    });
  });

  return Object.freeze( assets );

};
