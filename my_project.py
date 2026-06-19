from flask import Flask, app,render_template
import flask
web: gunicorn my_project:app
@app.route('/')
def home():
    message="Login Here"
    return render_template('login.html',message1=message)
@app.route('/newuser')
def new_user():
    return render_template('newuser.html')
@app.route('/register', methods=['POST'])
def register_user():
    entered_username = flask.request.form.get('username')
    entered_password = flask.request.form.get('password')
    entered_email = flask.request.form.get('email')
    entered_email=entered_email.lower()
    entered_location = flask.request.form.get('location')
    # Handle user registration logic here
    import sqlite3
    conn = sqlite3.connect('my_users.db')
    cur = conn.cursor()
    my_data = "create table if not exists users (username varchar(50), password varchar(50), email varchar(100), location varchar(100))"
    cur.execute(my_data)
    cur.execute(f"select email from users where email='{entered_email}'")
    result = cur.fetchone()
    if result != None:
        message="Email already exists. Please use a different email."
        return render_template('login.html', message1=message)
    else:
        my_insert = f"insert into users values ('{entered_username}', '{entered_password}', '{entered_email}', '{entered_location}')"
        cur.execute(my_insert)
        conn.commit()
        return "User registered successfully!"
@app.route('/validateusr', methods=['POST'])
def validateusr():
    
    entered_email = flask.request.form.get('logemail')
    entered_password = flask.request.form.get('logpassword')
    entered_email=entered_email.lower()
    import sqlite3
    conn = sqlite3.connect('my_users.db')
    cur = conn.cursor()
    cur.execute(f"select * from users where email='{entered_email}' and password='{entered_password}'")
    result = cur.fetchone()
    if result == None:
        message="Invalid email or password. Please try again."
        return render_template('login.html', message1=message)
    else:
        return "Login successful!"
if __name__ == '__main__':
    app.run(debug=True)