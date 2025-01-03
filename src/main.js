function getCanvasFingerprint() {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  context.textBaseline = "top";
  context.font = "14px 'Arial'";
  context.fillText('Hello World', 2, 2);
  return canvas.toDataURL();
}

alert(getCanvasFingerprint());
