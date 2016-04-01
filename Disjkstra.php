<?php
/*
The Dijkstra algorithm comes from rosettacode.org.
http://rosettacode.org/wiki/Dijkstra's_algorithm#PHP
*/

class Disjkstra {
    
    private $map = array(              
                    array("a", "b", 3),
                    array("a", "g", 5),
                    array("a", "j", 4),
                    array("b", "a", 3),
                    array("b", "c", 4),
                    array("b", "j", 1),
                    array("c", "d", 2),
                    array("c", "b", 4),
                    array("c", "k", 1),
                    array("d", "e", 1),
                    array("d", "c", 2),
                    array("d", "k", 3),
                    array("e", "f", 3),
                    array("e", "d", 1),
                    array("e", "l", 2),
                    array("f", "g", 4),
                    array("f", "e", 3),
                    array("f", "m", 2),
                    array("g", "h", 1),
                    array("g", "a", 5),
                    array("g", "f", 4),
                    array("h", "i", 3),
                    array("h", "g", 1),
                    array("h", "o", 1),
                    array("i", "q", 2),
                    array("i", "h", 3),
                    array("i", "r", 3),
                    array("j", "r", 1),
                    array("j", "a", 4),
                    array("j", "b", 1),
                    array("k", "s", 1),
                    array("k", "c", 1),
                    array("k", "d", 3),
                    array("l", "m", 1),
                    array("l", "e", 2),
                    array("l", "s", 2),
                    array("m", "n", 2),
                    array("m", "f", 2),
                    array("m", "l", 1),
                    array("n", "o", 1),
                    array("n", "m", 2),
                    array("n", "p", 1),
                    array("o", "p", 1),
                    array("o", "n", 1),
                    array("p", "q", 1),
                    array("p", "n", 1),
                    array("p", "o", 1),
                    array("q", "t", 1),
                    array("q", "i", 2),
                    array("q", "p", 1),
                    array("r", "s", 3),
                    array("r", "i", 3),
                    array("r", "j", 1),
                    array("r", "t", 2),
                    array("s", "t", 1),
                    array("s", "k", 1),
                    array("s", "l", 2),
                    array("s", "r", 3),
                    array("t", "q", 1),
                    array("t", "r", 2),
                    array("t", "s", 1)
                );

    
    
    
    
    public function getShortestPath($source, $target) 
    {
        $graph_array = $this->map;
        $vertices = array();
        $neighbours = array();

        foreach ($graph_array as $edge) 
        {
            array_push($vertices, $edge[0], $edge[1]);
            $neighbours[$edge[0]][] = array("end" => $edge[1], "cost" => $edge[2]);
            $neighbours[$edge[1]][] = array("end" => $edge[0], "cost" => $edge[2]);
        }

        $vertices = array_unique($vertices);

        foreach ($vertices as $vertex) 
        {
            $dist[$vertex] = INF;
            $previous[$vertex] = NULL;
        }

        $dist[$source] = 0;
        $Q = $vertices;

        while (count($Q) > 0) 
        {
            $min = INF;
            foreach ($Q as $vertex)
            {
                if ($dist[$vertex] < $min) 
                {
                    $min = $dist[$vertex];
                    $u = $vertex;
                }
            }

            $Q = array_diff($Q, array($u));

            if ($dist[$u] == INF or $u == $target) 
            {
                break;
            }

            if (isset($neighbours[$u])) 
            {
                foreach ($neighbours[$u] as $arr) 
                {
                    $alt = $dist[$u] + $arr["cost"];
                    if ($alt < $dist[$arr["end"]]) 
                    {
                        $dist[$arr["end"]] = $alt;
                        $previous[$arr["end"]] = $u;
                    }
                }
            }
        }


        $path = array();
        $u = $target;

        while (isset($previous[$u])) 
        {
            array_unshift($path, $u);
            $u = $previous[$u];
        }

        array_unshift($path, $u);

        
        
        /*
        *
        * Build the result in the form of 
        * {
        *  'paths' => [{'ab'=>10}, {'bc'=>2}] 
        *  'cost'=> 12
        * }
        *
        */
        $pathsAndCost = array();
        for ($i =0 ; $i < sizeof($path) ; $i++) 
        {

            if (isset($path[$i+1])) 
            {
                $from = $dist[$path[$i]];
                $to = $dist[$path[$i+1]];

                $key = $path[$i] . $path[$i+1];
                $value = ($to-$from);
                array_push($pathsAndCost, array($key => $value));
            }
        }

        $size = sizeof($path)-1;
        $lastElement = $path[$size];

        $result = array('paths'=>$pathsAndCost, 'cost'=>$dist[$lastElement]);

        return $result;
    }

}

?>