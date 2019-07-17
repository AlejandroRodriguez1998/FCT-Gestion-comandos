<?php

    function ping($IP, $num){
        system('ping -c ' . $num . ' ' . $IP);
    }

    function tracert($IP){
        system('traceroute ' . $IP);
    }
    
    function whois($IP){
        system('whois -h whois.ripe.net' . $IP);
    }

    function dig($IP, $num){
        system('dig @' . $IP . ' ' . $num);
    }

    function respuestaWeb($URL){
        system('curl -Is ' . $URL);
    }

    function verWeb($URL){
        system('curl -s ' . $URL);
    }

    function nmap($IP,$puerto){
        system('nmap ' . $IP . ' -p ' . $puerto . ' -PN');
    }

    function nrpe($orden){
        system('nrpe ' . $orden);
    }

    function nbtscan($IP){
        system('nbtscan -vh' . $IP);
    }

    function snmp($IP,$com){
        system('snmpwalk -v1 -c ' . $com . ' ' . $IP . 'system');
    }

    function ifstatus($IP,$com){

    }
    
?>