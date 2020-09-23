FROM python:alpine3.7

# In the image files, create a directory called /app if it doesn't already 
# exist and cd into it
WORKDIR /app

# Set environment variables for Flask
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=5000

# Expose port 5000
EXPOSE 5000

# Copy requirements.txt in this directory into the image's /app directory
COPY requirements.txt requirements.txt
# Install the packages in the requirements.txt file
RUN pip install -r requirements.txt

# Copy all the contents of this directory into the image's /app directory
COPY . .

# Run `flask run`
CMD ["flask", "run"]