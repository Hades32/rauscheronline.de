<?php

$logfile= '/data/multiserv/users/157926/projects/323273/www/ip.html';
$IP = $_SERVER['REMOTE_ADDR'];
$logdetails=  date("F j, Y, g:i a O T") . ': ' .
'<a href=http://www.geobytes.com/IpLocator.htm?GetLocation&ipaddress='.$_SERVER['REMOTE_ADDR'].'>'
.$_SERVER['REMOTE_ADDR'].'</a>';
$fp = fopen($logfile, "a"); 
fwrite($fp, $logdetails);
fwrite($fp, "<br>");
fclose($fp); 

echo("<p><i>Your IP has been logged. It is $IP</i></p>"); 

?>

<h1>Hello Jeff</h1>

<p>Thanks for your IP. This will make it much easier for the police to get to you (in the case they even care in Romania).</p>

<p>The next time you should really take care to use an address which actually <b>exists</b>!</p>

<p>Good luck finding someone stupid enough, to tranfer money to a "Shipping Agent", before he had even the chance to have a look at the flat, they keys or the contract...</p>

<h2>Don't even bother contacting me again</h2>