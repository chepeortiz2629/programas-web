from flask import Flask, render_template, url_for

app=Flask(__name__)

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/menu')
def menu():
    return render_template('menu.html')

@app.route('/usuarios')
def menu_user():
    return render_template('usuarios.html')

if  __name__=='__main__':
     app.run(debug=True)