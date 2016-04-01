<!DOCTYPE html>
<html>
<head>
    <title>Map</title>
    
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/backbone.css">
    
</head>    
<body>
    
    
    
    <!--  Left Side Menu  -->
    <div class="leftSide">
        <form>
            <!-- Destination form -->
            <div class="form-group">
                <input type="From" class="form-control" id="To" placeholder="From">
            </div>

            <div class="form-group">
                <input type="To" class="form-control" id="From" placeholder="To">
            </div>

            <a id="start" onclick="start()">START</a>
            
            <!-- Transport modes -->
            <div class="btn-group" role="group">    
                <label>
                    <input type="radio" name="transport" value="car" checked/>
                    <img src="media/car.png">
                </label>
                
                <label>
                    <input type="radio" name="transport" value="bike"/>
                    <img src="media/bike.png">
                </label>  

                <label>
                    <input id="fb3" type="radio" name="transport" value="pedestrian"/>
                    <img src="media/pedestrian.png">
                </label>
                
            </div>
        </form>
        
    
        
        <!--  Path Details - steps, times, distances -->
        <div class="response">
            <div id="details"></div>
        </div>
        
    </div>
    
    
    
    <!--  Right Side Map  -->
    <div class="rightSide">
        
        <img src="media/Map/map.png">
        <div id="path"></div>
        <img src="media/Map/Nodes.png">
        
    </div>
    
    
    
    
    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="js/Path.js"></script>
    <script src="js/map.js"></script>
</body>        
</html>
    
    
    