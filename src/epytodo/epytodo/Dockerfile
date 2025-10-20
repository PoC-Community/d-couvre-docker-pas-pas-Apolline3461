FROM python:3.7.5-alpine

WORKDIR /app

EXPOSE 5000

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY . .

CMD ["python3", "run.py"]
