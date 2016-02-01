exports.defineManualTests = function(contentEl, createActionButton) {

  createActionButton('Simple Test', function() {
    console.log('the test worked!');
  });

  /*createActionButton('Complex Test', function() {
    contentEl.innerHTML = ...;
  });*/

};