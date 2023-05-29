import requests
api_key = '977574eb340eabbcd237c22c66a0d343'

user_input = input("Enter city: ")

#weather data from url 
weather_data = requests.get(
    f"https://api.openweathermap.org/data/2.5/weather?q={user_input}&APPID={api_key}")


print(weather_data.status_code)
weather = weather_data.json()['weather'][0]['main']
temp = weather_data.json()['main']['temp']
wind_speed = weather_data.json()['wind']['speed']
wind_degree = weather_data.json()['wind']['deg']
humidity = weather_data.json()['main']['humidity']

print(weather, temp, wind_speed, wind_degree, humidity)