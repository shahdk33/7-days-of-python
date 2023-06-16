import requests
import json

def get_recipes(ingredients):

    #make the ingredients a comma separated string
    query = ','.join(ingredients)

    response = requests.get(f'https://api.spoonacular.com/recipes/findByIngredients?ingredients=y{query}&apiKey=ae8ea3c0c6034c468ef92d8cee28f4f4')
    
    if response.status_code == 200:
        recipes = response.json()
        return recipes
    else:
        print('Error')
        return None

def main():
    ingredients = input("ENTER INGREEDIENTS:").split(',')

    ingredients = [ingredient.strip() for ingredient in ingredients]

    recipes = get_recipes(ingredients)

    if recipes:
        for recipe in recipes:
            print("Title:", recipe['title'])
            print("Image:", recipe['image'])
            print("Used Ingredients:")
            for ingredient in recipe['usedIngredients']:
                print("-", ingredient['original'])
            print("Missed Ingredients:")
            for ingredient in recipe['missedIngredients']:
                print("-", ingredient['original'])
            print()

    else:
        print("none found")


if __name__ == '__main__':
    main()