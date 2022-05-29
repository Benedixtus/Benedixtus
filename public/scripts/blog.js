justtthisdays();
function justtthisdays() {
    const until = new Date().getDay();
    if(until==1) {var day ="Nooo! It's Monday! Come on do something else!"}
    if(until==2) {var day ="It's Tuesday... You survived Monday!"}
    if(until==3) {var day ="It's just Wednesday... nothing special."}
    if(until==4) {var day ="It's Thursday. You will get there eventually!"}
    if(until==5) {var day ="Friday! It's party time! (or just cozy up with a book)"}
    if(until==6) {var day ="Hurray! It's the weekend finally! "}
    if(until==7) {var day ="Sunday. Even god (yes,g) needs a rest!"}
    document.getElementById("isitweekend").innerHTML = day;
}
const lunar_month =  42524;
const phase1 = 0.0270 ;
const phase2 = 0.2234 ;
const phase3 = 0.2770 ;
const phase4 = 0.4734 ;
const phase5 = 0.5411 ;
const phase6 = 0.7234 ;
const phase7 = 0.7770 ;
const phase8 = 0.9734 ;
var t1 = new Date("2022-04-01 07:24");
var t2 = new Date();
var dif = (( t2.getTime() - t1.getTime() )/60000).toFixed(0);
moonphase();
function moonphase() {
    var phase = dif/lunar_month;
    if(phase < phase1 || phase > phase8) {document.getElementById("moonphase").innerHTML = "New Moon"}
    else if(phase < phase2 ) {document.getElementById("moonphase").innerHTML = "Waxing crescent"}
    else if(phase < phase3 ) {document.getElementById("moonphase").innerHTML = "First quarter"} 
    else if(phase < phase4 ) {document.getElementById("moonphase").innerHTML = "Waxing gibbous"}
    else if(phase < phase5 ) {document.getElementById("moonphase").innerHTML = "Full Moon"}
    else if(phase < phase6 ) {document.getElementById("moonphase").innerHTML = "Waning gibbous"}
    else if(phase < phase7 ) {document.getElementById("moonphase").innerHTML = "Third quarter"}
    else if(phase < phase8 ) {document.getElementById("moonphase").innerHTML = "Waning crescent"}
    console.log(phase)
}
megjelenit();
function megjelenit() {
    for (let i = 0; i < 19; i++){
        setTimeout(() => {
            console.log(i);
            var j = "g" + (i+1);
            document.getElementById(j).style.fill = "white";
            }, i * 80);
    }
    
    //document.getElementById(j).style.fill = "black";
}