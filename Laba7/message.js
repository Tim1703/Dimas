class Message{

    getnumforletter(m){
        let message = {};
        switch(true){
            case m == 'А'||m == 'а':
                message.x = 228;
                message.y = 271;
                break;
            case m == 'Б'||m == 'б':
                message.x = 228;
                message.y = 480;
                break;
            case m == 'В'||m == 'в':
                message.x = 229;
                message.y = 151;
                break;
            case m == 'Г'||m == 'г':
                message.x = 229;
                message.y = 600;
                break;
            case m == 'Ґ'||m == 'ґ':
                message.x = 227;
                message.y = 452;
                break;
            case m == 'Д'||m == 'д':
                message.x = 234;
                message.y = 164;
                break;
            case m == 'Е'||m == 'е':
                message.x = 234;
                message.y = 587;
                break;
            case m == 'Є'||m == 'є':
                message.x = 256;
                message.y = 630;
                break;
            case m == 'Ж'||m == 'ж':
                message.x = 235;
                message.y = 19;
                break;
            case m == 'З'||m == 'з':
                message.x = 235;
                message.y = 732;
                break;
            case m == 'И'||m == 'и':
                message.x = 236;
                message.y = 39;
                break;
            case m == 'І'||m == 'і':
                message.x = 253;
                message.y = 540;
                break;
            case m == 'Ї'||m == 'ї':
                message.x = 227;
                message.y = 299;
                break;
            case m == 'Й'||m == 'й':
                message.x = 236;
                message.y = 712;
                break;
            case m == 'К'||m == 'к':
                message.x = 237;
                message.y = 297;
                break;
            case m == 'Л'||m == 'л':
                message.x = 237;
                message.y = 454;
                break;
            case m == 'М'||m == 'м':
                message.x = 238;
                message.y = 175;
                break;
            case m == 'Н'||m == 'н':
                message.x = 238;
                message.y = 576;
                break;
            case m == 'О'||m == 'о':
                message.x = 240;
                message.y = 309;
                break;
            case m == 'П'||m == 'п':
                message.x = 240;
                message.y = 442;
                break;
            case m == 'Р'||m == 'р':
                message.x = 243;
                message.y = 87;
                break;
            case m == 'С'||m == 'с':
                message.x = 243;
                message.y = 664;
                break;
            case m == 'Т'||m == 'т':
                message.x = 247;
                message.y = 266;
                break;
            case m == 'У'||m == 'у':
                message.x = 247;
                message.y = 485;
                break;
            case m == 'Ф'||m == 'ф':
                message.x = 249;
                message.y = 183;
                break;
            case m == 'Х'||m == 'х':
                message.x = 249;
                message.y = 568;
                break;
            case m == 'Ц'||m == 'ц':
                message.x = 250;
                message.y = 14;
                break;
            case m == 'Ч'||m == 'ч':
                message.x = 250;
                message.y = 737;
                break;
            case m == 'Ш'||m == 'ш':
                message.x = 251;
                message.y = 245;
                break;
            case m == 'Щ'||m == 'щ':
                message.x = 251;
                message.y = 506;
                break;
            case m == 'Ь'||m == 'ь':
                message.x = 256;
                message.y = 121;
                break;
            case m == 'Ю'||m == 'ю':
                message.x = 257;
                message.y = 293;
                break;
            case m == 'Я'||m == 'я':
                message.x = 257;
                message.y = 458;
                break;
            default:
                return -1;
        }

        return message;
    }

    getletterfornumber(m){

        let message = '';
        switch(true){
            case m.x == 228 && m.y == 271:
                message = 'А';
                break;
            case m.x == 228 && m.y == 480:
                message = 'Б';
                break;
            case m.x == 229 && m.y == 151:
                message = 'В';
                break;
            case m.x == 229 && m.y == 600:
                message = 'Г';
                break;
            case m.x == 227 && m.y == 452:
                message = 'Ґ';
                break;
            case m.x == 234 && m.y == 164:
                message = 'Д';
                break;
            case m.x == 234 && m.y == 587:
                message = 'Е';
                break;
            case m.x == 256 && m.y == 630:
                message = 'Є';
                break;
            case m.x == 235 && m.y == 19:
                message = 'Ж';
                break;
            case m.x == 235 && m.y == 732:
                message = 'З';
                break;
            case m.x == 236 && m.y == 39:
                message = 'И';
                break;
            case m.x == 253 && m.y == 540:
                message = 'І';
                break;
            case m.x == 227 && m.y == 299:
                message = 'Ї';
                break;
            case m.x == 236 && m.y == 712:
                message = 'Й';
                break;
            case m.x == 237 && m.y == 297:
                message = 'К';
                break;
            case m.x == 237 && m.y == 454:
                message = 'Л';
                break;
            case m.x == 238 && m.y == 175:
                message = 'М';
                break;
            case m.x == 238 && m.y == 576:
                message = 'Н';
                break;
            case m.x == 240 && m.y == 309:
                message = 'О';
                break;
            case m.x == 240 && m.y == 442:
                message = 'П';
                break;
            case m.x == 243 && m.y == 87:
                message = 'Р';
                break;
            case m.x == 243 && m.y == 664:
                message = 'С';
                break;
            case m.x == 247 && m.y == 266:
                message = 'Т';
                break;
            case m.x == 247 && m.y == 485:
                message = 'У';
                break;
            case m.x == 249 && m.y == 183:
                message = 'Ф';
                break;
            case m.x == 249 && m.y == 568:
                message = 'Х';
                break;
            case m.x == 250 && m.y == 14:
                message = 'Ц';
                break;
            case m.x == 250 && m.y == 737:
                message = 'Ч';
                break;
            case m.x == 251 && m.y == 245:
                message = 'Ш';
                break;
            case m.x == 251 && m.y == 506:
                message = 'Щ';
                break;
            case m.x == 256 && m.y == 121:
                message = 'Ь';
            case m.x == 257 && m.y == 293:
                message = 'Ю';
                break;
            case m.x == 257 && m.y == 458:
                message = 'Я';
                break;
            default:
                console.log(`I'm soory I don't know ${JSON.stringify(m)}`);
                return '%';
        }

        return message;

    }
}
module.exports = Message;
