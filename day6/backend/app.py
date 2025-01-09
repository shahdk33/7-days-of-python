from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

def get_recipes(ingredients):
    query = ','.join(ingredients)
    response = requests.get(f'https://api.spoonacular.com/recipes/findByIngredients?ingredients={query}&apiKey=ae8ea3c0c6034c468ef92d8cee28f4f4')
    if response.status_code == 200:
        return response.json()
    else:
        return {"error": "Failed to fetch recipes"}
    
def get_recipe_details(recipe_id):
    response = requests.get(f'https://api.spoonacular.com/recipes/{recipe_id}/information?apiKey=ae8ea3c0c6034c468ef92d8cee28f4f4')
    if response.status_code == 200:
        return response.json()  # Returns detailed information such as time, vegan, nut-free, etc.
    else:
        return {"error": f"Failed to fetch details for recipe {recipe_id}"}


@app.route('/recipes', methods=['POST'])
def recipes():
    ingredients = request.json.get("ingredients", [])
    recipes = get_recipes(ingredients)

    # using the id of the recipe fetched, get the details 
    for recipe in recipes:
        details = get_recipe_details(recipe['id'])
        if isinstance(details, dict) and "error" in details:
            recipe['details'] = details
        else:
            # Combine the original recipe data with the fetched details
            recipe['details'] = {
                'readyInMinutes': details.get('readyInMinutes'),
                'vegan': details.get('vegan'),
                'glutenFree': details.get('glutenFree'),
                'dairyFree': details.get('dairyFree'),
                'veryHealthy': details.get('veryHealthy'),
                'image': details.get('image'),
                'url': details.get('spoonacularSourceUrl')
            }

    return jsonify(recipes)

if __name__ == '__main__':
    app.run(debug=True)
