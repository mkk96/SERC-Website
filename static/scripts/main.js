function myFunc(parameter) 
{
    var data=JSON.parse(parameter);
    var row=data['organic_results'].length;
    var div=document.getElementById("dvTable");
    var table=document.createElement("table");
    table.classList.add("styled-table");
    var thead=document.createElement("thead");
    var tr=document.createElement("tr");
    tr.classList.add("nine");
    tr.classList.add("eleven");
    var th1=document.createElement("th");
    th1.innerHTML="Title";
    th1.classList.add("ten");
    var th2=document.createElement("th");
    th2.innerHTML="Summary";
    th2.classList.add("ten");
    var th3=document.createElement("th");
    th3.innerHTML="Author";
    th3.classList.add("ten");
    var th4=document.createElement("th");
    th4.innerHTML="Cited";
    th4.classList.add("ten");
    var th5=document.createElement("th");
    th5.innerHTML="Link";
    th5.classList.add("ten");
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    thead.appendChild(tr);
    table.appendChild(thead);
    var tbody=document.createElement("tbody");
    tbody.classList.add("eleven");
    for(var i=0;i<row;i++)
    {
        var tr1=document.createElement("tr");
        tr1.classList.add("eleven");
        var td1=document.createElement("td");
        td1.innerHTML=data["organic_results"][i]["title"];
        td1.classList.add("ten");
        var td2=document.createElement("td");
        td2.innerHTML=data["organic_results"][i]['snippet'];
        td2.classList.add("ten");
        var authors=""
        try 
        {
            for(var j =0;j<data["organic_results"][i]['publication_info']['authors'].length;j++)
            {
                authors=authors+(data["organic_results"][i]['publication_info']['authors'][j]['name'])+", "
            }
        }
        catch(err) 
        {
            authors="No Authors"
        }
        var td3=document.createElement("td");
        td3.innerHTML=authors;
        td3.classList.add("ten");
        var td4=document.createElement("td");
        td4.innerHTML=data["organic_results"][i]['inline_links']["cited_by"]["total"];
        td4.classList.add("ten");
        var td5=document.createElement("td");
        td5.innerHTML='<a href='+data["organic_results"][i]['link']+' target="_blank">LINK</a>'
        td5.classList.add("ten");
        tr1.appendChild(td1);
        tr1.appendChild(td2);
        tr1.appendChild(td3);
        tr1.appendChild(td4);
        tr1.appendChild(td5);
        tbody.appendChild(tr1); 
    }
    table.appendChild(tbody);
    div.appendChild(table);
}
function proffun(result)
{
    var data=JSON.parse(result);
    var row=data['data'].length;
    var body=document.getElementById("galary");
    for(var i=0;i<row;i++)
    {
        var div1=document.createElement("div");
        div1.classList.add="row";
        var div2=document.createElement("div");
        div2.classList.add("col-md-2")
        div2.classList.add("col-sm-6")
        div2.classList.add("col-md-offset-1")
        var div3=document.createElement("div");
        div3.classList.add="gallery-item";
        var img=document.createElement("img");
        img.src="/static/image/"+data['data'][i][1]
        img.style.border="1px solid #ddd";
        img.style.borderRadius="4px";
        img.style.padding="5px";
        img.style.width="150px";
        img.style.height="150px";
        img.style.borderRadius="50%";
        div3.appendChild(img);
        var div4=document.createElement("div");
        div4.classList.add("content-gallery");
        var h3=document.createElement("h3");
        h3.innerHTML=data['data'][i][0]
        h3.style.padding="5x";
        h3.classList.add("third");
        var h4=document.createElement("h3");
        h4.innerHTML=data['data'][i][2]
        h4.style.padding="5px";
        h4.style.textAlign="center"
        h4.classList.add("third");
        div4.appendChild(h3)
        div4.appendChild(h4)
        div3.appendChild(div4);
        div2.appendChild(div3);
        div1.appendChild(div2);
        body.appendChild(div1);
    }
    return result
}
function resourse(parameter)
{
    var data=JSON.parse(parameter);
    var row=data['data'].length;
    var div=document.getElementById("dvTable");
    var table=document.createElement("table");
    table.classList.add("styled-table");
    var thead=document.createElement("thead");
    var tr=document.createElement("tr");
    tr.classList.add("nine");
    tr.classList.add("eleven");
    var th1=document.createElement("th");
    th1.innerHTML="Name";
    th1.classList.add("ten");
    var th2=document.createElement("th");
    th2.innerHTML="Description";
    th2.classList.add("ten");
    tr.appendChild(th1);
    tr.appendChild(th2);
    thead.appendChild(tr);
    table.appendChild(thead);
    var tbody=document.createElement("tbody");
    tbody.classList.add("eleven");
    for(var i=0;i<row;i++)
    {
        var tr1=document.createElement("tr");
        tr1.classList.add("eleven");
        var td1=document.createElement("td");
        td1.innerHTML=data["data"][i][0];
        td1.classList.add("ten");
        var td2=document.createElement("td");
        td2.innerHTML='<a href='+data["data"][i][2]+' target="_blank">'+data["data"][i][1]+'</a>'
        td2.classList.add("ten");
        tr1.appendChild(td1);
        tr1.appendChild(td2);
        tbody.appendChild(tr1); 
    }
    table.appendChild(tbody);
    div.appendChild(table);
}