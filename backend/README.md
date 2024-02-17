Create a .env file
Add in the following lines

OPENAI_API_KEY=<key>
HUGGINGFACE_API_KEY=<key>
TOKENIZERS_PARALLELISM=<key>

Run:
flask --app app.py run

If you want debug mode that updates on changes

flask --app app.py run --debug
