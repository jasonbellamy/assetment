"use strict";

var assetment = require( "../lib/assetment.js" );
var fs        = require( "fs" );
var should    = require( "should" );

describe( "assetment", function () {

  before( function () {
    this.assets = assetment( fs.readFileSync( "test/fixtures/assetment.html", "utf8" ) );
  });

  it( "should return an object.", function( done ) {
    should( this.assets ).be.an.Object;
    done();
  });
  it( "should NOT be writable.", function( done ) {
    should( Object.isFrozen( this.assets ) );
    done();
  });

  describe( "assets", function () {
    it( "should contain a property name for each type of asset.", function( done ) {
      should( this.assets ).have.ownProperty( "stylesheets" );
      should( this.assets ).have.ownProperty( "javascripts" );
      should( this.assets ).have.ownProperty( "images" );
      done();
    });
    it( "should return an array with references to each individual asset.", function( done ) {
      should( this.assets.stylesheets ).be.an.Array;
      should( this.assets.javascripts ).be.an.Array;
      should( this.assets.images ).be.an.Array;
      done();
    });
    it( "should NOT be writable.", function( done ) {
      should( Object.isFrozen( this.assets.stylesheets ) );
      should( Object.isFrozen( this.assets.javascripts ) );
      should( Object.isFrozen( this.assets.images ) );
      done();
    });

    describe( "resource", function () {
      it( "should have property called 'resource'.", function( done ) {
        should( this.assets.stylesheets[0] ).have.ownProperty( "resource" );
        should( this.assets.javascripts[0] ).have.ownProperty( "resource" );
        should( this.assets.images[0] ).have.ownProperty( "resource" );
        done();
      });
      it( "should return a string containing the resource to the asset.", function( done ) {
        should( this.assets.stylesheets[0].resource ).type( "string" );
        should( this.assets.javascripts[0].resource ).type( "string" );
        should( this.assets.images[0].resource ).type( "string" );
        done();
      });
    });

    describe( "attributes", function () {
      it( "should have a property called 'attributes'.", function( done ) {
        should( this.assets.stylesheets[0] ).have.ownProperty( "attributes" );
        should( this.assets.javascripts[0] ).have.ownProperty( "attributes" );
        should( this.assets.images[0] ).have.ownProperty( "attributes" );
        done();
      });
      it( "should return an object with the names & values for each attribute.", function( done ) {
        should( this.assets.stylesheets[0].attributes ).be.an.Object;
        should( this.assets.javascripts[0].attributes ).be.an.Object;
        should( this.assets.images[0].attributes ).be.an.Object;
        done();
      });
      it( "should NOT be writable.", function( done ) {
        should( Object.isFrozen( this.assets.stylesheets[0].attributes ) );
        should( Object.isFrozen( this.assets.javascripts[0].attributes ) );
        should( Object.isFrozen( this.assets.images[0].attributes ) );
        done();
      });

      describe( "attribute", function() {
        it( "should return an object with a name & value for each attribute.", function( done ) {
          should( this.assets.stylesheets[0].attributes ).containEql( { "data-type": "stylesheet" } );
          should( this.assets.javascripts[0].attributes ).containEql( { "data-type": "javascript" } );
          should( this.assets.images[0].attributes ).containEql( { "data-type": "image" } );
          done();
        });
      });
    });
  });
});
