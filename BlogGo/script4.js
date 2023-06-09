function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
  document.getElementById('colorPicker').addEventListener('input', function() {
    var selectedColor = this.value;
    const { r, g, b } = hexToRgb(selectedColor);
    document.querySelector('.div-txt-blog').style.color = "rgb(" + r + ", " + g + "," + b + ")";
  });