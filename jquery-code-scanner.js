$.fn.codeScanner = function (options) {
    var onScan = (typeof options === 'object') &&
        options['onScan'] ? options['onScan'] :
        function (element, barcode) {
            $(element).val(barcode);
        };
    var pressed = false;
    var chars = [];
    var self = this;

    $(window).keypress(function(e) {
        if (e.which >= 48 && e.which <= 57) {
            chars.push(String.fromCharCode(e.which));
        }
        // console.log(e.which + ':' + chars.join('|'));
        if (pressed == false) {
            setTimeout(function () {
                if (chars.length >= 10) {
                    var barcode = chars.join('');
                    onscan(self, barcode);
                }
                chars = [];
                pressed = false;
            }, 500);
        }
        pressed = true;
    });

    $(this).keypress(function (e) {
        if (e.which === 13) {
            e.preventDefault();
        }
    });
};
