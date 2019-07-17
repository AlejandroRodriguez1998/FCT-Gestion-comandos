<?php

    function ping($IP, $numero){
        $file = fopen("archivo.txt", "w");

        $texto = shell_exec('ping ' . $IP);

        fwrite($file, $texto);
        
        fclose($file);
    }
    
    function tracert($IP){
        system('tracert ' . $IP);
    }

    function whois($IP){
        print "Esto es una respuesta del comando whois con la ip: $IP";
    }

    function dig($DNS, $rec){
        print "Esto es una respuesta del comando dig con la DNS: $DNS con el recurso: $rec";
    }

    function respuestaWeb($URL){
        system('curl -Is ' . $URL);
    }

    function verWeb($URL){
        system('curl -s ' . $URL);
    }

    function nmap($IP,$puerto){
        print "Esto es una respuesta del comando nmap con la IP: $IP con el puerto: $puerto";
    }

    function nrpe($orden){
        print "Esto es una respuesta del comando nrpe con la orden: $orden";
    }

    function nbtscan($IP){
        print "Esto es una respuesta del comando consulta nbtscan con la IP: $IP";
    }

    function snmp($IP,$com){
        print "Esto es una respuesta del comando consulta SNMP con la IP: $IP con community: $com";
    }

    function ifstatus($IP,$com){
        print "Esto es una respuesta del comando ifstatus con la IP: $IP con community: $com";
    }
    

?>