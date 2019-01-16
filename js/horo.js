export function horoIdentificaton(day, month) {
    let horo = undefined;
    switch (month) {
        case 1:
            if (day<20){
                horo = "козерог";
            }
            else {
                horo = "водолей";
            }
            break;
        case 2:
            if(day<19){
                horo ="водолей";
            }
            else{
                horo = "рыбы";
            }
            break;
        case 3:
            if(day<21){
                horo ="рыбы";
            }
            else{
                horo = "овен";
            }
            break;
        case 4:
            if(day<20){
                horo ="овен";
            }
            else{
                horo = "телец";
            }
            break;
        case 5:
            if(day<21){
                horo ="телец";
            }
            else{
                horo = "близнецы";
            }
            break;
        case 6:
            if(day<21){
                horo ="близнецы";
            }
            else{
                horo = "рак";
            }
            break;
        case 7:
            if(day<23){
                horo ="рак";
            }
            else{
                horo = "лев";
            }
            break;
        case 8:
            if(day<23){
                horo ="лев";
            }
            else{
                horo = "дева";
            }
            break;
        case 9:
            if(day<23){
                horo ="дева";
            }
            else{
                horo = "весы";
            }
            break;
        case 10:
            if(day<23){
                horo ="весы";
            }
            else{
                horo = "скорпион";
            }
            break;
        case 11:
            if(day<22){
                horo ="скорпион";
            }
            else{
                horo = "стрелец";
            }
            break;
        case 12:
            if(day<22){
                horo ="стрелец";
            }
            else{
                horo = "козерог";
            }
            break;
    }
    return horo;

}