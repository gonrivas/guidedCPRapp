const start = document.querySelector("#start")
const toDo = document.querySelector("#todo")
const stop = document.querySelector("#stop")
const heart = document.querySelector("#heart")

stop.style.visibility = "hidden"




start.onclick = function () {

    document.addEventListener('click', function (e) {
        if (e.target.matches('.start'))
            e.target.parentNode.remove()
    }, false);


    stop.style.visibility = "visible"
    /* document.addEventListener('click', function (e) {
         if (e.target.matches('.stop'))
             clearInterval(downloadTimer)
         timeleft = 25
         document.getElementById("countdown").innerHTML = (timeleft - 5) + " seconds remaining";


     }, false);
     */

    var alert = new Audio('/audio/alert.mp3')
    var roundNumber = 1
    var timeleft = 26;
    var downloadTimer = setInterval(function () {
        if (timeleft <= 5) {
            alert.play()
            document.getElementById("countdown").innerHTML = "Breath...";
            if (timeleft <= 0) {
                alert.pause()
                document.getElementById("countdown").innerHTML = "Restart chest pressing";
                timeleft = 26
                roundNumber++
            }
        } else {
            document.getElementById("countdown").innerHTML = (timeleft - 5) + " seconds remaining";
        }

        if (roundNumber == 1) {
            toDo.innerHTML = "First cicle of CPR , here you will see next things to do"
        } else if (roundNumber > 1 || roundNumber <= 3) {
            toDo.innerHTML = "estamos entre el 2 y 3er ciclo"

        }



        timeleft -= 1;
        console.log(roundNumber)




    }, 1000);




}