<?php
include('Disjkstra.php');
    
    $from = $_POST['from'];
    $to = $_POST['to'];
    
    
    if (preg_match("/^[A-z]{1}$/", $from) && preg_match("/^[A-z]{1}$/", $to)) 
    {
        
        $from = strtolower($from);
        $to = strtolower($to);
        
        $Disjkstra = new Disjkstra();
        $path = $Disjkstra->getShortestPath($from, $to);
        
        echo json_encode($path);    
    } 
    else 
    {
        echo 'error';
    }

    
  

?>


