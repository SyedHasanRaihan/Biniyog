var support = document.getElementById('support'),
    
    current_progress = 0,
    step = 0.5; // the smaller this is the slower the progress bar

    support.onclick = function(){
    interval = setInterval(function() {
        current_progress += step;
        progress = Math.round(Math.atan(current_progress) / (Math.PI / 2) * 100 * 1000) / 1000
        $(".progress-bar")
            .css("width", progress + "%")
            .attr("aria-valuenow", progress)
            .text(progress + "%");
        if (progress >= 100){
            clearInterval(interval);
        }else if(progress >= 70) {
            step = 0.1
        }
    }, 100);
}


