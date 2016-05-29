# Jquery Code Scanner

This is a jquery plugin implementation of the simple and well working code snippet from [Deadosaurus blog](http://www.deadosaurus.com/detect-a-usb-barcode-scanner-with-javascript/)

You can [try the plugin](http://cscan.gprod.net) and see if it works with your code reader

## How it works

A handheld scanner is exactly like a keyboard that will quickly enter the sequence of any scanned code.  
The trick is rely on the speed of entry to suspect a scan.  
More detail on the previously mentionned blog.

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

## Options

* `minEntryChars` _default: 8_  
Minimum characters entered to be considered as a code reader

* `maxEntryTime` _default: 100_  
Maximum time (in millisecond) to enter the characters to be considered as a code reader

```javascript
$('#code-scan').codeScanner({
    maxEntryTime: 500, // milliseconds
    minEntryChars: 15  // characters
});
```

In this example, if 15 characters are not entered within 500ms, the string will not be taken as a scanned code

* `onScan` _default: Function setting the code into the input_  
This function will be called when a code is scanned

```javascript
$('#code-scan').codeScanner({
    onScan: function ($element, code) {
        console.log(code);
    }
});
```
