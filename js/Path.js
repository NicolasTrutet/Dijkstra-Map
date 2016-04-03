
var from = null;
var to = null;
var transportMode = null;

//Display infos at startup.
var elem = document.getElementById('details');
elem.innerHTML = '<p id="infos">Choose a starting point and a destination, then pick up your mode of transport and click start.</p>';




function ValidateInput(from, to) {
   
    var pattern = /^[A-z]$/;
    
    if (from.match(pattern) && to.match(pattern)) {
        return true;    
    } else {
        return false;    
    }
}




function DisplaySpinner() {
    var img = '<img id="spinner" src="media/spinner.png">';
    document.getElementById('details').innerHTML = img;
}






//Get the shortest path from server.
function Request(from, to) {
    
    $.ajax({
        type: "POST",
        url: "getpath.php",   
        data: {
                "from": from, 
                "to": to
              },
        success: function (result) {
            buildResponse(result)
        },
        error: function() {
            displayError('Error Server.')
          }
    
        
    });
}









    
//Calculate and return time per path (AB).
function GetTimePerPath(TransportMode, distance) {
    
    //Speed in km/h.
    var transport = {
        'car': 90,
        'bike': 20,
        'pedestrian': 5    
    }
    
    //Calculate the time with distance and the mode of transport given.
    var speed = transport[TransportMode];
    var time = (distance/speed)*60;

    return time;
}











function displayResult(ArrayPath) {
    
    
    //Substract 1 because the last element is the object that holds the total distance & time.
    var size = ArrayPath.length-1;
    
    var object = ArrayPath[size];
    var time = FormatTime(object['time']);
    var distance = object['distance'];
    
    var TotalDetails = '<div class="details"><h4>Distance: '+ distance +' km</h4><h4>Time: '+ time +'</h4></div>';
    
    //Build table
    var table = TotalDetails;
    for (var i=0 ; i < size ; i++)
    {
        var object = ArrayPath[i];
        var time = FormatTime(object['time']);
        table += '<table><tr><td></td><td></td><td class="time">'+ time +'</td></tr><tr><td class="path">'+ object['path'] +'</td><td></td><td></td></tr><tr><td></td><td></td><td class="distance">'+ object['distance'] +' Km</td></tr></table>';    
    }
    
    var space = '<div style="height:500px;"></div>';
    table += space;
    
    var elem = document.getElementById('details');
    elem.innerHTML = table;
    
    
    
    //Clear canvas 
    var c = document.getElementById("map2");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    
    
    
    //Display path on map.    
    for (var i=0 ; i < size ; i++) 
    {
        var object = ArrayPath[i];
        var path = object['path'];
        DisplayShortestPath(path);
    }
}








function displayError(msg) {
    var elem = document.getElementById('details');
    elem.innerHTML = '<h4 id="infos">'+ msg +'</h4>';
}









//Get value from radio button
function getCheckedRadioValue(name) {
    var elements = document.getElementsByName(name);

    for (var i=0, len=elements.length; i<len; ++i)
        if (elements[i].checked) return elements[i].value;
}









function start() {
    
    DisplaySpinner();
    
    from = document.getElementById('To').value;
    to = document.getElementById('From').value;
    transportMode = getCheckedRadioValue('transport');
    
    
    if(ValidateInput(from, to))
    {
        Request(from, to);
    } 
    else 
    {
        displayError('Error, input is wrong or empty.');    
    }
    
}







function buildResponse(res) {
    
    try
    {
       var result = JSON.parse(res);
    }
    catch(e)
    {
       displayError('An error has occured.');    
    }
    
    
    var size = result['paths'].length;
    var details = [];
    var totalTime = 0;    
    
    for (var i=0 ; i < size ; i++) {
        var ArrayPath = result['paths'][i];    
        var key = Object.keys(ArrayPath);
        
        var object = {
            'path': key[0].toUpperCase(),
            'time': GetTimePerPath(transportMode, ArrayPath[key]),
            'distance': ArrayPath[key]
        }
        totalTime += object['time'];
        details.push(object);
        
    }    
    
    //Last element in details[] is the total time and distance.
    var total = {
        'distance': result['cost'],
        'time': totalTime
    }
    details.push(total);
    
    displayResult(details);
}









function FormatTime(time) {
    
    //Format the time as '1H23' or '13 min'.
    if (time > 60) {
        
        var FloatTime = time/60;
        var hours = Math.floor(FloatTime);
        var FloatMinutes = hours - Math.floor(FloatTime);
        
        if (FloatMinutes == 0) {
            var format = hours + 'H';    
        } else {
            var format = hours + 'H' + (FloatMinutes*60).toFixed(0);
        }
        
        return format;
        
    } else {
        
        
        return "~" + Math.round(time) + " min";
    }
}




















