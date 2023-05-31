from flask import Flask
import requests

app = Flask(__name__)

@app.route('/')
def index():
    result = "<h3>The weather is: " + weather
    result += "<br>The temperature is: " + str(temp)
    result += "<br>The wind speed is: " + str(wind_speed) + "</h3>"
    return '<h1>{}</h1>'.format(user_input) + result 

api_key = '977574eb340eabbcd237c22c66a0d343'

user_input = input("Enter city: ")

#weather data from url 
weather_data = requests.get(
    f"https://api.openweathermap.org/data/2.5/weather?q=halifax&APPID={api_key}&units=metric")


print(weather_data.status_code)
weather = weather_data.json()['weather'][0]['main']
temp = weather_data.json()['main']['temp']
wind_speed = weather_data.json()['wind']['speed']
wind_degree = weather_data.json()['wind']['deg']
humidity = weather_data.json()['main']['humidity']

# # print(weather, temp, wind_speed, wind_degree, humidity)