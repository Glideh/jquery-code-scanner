# Jquery Code Scanner

This is a jquery plugin implementation of the simple and well working code snippet from [Deadosaurus blog](http://www.deadosaurus.com/detect-a-usb-barcode-scanner-with-javascript/)

You can [try the plugin](http://cscan.gprod.net) and see if it works with your code reader

## Installation

```bash
$ bower install jquery-code-scanner
```

## Usage

Include the tool

```html
<script src="js/jquery.min.js"></script>
<script src="js/jquery-code-scanner.js"></script>
<!-- ... -->
<input type="text" id="code-scan">
```

Initialize an input

```javascript
$('#code-scan').codeScanner();
```

This input will receive any scanned code
