var client = new ZeroClipboard( document.getElementById("copy-button") );

client.on( "ready", function( readyEvent ) {
  // alert( "ZeroClipboard SWF is ready!" );

  client.on( "aftercopy", function( event ) {
    // `this` === `client`
    // `event.target` === the element that was clicked
    // event.target.style.display = "none";
    // console.log("Copied text to clipboard: " + event.data["text/plain"] );
  } );
} );