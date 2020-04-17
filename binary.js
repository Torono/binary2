let code =  document.querySelector('#code');
function write() {
    document.addEventListener("keyup", event => {
        switch (event.keyCode) {
            case 32:
                code.innerHTML = (code.innerHTML + '01011111 ')
                break;
            case 8:
                code.innerHTML = ('')
                break;
            case 65:
                code.innerHTML = (code.innerHTML + '01000001 ')
                break;
            case 66:
                code.innerHTML = (code.innerHTML + '01000010 ')
                break;
                case 67:
                    code.innerHTML = (code.innerHTML + '01000011 ')
                    break;
                    case 68:
                code.innerHTML = (code.innerHTML + '01000100 ')
                break;    
                case 69:
                code.innerHTML = (code.innerHTML + '01000101 ')
                break;
                case 70:
                code.innerHTML = (code.innerHTML + '01000110 ')
                break;
                case 71:
                code.innerHTML = (code.innerHTML + '01000111 ')
                break;
                case 72:
                code.innerHTML = (code.innerHTML + '01001000 ')
                break;
                case 73:
                code.innerHTML = (code.innerHTML + '01001001 ')
                break;
                case 74:
                code.innerHTML = (code.innerHTML + '01001010 ')
                break;
                case 75:
                code.innerHTML = (code.innerHTML + '01001011 ')
                break;
                case 76:
                code.innerHTML = (code.innerHTML + '01001100 ')
                break;
                case 77:
                code.innerHTML = (code.innerHTML + '01001101 ')
                break;
                case 78:
                code.innerHTML = (code.innerHTML + '010011110 ')
                break;
                case 79:
                code.innerHTML = (code.innerHTML + '01001111 ')
                break;
                case 80:
                code.innerHTML = (code.innerHTML + '01010000 ')
                break;
                case 81:
                code.innerHTML = (code.innerHTML + '01010001 ')
                break;
                case 82:
                code.innerHTML = (code.innerHTML + '01010010 ')
                break;
                case 83:
                code.innerHTML = (code.innerHTML + '01010011 ')
                break;
                case 84:
                code.innerHTML = (code.innerHTML + '01010100 ')
                break;
                case 85:
                code.innerHTML = (code.innerHTML + '01010101 ')
                break;
                case 86:
                code.innerHTML = (code.innerHTML + '01010110 ')
                break;
                case 87:
                code.innerHTML = (code.innerHTML + '01010111 ')
                break;
                case 88:
                code.innerHTML = (code.innerHTML + '01011000 ')
                break;
                case 89:
                code.innerHTML = (code.innerHTML + '01011001 ')
                break;
                case 90:
                code.innerHTML = (code.innerHTML + '01011010 ')
                break;
        }
    })
}
document.onkeydown = write();