(function() {
    'use strict';

    if (typeof require === 'undefined') {
        return;
    }

    var activeMinimizeToTray = function() {
        // Load library
        var gui = require('nw.gui');

        // Reference to window and tray
        var win = gui.Window.get();
        var tray;

        // Get the minimize event
        win.on('minimize', function() {
            // Hide window
            this.hide();

            // Show tray
            tray = new gui.Tray({
                icon: 'res/img/favicon.png'
            });

            // Show window and remove tray when clicked
            tray.on('click', function() {
                win.show();
                win.focus();
                this.remove();
                tray = null;
            });
        });
    };

    var activeToggleFullScreen = function() {

        var gui = require('nw.gui');

        // Reference to window and tray
        var win = gui.Window.get();

        $(window).on('keyup', function(e) {
            switch (e.keyCode) {
                case 122:
                    win.toggleFullscreen();
                    break;
                case 27:
                    if (win.isFullscreen) {
                        win.leaveFullscreen();
                    }
                    break;
            }
        });

    };

    activeMinimizeToTray();
    activeToggleFullScreen();

})();