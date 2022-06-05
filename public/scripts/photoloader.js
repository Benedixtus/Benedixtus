        var pagecode = "";
        var lastseason = "";
        var diaryarray = getDiary();


        function datummaker(){
            pagecode += '<h1 class="seasoncim">' + datumkiir() +'</h1><div class="season" >';
        }
        function imgmaker(i) {
            pagecode += '<div class="csempe-panel" id="d1"><img class="kep" src="sample/'+ diaryarray[i]+'"></img></div>';
        }
        function evszak(str,a,b) {
            var month = parseInt(str.substr(a,b));
            if(month < 3 || month == 12) {
                 return "Winter";
            }else if(month < 6) {
                return "Spring";
            }else if(month < 9){
                return "Summer";
            }else if(month < 11){
                return "Autumn";
            }
        }
        function datumkiir() {
            console.log(evszak(lastseason,9,2)+ " of " +lastseason.substr(4,4)  );
            return (evszak(lastseason,9,2)+ " of " +lastseason.substr(4,4)  );
        }
        function sameseason(a,b) {
            if(a.substr(5,4) == b.substr(5,4) && evszak(a,9,2)==evszak(b,9,2)) {
                return true;
            }else{ return false}
        }

        function photoloader() {            

            for(var  i = 0; i < diaryarray.length; i++){
                var bool = sameseason(lastseason, diaryarray[i]);
                if(!bool){
                    if(!lastseason == ""){
                        pagecode += "</div>";
                    }
                    lastseason = diaryarray[i];
                    datumkiir();
                    datummaker();
                    imgmaker(i);
                    
                }else {
                    imgmaker(i);
                }
            }
            return pagecode;
        }
       