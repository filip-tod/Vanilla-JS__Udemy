var userIpnput = prompt("please input a season");
//pretvorba u lowerCase
userIpnput= userIpnput.toLowerCase();
console.log(userIpnput);

switch(userIpnput){
    case "jesen":
        console.log('stigla je jesen !');
        break;
        case "proljeće":
            console.log('stiglo proljeće !'); 
            break;
            case "ljeto":
                console.log('stiglo ljeto !'); 
                break;
                case "zima":
                    console.log('stigla zima !'); 
                    break;
                    default:
                        console.log('ne prepoznajem ovo godišnnje doba');
}