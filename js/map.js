
//Map path to .png layer
function getLayerByPath(index) {

    var path = "media/Map/";
    var ext = ".png";

    
    var layers = {
        'ab': "AB",
        "ag": "AG",
        'bj': "BJ",
        "cb": "CB",
        "dc": "DC",
        "ed": "ED",
        "fe": "FE",
        "fm": "FM",
        "gf": "GF",
        "hg": "HG",
        "ho": "HO",
        "ih": "IH",
        "iq": "IQ",
        "ja": "JA",
        "jr": "JR",
        "kc": "KC",
        "kd": "KD",
        "le": "LE",
        "ls": "LS",
        "ml": "ML",
        "mn": "MN",
        "on": "ON",
        "pn": "PN",
        "po": "PO",
        "qp": "QP",
        "qt": "QT",
        "ri": "RI",
        "rj": "JR",
        "sk": "SK",
        "sr": "SR",
        "st": "ST",
        "tr": "TR"
    }

    //lower case.
    var index = index.toLowerCase();

    if (layers[index] != null) 
    {
        var link = path + layers[index] + ext;
        return link;    
    } 
    else 
    {
        //Swap characters
        var char0 = index[0];
        var char1 = index[1];
        var newIndex = char1 + char0
        
        var link = path + layers[newIndex] + ext;
        return link;    
    }
}



//Return an image tag with the source.
function BuildNewTagWithLink(link) {
    var imgTag = '<img src="'+ link +'">';
    return imgTag;
}




//Add images  to the 'path' id.
function AddSubLayerOnMap(subLayers) {
    var elem = document.getElementById('path');
    elem.innerHTML = subLayers;
}









