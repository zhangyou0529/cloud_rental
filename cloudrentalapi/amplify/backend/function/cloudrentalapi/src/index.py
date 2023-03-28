from flask_cors import CORS
import awsgi
from flask import Flask, jsonify, request, render_template, redirect
from sqlalchemy import create_engine
import boto3
import os
from uuid import uuid4
import pickle
import sklearn
import lightgbm as lgb
import numpy as np
import pandas as pd
from sklearn.model_selection import GridSearchCV
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split

BASE_ROUTE = "/listing"

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))

CORS(app)

#import AWS RDS
client = 
TABLE = 



@app.route('/ranking-page-store', methods = ['POST'])
def create_ranking():
    location = request.form.get('location')
    bathrooms = request.form.get('bathrooms')
    bedrooms = request.form.get('bedrooms')
    size = request.form.get('size')

    #ranking function
    output_df = 

    ranking = output_df.to_json(orient = 'index')
    return jsonify(ranking)



@app.route('/loadingfactors-store', methods = ['POST'])
def getloadingfactors():

    feature_importance = pd.DataFrame({'features': ['num__bedrooms', 'num__bathrooms', 'num__size', 'num__time_needed'], 
                                       'importance': model.feature_importances_}).sort_values(by='importance', ascending=False)
    
    
    df_all = df_all.replace("",np.nan)
    df1 = df_all[['price','bedrooms','bathrooms','size','time_needed']].astype('float64')
    df1 = df1.replace(np.nan,df1['time_needed'].mean())
    num_cols = df1.describe().columns.to_list()[:]
    num_cols.remove('price')
    
    df2 = pd.DataFrame()
    for col in num_cols:
        df2[col] = (df1[col] - df1[col].min()) /( df1[col].max() - df1[col].min())

    df3= pd.DataFrame()
    df3['bedrooms'] = df2['bedrooms']*feature_importance.loc[feature_importance['features'] == "num__bedrooms"]['importance'].values[0]
    df3['bathrooms'] = df2['bathrooms']*feature_importance.loc[feature_importance['features'] == "num__bathrooms"]['importance'].values[0]
    df3['size'] = df2['size']*feature_importance.loc[feature_importance['features'] == "num__size"]['importance'].values[0]
    df3['location'] = (1-df2['time_needed'])*feature_importance.loc[feature_importance['features'] == "num__time_needed"]['importance'].values[0]
    df3['property_id'] = df_all['property_id']
    
    loadingfactors = df3.to_json(orient = 'index')
    return jsonify(loadingfactors)




@app.route('/predictprice', methods = ['POST'])
def predict():

    #get property details
    location = request.form.get('location')
    bathrooms = request.form.get('bathrooms')
    bedrooms = request.form.get('bedrooms')
    size = request.form.get('size')

    #read from rds
    df = pd.read_sql_query("SELECT bedrooms, bathrooms, size, time_needed FROM TABLE")
    df = df[['bedrooms','bathrooms','size','time_needed']].astype('float64')
    num_cols = df.describe().columns.to_list()[:]
    preprocessor = ColumnTransformer([('num', StandardScaler(), num_cols)])
    preprocessor.fit(df[num_cols]) 

    X_sample = preprocessor.transform(pd.DataFrame([[bedrooms,bathrooms, size, location]], columns = ['bedrooms', 'bathrooms', 'size', 'time_needed']))

    output = pd.DataFrame(final_mdl.predict(X_sample), columns = ['Price'])
    pred_price = output.to_json(orient = 'records')
    return jsonify(pred_price)


def handler(event, context):
    return awsgi.response(app, event, context)














@app.route('/create_listing', methods=['POST'])
def create_listing():
    request_json = request.get_json()
    client.put_item(TableName=TABLE, Item={
        'id': { 'S': str(uuid4()) },
        'name': {'S': request_json.get("name")},
        'year': {'S': request_json.get("year")},
        'link': {'S': request_json.get("link")},
    })
    return jsonify(message="listing created")




@app.route(BASE_ROUTE + '/<song_id>', methods=['PUT'])
def update_song(song_id):
    # Change to your fields
    client.update_item(
        TableName=TABLE,
        Key={'id': {'S': song_id}},
        UpdateExpression='SET #name = :name, #year = :year, #link = :link',
        ExpressionAttributeNames={
            '#name': 'name',
            '#year': 'year',
            '#link': 'link'
        },
        ExpressionAttributeValues={
            ':name': {'S': request.json['song_name']},
            ':year': {'S': request.json['year']},
            ':link': {'S': request.json['link']},
        }
    )
    return jsonify(message="item updated")



@app.route(BASE_ROUTE + '/<song_id>', methods=['DELETE'])
def delete_song(song_id):
    client.delete_item(
        TableName=TABLE,
        Key={'id': {'S': song_id}}
    )
    return jsonify(message="song deleted")
