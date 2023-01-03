function datos() {
    var clima = document.getElementById("clima").value;
    console.log(clima)
    
    switch (clima) {
        case "mango":
            alert ("su precio es de 5 soles el kilo");
            break;
       case "uva":
         alert("su precio es de 4 soles el kilo.");
         break;
        case "pera":
            alert("su pecio es de 3.50 el kilo.");
            break;
            case "fresa":
                alert("su precio es de 5.50 el kilo");
                break
                case "manzana":
                    alert("su precio es de 2.50 el kilo");
                    break
                    case "platano":
                        alert("su precio es de 2 soles la mano")
       default:
            alert("agotado.");
            break;
            

    }


}