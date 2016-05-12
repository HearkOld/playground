var notif = {
    count: 0,
    update: function() {
        notif.count++
        
    },
    
    titleUpdate: function() {
        console.log("Interval works.")
        if (notif.count == 0) {
            document.title = document.title.replace(/ *\([^)]*\) */g, "");
        } else {
            var updated_title = '(' + notif.count + ') ' + document.title.replace(/ *\([^)]*\) */g, "");
            document.title = updated_title;
        }
    },
    
    
    clear: function() {
        notif.count = 0;
    },
    
    dec: function(){
        notif.count--;
    }
    

}

setInterval(function () {
    notif.titleUpdate()
}, 1000);
    
