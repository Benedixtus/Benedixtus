
 var allphotos = [
    "dia_2015_07_13_103624",
    "dia_2017_02_18_130814",
    "dia_2017_02_18_131051",
    "dia_2017_02_18_131518",
    "dia_2017_02_18_132831",
    "dia_2017_02_18_133844",
    

    ];


function getDiary() {
    var diaryarray = [];
    var diaryidx = 0;
    for(var i = 0; i < allphotos.length;i++){
        if(allphotos[i].substring(0,3) == "dia"){
            diaryarray[diaryidx] = allphotos[i];
            diaryidx++;
        }

    }
    return diaryarray;

     
}