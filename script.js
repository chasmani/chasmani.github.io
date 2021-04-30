
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var warwickResponseId = urlParams.get('Warwick_ResponseID');

// Create anchor element.
var a = document.createElement('a'); 
                  
// Create the text node for anchor element.
var link = document.createTextNode("Click here to begin the experiment");
                  
// Append the text node to anchor element.
a.appendChild(link); 
                  
// Set the title.
a.title = "This is Link"; 
                  
var newLink = "https://pdrep.herokuapp.com/room/pd_replay/?participant_label=" + warwickResponseId

// Set the href property.
a.href = newLink; 
                  
// Append the anchor element to the body.
document.body.appendChild(a); 