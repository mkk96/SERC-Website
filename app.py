from flask import Flask,render_template,redirect,request,url_for
import os
from serpapi import GoogleSearch
path = os.getcwd()
app = Flask(__name__)
flag=0
@app.route("/")
def hello_world():
    return render_template("index.html",data=flag)

@app.route("/publication")
def publication():
    '''f = open(path+"/static/files/dumy.json")
    data = json.load(f)'''
    params = {
    "api_key": "f30f9e6620119bb395de66ad3e030290a2818e3b93a449491a4d8907fa26a3ce",
    "engine": "google_scholar",
    "q": "iiith",
    "hl": "en",
    "num": "10000"
    }
    search = GoogleSearch(params)
    data = search.get_dict()
    return render_template("publication.html",data=flag,result=data)

@app.route("/focus")
def focus():
    return render_template("focus.html",data=flag)

@app.route("/event")
def event():
    return render_template("event.html",data=flag)

@app.route("/contact", methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        return render_template("contact.html",data=flag,msg="Email Sent!")
    return render_template("contact.html",data=flag)

@app.route("/admin" , methods=['GET', 'POST'])
def admin():
    if request.method == 'POST':
        newflag = request.form.to_dict()
        newflag=newflag["flag"]
        global flag
        if(newflag=="Yes"):
            flag=1
        else:
            flag=0
    return render_template("admin.html",data=flag)

@app.route('/resources/<para>', methods=['GET', 'POST'])
def resources(para):
    file = open(path+"/static/files/reso.csv")
    List=[]
    for row in file:
        rowList = tuple(row[:-1].split(","))
        if(rowList[0]==para):
            List.append(rowList[1:])
    List ={
        'data': [elem for elem in List]
    }
    return render_template("resources.html",data=flag,result=List,param=para)

@app.route('/profile/<para>', methods=['GET', 'POST'])
def profile(para):
    file = open(path+"/static/files/namephoto.csv")
    List=[]
    for row in file:
        rowList = tuple(row[:-1].split(","))
        if(rowList[0]==para):
            List.append(rowList[1:])
    List ={
        'data': [elem for elem in List]
    }
    return render_template('profile.html',data=flag,result=List,param=para)

if __name__=="__main__":
    app.run(debug=True)