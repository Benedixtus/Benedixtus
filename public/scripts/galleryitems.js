
 var allphotos = [
        "dia_2022_06_01_202820",
        "dia_2022_06_01_202917",
        "dia_2022_06_01_203228",
        "dia_2022_06_02_073439",
        "dia_2022_06_02_075042",
        "dia_2022_06_02_075000",
        "dia_2022_06_02_075115",
        "dia_2022_06_02_080004",
        "dia_2022_06_02_111100",
        "dia_2022_06_02_120737",
        "dia_2017_02_18_130814",
        "dia_2017_02_18_131051",
        "dia_2017_02_18_131518",
        "dia_2017_02_18_132831",
        "dia_2017_02_18_133844",
        "dia_2015_07_13_103624",


    

    
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