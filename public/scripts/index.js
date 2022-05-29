window.onscroll = function() {scrollFunction()};
        var navmagassag = screen.height / 1.4 ;

        function scrollFunction() {
            if (document.body.scrollTop > navmagassag || document.documentElement.scrollTop > navmagassag ) {
                document.getElementById("navbar").style.top = "0";
            } else {
            document.getElementById("navbar").style.top = "-6%";
            }
        }

        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }

        const portfoliotarolo = document.querySelector(".portfoliotarolo");
        const portfoliogomb = document.querySelector(".portfoliogomb")

        function mozgas(a) {
            console.log("lefut");
            document.getElementById(a).scrollIntoView({behavior: 'smooth'});
        }
        function gorduljle() {
                    document.getElementById("photojump").scrollIntoView({behavior: 'smooth'});
                    portfoliotarolo.style.overflow = "hidden";
                    portfoliotarolo.style.opacity = "1";
                    portfoliotarolo.style.display = "block";
                    portfoliotarolo.style.visibility = "visible";
                    portfoliotarolo.style.height = "100%";
                    portfoliogomb.style.display = "none";
                    portfoliogomb.style.visibility = "hidden";
        }
        function gorduljfel() {
                    portfoliotarolo.style.height = "0px";
                    portfoliotarolo.style.opacity = "0";
                    portfoliotarolo.style.visibility = "hidden";
                    portfoliogomb.style.display = "block";
                    portfoliogomb.style.visibility = "visible";
        }
        function jumptophotography() {
            document.getElementById("photojump").scrollIntoView({behavior: 'smooth'});
        }
        var megnyilt = 0;
        function projectsopen() {
            if(megnyilt == 0){
            document.getElementById("projectjump").scrollIntoView({behavior: 'smooth'});
            document.getElementById("projectbubbleholder").style.backgroundColor = "rgba(0,0,0,0.6)";
            document.getElementById("projectstext").style.animation = "none";

            document.getElementById("designbubble").style.opacity = "1";
            document.getElementById("designbubble").style.transitionDuration = "2s";
            document.getElementById("designbubble").style.top = "25%";
            document.getElementById("designbubble").style.left = "20%";

            document.getElementById("progbubble").style.opacity = "1";
            document.getElementById("progbubble").style.transitionDuration = "2s";
            document.getElementById("progbubble").style.top = "50%";
            document.getElementById("progbubble").style.left = "20%";

            document.getElementById("gitbubble").style.opacity = "1";
            document.getElementById("gitbubble").style.transitionDuration = "2s";
            document.getElementById("gitbubble").style.top = "75%";
            document.getElementById("gitbubble").style.left = "20%";

            document.getElementById("blogbubble").style.opacity = "1";
            document.getElementById("blogbubble").style.transitionDuration = "2s";
            document.getElementById("blogbubble").style.top = "25%";
            document.getElementById("blogbubble").style.left = "80%";
            
            document.getElementById("litbubble").style.opacity = "1";
            document.getElementById("litbubble").style.transitionDuration = "2s";
            document.getElementById("litbubble").style.top = "50%";
            document.getElementById("litbubble").style.left = "80%";

            document.getElementById("artbubble").style.opacity = "1";
            document.getElementById("artbubble").style.transitionDuration = "2s";
            document.getElementById("artbubble").style.top = "75%";
            document.getElementById("artbubble").style.left = "80%";

            setTimeout(function() {
                document.getElementById("designbubble").style.transitionDelay = "0s";
                document.getElementById("designbubble").style.transitionDuration = "0.5s";
                document.getElementById("progbubble").style.transitionDelay = "0s";
                document.getElementById("progbubble").style.transitionDuration = "0.5s";
                document.getElementById("gitbubble").style.transitionDelay = "0s";
                document.getElementById("gitbubble").style.transitionDuration = "0.5s";
                document.getElementById("blogbubble").style.transitionDelay = "0s";
                document.getElementById("blogbubble").style.transitionDuration = "0.5s";
                document.getElementById("litbubble").style.transitionDelay = "0s";
                document.getElementById("litbubble").style.transitionDuration = "0.5s";
                document.getElementById("artbubble").style.transitionDelay = "0s";
                document.getElementById("artbubble").style.transitionDuration = "0.5s";
            }, 2000);
            megnyilt++;
            }
        }