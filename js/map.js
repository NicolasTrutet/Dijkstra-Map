





function getCoordinateForPath(path) {
    
    var coordinates = {
        
        //===== ARCS =====
        
        "ab": {
            "x": 370,
            "y": 420,
            "r": 300,
            "sAngle": -1.22,
            "eAngle": 1.35
        },
        "bc": {
            "x": 370,
            "y": 420,
            "r": 300,
            "sAngle": 4.24,
            "eAngle": 2.9
        },
        "cd": {
            "x": 370,
            "y": 420,
            "r": 300,
            "sAngle": 2.85,
            "eAngle": 2.72    
        },
        "de": {
            "x": 370,
            "y": 420,
            "r": 300,
            "sAngle": 2.29,
            "eAngle": 2.59
        },
        "ef": {
            "x": 370,
            "y": 420,
            "r": 300,
            "sAngle": 1.89,
            "eAngle": 2.28
        },
        "fg": {
            "x": 370,
            "y": 420,
            "r": 300,
            "sAngle": 0.9,
            "eAngle": 2.06
        },
        "ga": {
            "x": 370,
            "y": 420,
            "r": 300,
            "sAngle": 0.19,
            "eAngle": 1.61
        },
        "op": {
            "x": 490,
            "y": 473,
            "r": 44,
            "sAngle": -0.29,
            "eAngle": 1.12
        },
        "pn": {
            "x": 490,
            "y": 473,
            "r": 44,
            "sAngle": -2.7,
            "eAngle": 0.73
        },
        "no": {
            "x": 490,
            "y": 473,
            "r": 44,
            "sAngle": -3.9,
            "eAngle": 1.9
        },
        
        //===== LINES =====
        
        "bj": {
            "line1": {
                "from": {
                    "x": 230,
                    "y": 150
                },
                "to": {
                    "x": 265,
                    "y": 235
                },
            },
        },
        "aj": {
            "line1": {
                "from": {
                    "x": 470,
                    "y": 132
                },
                "to": {
                    "x": 426,
                    "y": 218
                },
            },
            "line2": {
                "to": {
                    "x": 265,
                    "y": 230
                },
            },
        },
        "jr": {
            "line1": {
                "from": {
                    "x": 263,
                    "y": 230
                },
                "to": {
                    "x": 291,
                    "y": 310
                },
            },
        },
        "rt": {
            "line1": {
                "from": {
                    "x": 290,
                    "y": 306
                },
                "to": {
                    "x": 350,
                    "y": 410
                },
            },
        },
        "tq": {
            "line1": {
                "from": {
                    "x": 350,
                    "y": 410
                },
                "to": {
                    "x": 401,
                    "y": 447
                },
            },
        },
        "qp": {
            "line1": {
                "from": {
                    "x": 401,
                    "y": 447
                },
                "to": {
                    "x": 451,
                    "y": 459
                },
            },
        },
        "oh": {
            "line1": {
                "from": {
                    "x": 529,
                    "y": 460
                },
                "to": {
                    "x": 565,
                    "y": 450
                },
            },
        },
        "nm": {
            "line1": {
                "from": {
                    "x": 460,
                    "y": 501
                },
                "to": {
                    "x": 410,
                    "y": 565
                },
            },
        },
        "iq": {
            "line1": {
                "from": {
                    "x": 401,
                    "y": 450
                },
                "to": {
                    "x": 440,
                    "y": 313
                },
            },
        },
        "ri": {
            "line1": {
                "from": {
                    "x": 287,
                    "y": 310
                },
                "to": {
                    "x": 443,
                    "y": 313
                },
            },
        },
        "hg": {
            "line1": {
                "from": {
                    "x": 563,
                    "y": 450
                },
                "to": {
                    "x": 667,
                    "y": 477
                },
            },
        },
        "ts": {
            "line1": {
                "from": {
                    "x": 350,
                    "y": 410
                },
                "to": {
                    "x": 234,
                    "y": 451
                },
            },
        },
        "sl": {
            "line1": {
                "from": {
                    "x": 235,
                    "y": 450
                },
                "to": {
                    "x": 295,
                    "y": 560
                },
            },
        },
        "le": {
            "line1": {
                "from": {
                    "x": 295,
                    "y": 560
                },
                "to": {
                    "x": 282,
                    "y": 710
                },
            },
        },
        "ks": {
            "line1": {
                "from": {
                    "x": 175,
                    "y": 476
                },
                "to": {
                    "x": 240,
                    "y": 452    
                },
            },
        },
        "ck": {
            "line1": {
                "from": {
                    "x": 80,
                    "y": 505
                },
                "to": {
                    "x": 176,
                    "y": 475
                },
            },
        },
        "lm": {
            "line1": {
                "from": {
                    "x": 292,
                    "y": 560
                },
                "to": {
                    "x": 413,
                    "y": 565
                },
            },
        },
        "kd": {
            "line1": {
                "from": {
                    "x": 176,
                    "y": 473
                },
                "to": {
                    "x": 216,
                    "y": 550
                },
            },
            "line2": {
                "to": {
                    "x": 176,
                    "y": 650
                },
            },
        },
        "rs": {
            "line1": {
                "from": {
                    "x": 292,
                    "y": 310
                },
                "to": {
                    "x": 200,
                    "y": 355
                },
            },
            "line2": {
                "to": {
                    "x": 237,
                    "y": 453
                },
            },
        },
        "ih": {
            "line1": {
                "from": {
                    "x": 440,
                    "y": 313
                },
                "to": {
                    "x": 523,
                    "y": 315
                },
            },
            "line2": {
                "to": {
                    "x": 565,
                    "y": 453
                },
            },
        },
        "mf": {
            "line1": {
                "from": {
                    "x": 410,
                    "y": 565
                },
                "to": {
                    "x": 470,
                    "y": 567
                },
            },
            "line2": {
                "to": {
                    "x": 555,
                    "y": 659    
                },
            },
        },    
    }
    
    
    return coordinates[path];
}















function getCoordinateForLetter(letter) {
    
    var coordinates = { 
        "a": {
            "x": 465,
            "y": 135
        },
        "b": {
            "x": 215,
            "y": 155
        },
        "c": {
            "x": 60,
            "y": 515
        },
        "d": {
            "x": 165,
            "y": 670
        },
        "e": {
            "x": 270,
            "y": 730
        },
        "f": {
            "x": 550,
            "y": 680
        },
        "g": {
            "x": 670,
            "y": 480
        },
        "h": {
            "x": 570,
            "y": 445
        },
        "i": {
            "x": 440,
            "y": 313
        },
        "j": {
            "x": 265,
            "y": 230
        },
        "k": {
            "x": 170,
            "y": 470
        },
        "l": {
            "x": 294,
            "y": 555
        },
        "m": {
            "x": 405,
            "y": 590
        },
        "n": {
            "x": 460,
            "y": 530
        },
        "o": {
            "x": 528,
            "y": 455
        },
        "p": {
            "x": 440,
            "y": 449
        },
        "q": {
            "x": 390,
            "y": 475
        },
        "r": {
            "x": 265,
            "y": 315
        },
        "s": {
            "x": 237,
            "y": 440
        },
        "t": {
            "x": 350,
            "y": 410
        },
        
    };
    
    
    return coordinates[letter];
}








 function drawMapWithPath(path) {
     
    var c = document.getElementById("map");
    var ctx = c.getContext("2d");
    var coordinates = getCoordinateForPath(path) ;
    ctx.beginPath();
    
    //Check if we have to draw an arc or lines.
    if (coordinates['x'] != null) { 
        //Draw an arc
        ctx.arc(coordinates['x'],coordinates['y'], coordinates['r'], coordinates['sAngle'], coordinates['eAngle']*Math.PI, true);    
    }
    else { 
        //Draw a single line
        var line1Coordinates = coordinates['line1'];
        ctx.moveTo(line1Coordinates['from']['x'], line1Coordinates['from']['y']);
        ctx.lineTo(line1Coordinates['to']['x'], line1Coordinates['to']['y']);
        
        //Draw a second line from the endPoint of the first line.
        if (coordinates['line2'] != null) {
            var line2Coordinates = coordinates['line2'];
            ctx.lineTo(line2Coordinates['to']['x'], line2Coordinates['to']['y']);
        }
     }
     
    ctx.lineWidth = 6;   
    ctx.strokeStyle = "#b3b3b3";
    ctx.stroke();   
 }







function drawNodeNameWith(letter) {
    
    var c = document.getElementById("map");
    var ctx = c.getContext("2d");
    var coordinates = getCoordinateForLetter(letter) ;
    ctx.beginPath();
    ctx.font = "30px Impact";
    ctx.fillText(letter.toUpperCase(), coordinates['x'], coordinates['y']);
    ctx.fillStyle = '#4d4d4d';
    ctx.stroke();
}







function drawMap() {
    
    //Draw Paths
    for (var i=0 ; i < AllPaths.length ; i++) {
        var path = AllPaths[i];
        drawMapWithPath(path);
    }
    
    //Draw Node names
    for (var i=0 ; i < AllNodes.length ; i++) {
        var node = AllNodes[i];
        drawNodeNameWith(node);
    }
}





var AllPaths = ['ab','bc','cd','de','ef','fg','ga','op','pn','no','ts','bj', 'aj','jr','rt','tq','qp',
                'oh','nm','iq','ri','hg','sl','le','ck','lm','kd','rs','ih','mf','ks'];

var AllNodes = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t'];








function FindInArray(subject, array) {
    
    for (var i=0 ; i < array.length ; i++) {
        if (array[i] == subject) {
            return true;
        }
    }
    return false;
}





function DisplayShortestPath(path) {
    
    var path = path.toLowerCase();

    if (!FindInArray(path, AllPaths)) {
        var char0 = path[0];
        var char1 = path[1];
        var path = char1 + char0;
    }
    
    var c = document.getElementById("map2");
    var ctx = c.getContext("2d");
    var coordinates = getCoordinateForPath(path) ;
    ctx.beginPath();
    
    //Check if we have to draw an arc or lines.
    if (coordinates['x'] != null) { 
        //Draw an arc
        ctx.arc(coordinates['x'],coordinates['y'], coordinates['r'], coordinates['sAngle'], coordinates['eAngle']*Math.PI, true);    
    }
    else { 
        //Draw a single line
        var line1Coordinates = coordinates['line1'];
        ctx.moveTo(line1Coordinates['from']['x'], line1Coordinates['from']['y']);
        ctx.lineTo(line1Coordinates['to']['x'], line1Coordinates['to']['y']);
        
        //Draw a second line from the endPoint of the first line.
        if (coordinates['line2'] != null) {
            var line2Coordinates = coordinates['line2'];
            ctx.lineTo(line2Coordinates['to']['x'], line2Coordinates['to']['y']);
        }
     }
     
    ctx.lineWidth = 8; 
    ctx.setLineDash([3])
    ctx.strokeStyle = "#0099ff";
    ctx.stroke();   

}







//Draw the entire map.
drawMap();




