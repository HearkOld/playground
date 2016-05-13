if (!Object.prototype.watch) {
    Object.defineProperty(Object.prototype, "watch", {
          enumerable: false
        , configurable: true
        , writable: false
        , value: function (prop, handler) {
            var
              oldval = this[prop]
            , newval = oldval
            , getter = function () {
                return newval;
            }
            , setter = function (val) {
                oldval = newval;
                return newval = handler.call(this, prop, oldval, val);
            }
            ;

            if (delete this[prop]) { // can't watch constants
                Object.defineProperty(this, prop, {
                      get: getter
                    , set: setter
                    , enumerable: true
                    , configurable: true
                });
            }
        }
    });
}

// object.unwatch
if (!Object.prototype.unwatch) {
    Object.defineProperty(Object.prototype, "unwatch", {
          enumerable: false
        , configurable: true
        , writable: false
        , value: function (prop) {
            var val = this[prop];
            delete this[prop]; // remove accessors
            this[prop] = val;
        }
    });
}
        var o = { p: 0 };



var notif = {
      favicon: new Favico({
    animation:'pop',
    type: 'rectangle'
}),
    faviconNoAnim: new Favico({
        animation: 'none',
        type: 'rectangle'
    }),
    count: 0,
    
    update: function() {
        notif.count++
        o.p++
        
    },
    
    titleUpdate: function() {
        o.watch('p', function (id, oldval, newval) {
    notif.favicon.badge(notif.count)
  return newval;
});

        if (notif.count == 0) {
notif.favicon.badge("")
} else {

notif.faviconNoAnim.badge(notif.count)
        }
    },
    
    
    clear: function() {
        notif.count = 0;
    },
    
    dec: function(){
        notif.count--;
    },
    
    // Adds a notification for each value in array
    forEach: function(array) {
        for(var i = 0; i < array.length; i++){
            notif.update();
        }
    }
    

}

setInterval(function () {
    notif.titleUpdate()
}, 1000);
    
