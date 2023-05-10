var day = prompt('upiši jedan dan u tjednu');
day = day.toLowerCase();


switch(day){
     case "ponedjeljak":
        console.log('dobrodošao u početak tjedna !');
        break;
        case "utorak":
        console.log('dobro došao u utorak !');
        break;
        case "srijeda":
        console.log('dobrodošao u srijedu!');
        break;
        case "četvrtak":
        console.log('dobrodošao u četvrtak !');
        break;
        case "petak":
            console.log('dobrodošao u petak !');
            break;
            case "subota":
                console.log('dobrodošao u subota !');
                break;
                case "nedjelja":
                    console.log('dobrodošao u kraj tjedna !');
                    break;
}