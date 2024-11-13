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

@app.route('/recipes', methods=['POST'])
def recipes():
    ingredients = request.json.get("ingredients", [])
    recipes = get_recipes(ingredients)
    return jsonify(recipes)

if __name__ == '__main__':
    app.run(debug=True)
