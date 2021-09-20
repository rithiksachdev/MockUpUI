var headings=[]
var content=[]
var count = 0
time = []
    
//alert("")
/*
    This function is used to add new note headings in the unordered list and update the heading
*/
function newNote(){
    //alert("");
    var li = document.createElement("li");
    var inputHeading = document.getElementById("leftHeading").value;
    var temp =document.createTextNode(inputHeading);
    li.appendChild(temp)
    if (inputHeading === "")
    {
        alert("Empty Heading");
    }
    else{
        //alert(inputHeading);
        li.setAttribute("id",count)
        document.getElementById("notesList").appendChild(li)
        headings[count] = inputHeading;
        //alert(document.getElementById("leftHeadingNotes").innerHTML);
        document.getElementById("leftHeadingNotes").innerHTML = inputHeading;
        count++;
        document.getElementById("leftHeading").value = "";
        document.getElementById("leftHeadingNotesContent").value = "";
        var d = new Date();
        var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +d.getHours() + ":" + d.getMinutes();
        time[count] = datestring;
        document.getElementById("rightHeadingNotes").innerHTML = time[count]; 
    }
}

/*
    This function is used to add save note content for a corresponding heading in the unordered 
    list and update the time.Here I have used heading as the key as it cannot be edited in label, 
    but we can use long integers if we want to support same heading notes.
*/
function saveNote(){
        var temp = document.getElementById("leftHeadingNotes").innerHTML;
        for (j = 0; j<headings.length; j++)
        {
            
            if (headings[j]==temp)
            {
                content[j] = document.getElementById("leftHeadingNotesContent").value;
                var d = new Date();
                var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +d.getHours() + ":" + d.getMinutes();
                time[j] = datestring;
                document.getElementById("rightHeadingNotes").innerHTML = datestring;
            }
        }
}

// Deletes a note based on the heading
function deleteNote()
{
    var temp = document.getElementById("leftHeadingNotes").innerHTML;
    for (j = 0; j<headings.length; j++)
    {
        
        if (headings[j]==temp)
        {
            var list = document.querySelector('ul');
            list.removeChild(document.getElementById(j))
            document.getElementById("leftHeadingNotes").innerHTML="Notes Heading";
        
    	document.getElementById("leftHeadingNotesContent").value="";   				    	
        	
        document.getElementById("rightHeadingNotes").innerHTML = "Time";
        }
    }

}
