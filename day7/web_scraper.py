from bs4 import BeautifulSoup
import requests

web_page = requests.get("https://weather.gc.ca/canada_e.html")
doc = BeautifulSoup(web_page.text, "html.parser")


cities = ['Calgary', 'Halifax', 'Montréal', 'Toronto', 'Vancouver']

#open file
with open('weather.txt', 'w') as f:

    #get all things in table
    for row in doc.find_all('tbody')[0].find_all('tr'):

        #get all content thats table data
        cells = row.find_all('td')

        #get city name
        city = cells[0].get_text().strip()
        #check if the city is from the ones we want
        if city in cities:
            #Then fetch the temp (in cell 2)
            temperature = cells[2].get_text().strip()


            #print out
            print(f"{city}: {temperature}\n")
            
            #write to the file

            f.write(f"{city}: {temperature}\n")
    

