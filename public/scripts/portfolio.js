
        const csempetarolo = document.querySelector(".csempe-tarolo");
        const megtekinto = document.querySelector(".megtekinto");

        function nagyit(a) {
            megtekinto.style.display = "block";
            megtekinto.style.opacity = "1";
            document.body.style.position = "static";
            document.getElementById("valtozo").src="../photos/portfolio/" + a.toString() + ".jpg";


        }
        function nagyitdia(a) {
            megtekinto.style.display = "block";
            megtekinto.style.opacity = "1";
            document.body.style.position = "static";
            document.getElementById("valtozo").src="../photos/season/" + a + ".jpg";
        }

        function bezar() {
            megtekinto.style.opacity = '0';
            document.body.style.position = "auto";
            document.getElementById("valtozo").src="";
            megtekinto.style.display = 'none';
        }