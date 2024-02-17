Create a .env file
Add in the following lines

OPENAI_API_KEY=<key>
HUGGINGFACE_API_KEY=<key>
TOKENIZERS_PARALLELISM=<key>

Run:
flask --app app.py run

If you want debug mode that updates on changes

flask --app app.py run --debug

Data:
To add more data to the RAG pipeline, you can add any number of pdfs. Note that it takes longer
for the flask application to load when you have more data
