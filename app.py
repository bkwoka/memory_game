from flask import Flask, render_template, url_for, redirect, request

app = Flask(__name__)


@app.route('/')
def game():
    return render_template('game.html')


if __name__ == '__main__':
    app.run()
