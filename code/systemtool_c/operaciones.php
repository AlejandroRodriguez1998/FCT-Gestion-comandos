<?php
    header("Content-Type: text/plain; charset=UTF-8");
    include '../../bin/command.php';

    $patronIP = "/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/";
    $patronNum = "/^[0-9]{1,2}$/";
    $patronURL = "/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/";
    $patronRec = "/^[\wñ\.]+$/";
    $patronPuerto = "/^[0-9]{1,5}$/";
    $patronString = "/^[A-Za-zñ]+$/";

    $operacion = $_POST['operacion'];

    switch($operacion){
        case "Ping":
            $IP = $_POST['IP'];
            $num = $_POST['Numero'];
            
            if(empty($IP) && empty($num)){
                print "No has introduccido ningun campo";
            }else{
                if(preg_match($patronIP,$IP)){
                    if(preg_match($patronNum,$num)){
                        ping($IP,$num);
                    }else{
                        print "El numero no es correcto, debe ser mayor a 0 y menor de 3 cifras.";
                    }
                }else{
                    print "La IP no esta bien formada.";
                }
            }

            break;
        case "Traceroute":
            $IP = $_POST['IP'];

            if(preg_match($patronIP,$IP)){
                tracert($IP);
            }else{
                print "La IP no esta bien formada.";
            }

            break;
        case "Whois":
            $IP = $_POST['IP'];

            if(preg_match($patronIP,$IP)){
                whois($IP);
            }else{
                print "La IP no esta bien formada.";
            }

            break;
        case "DIG":
            $DNS = $_POST['DNS'];
            $rec = $_POST['Recurso'];

            if(empty($DNS) && empty($rec)){
                print "No has introduccido ningun campo";
            }else{
                if(preg_match($patronIP,$DNS)){
                    if(preg_match($patronRec,$rec)){
                        dig($DNS, $rec);
                    }else{
                        print "El recurso solo acepta letras y numeros.";
                    }
                }else{
                    print "La IP no esta bien formada.";
                }
            }

            break;
        case "Respuesta web":
            $URL = $_POST['URL'];

            if(preg_match($patronURL,$URL)){
                respuestaWeb($URL);
            }else{
                print "La URL no esta bien formada";
            }

            break;
        case "Ver web":
            $URL = $_POST['URL'];

            if(preg_match($patronURL,$URL)){
                verWeb($URL);
            }else{
                print "La URL no esta bien formada";
            }

            break;
        case "Nmap":
            $IP = $_POST['IP'];
            $puerto = $_POST['Puerto'];

            if(empty($IP) && empty($puerto)){
                print "No has introduccido ningun campo";
            }else{
                if(preg_match($patronIP,$IP)){
                    if(preg_match($patronPuerto,$puerto)){
                        nmap($IP,$puerto);
                    }else{
                        print "El puerto no es correcto, debe ser mayor a 0 y menor de 6 cifras.";
                    }
                }else{
                    print "La IP no esta bien formada.";
                }
            }

            break;
        case "NRPE":
            $orden = $_POST['Orden'];

            if(preg_match($patronString,$orden)){
                nrpe($orden);
            }else{
                print "La orden solo acepta letras.";
            }

            break;
        case "Nbtscan":
            $IP = $_POST['IP'];

            if(preg_match($patronIP,$IP)){
                nbtscan($IP);
            }else{
                print "La IP no esta bien formada.";
            }

            break;
        case "Consulta SNMP":
            $IP = $_POST['IP'];
            $com = $_POST['Community'];

            if(empty($IP) && empty($com)){
                print "No has introduccido ningun campo";
            }else{
                if(preg_match($patronIP,$IP)){
                    if(preg_match($patronString,$com)){
                        snmp($IP,$com);
                    }else{
                        print "El campo community solo acepta letras.";
                    }
                }else{
                    print "La IP no esta bien formada.";
                }
            }

            break;
        case "IfStatus":
            $IP = $_POST['IP'];
            $com = $_POST['Community'];

            if(empty($IP) && empty($com)){
                print "No has introduccido ningun campo";
            }else{
                if(preg_match($patronIP,$IP)){
                    if(preg_match($patronString,$com)){
                        ifstatus($IP,$com);
                    }else{
                        print "El campo community solo acepta letras.";
                    }
                }else{
                    print "La IP no esta bien formada.";
                }
            }

            break;
    }

?>

