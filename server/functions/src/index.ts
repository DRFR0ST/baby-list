// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert(
        {
            "type": "service_account",
            "project_id": "baby-shopping-list",
            "private_key_id": "dd688f45f45085cf0da6a84c0abd9bd0a1fbb126",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDPJ8JVKG/AcYFK\n4HKuMkn5EvWlj+KuZCO8w9TuwBiqt4s5m6AIWFfaacd4wIpe8zFrYznkrVsKNvzW\nlaQgOy7Rl9xFGgnk83MxAR641Zaoy32F8aaeNln0ZCOeZcxF/rgwclWQazirdZWT\nwKzfu2G6wfio1nDvVnDwRLkeqgp6NUeFdzySVFX9OAAKke5l0TEqwFUiz0OAxBvN\nQ0cCWJ1gucAnM1Dk9WofFQrGwjklQ7OUl+jqm2DBsgPx+rEf7QheWU6d3AfEbmae\nFmu5W+MqjRvY+T7ZOfdA69sU6xTV/o3+NtE+g3Ze1Iw+wwlHxs6KMtGcValYBbsW\nLq3WESpnAgMBAAECggEAOMFgZVt4TqXqcfzPfrlpefO/WJZ02Sm3ftq6hpUbzP4P\nh3+DV3X4z+7mR0edQYlos07SyDvUsxZArHwAJRKB78um/km1h0RJ/ZWceLCQH/vs\njpuX9kXW3HXpKlciodS5WxCgL7qoopVLH1mNI5kfm/7T5VInS/OHatSxUVzuFO/w\n0Odf3ygerOnVRFJAML542fugQXBbmjZBali6VTRYN5REXkrkr8ATb2G2rRiQlDTm\nTlhiqaYU7GZ3Mia0htZ4GWyTcL0nT3PyKFAVjCxzidRo1lttUrUzJ0hx6rp+QgaX\nYKb2w+udmrzFE6EzEbeXeOQKteB9ZppwsbcZ9N6G6QKBgQDoNxyH5/b/B6OA/Dep\nGOacVaK25bCHpjzH7GiQTDJ5QIT4XZGfEnZ0+odZVJM9Yba23apyU2/nwm8M9YSw\ntBdISp8m+QeYq3oqWCvu5Qwchm4N6atbcIhXrJ0ARrfsL5Y0WPoup9KlwgTf9B+H\nZFV0AdaZ+1VZemTrSSHSdSiSaQKBgQDkX42hJYVQGdnXkkUFEEFvv9uuWUi4sdGF\njpnYx9yCcKd336faqSVBCwQoWyWru5o9QwL6R3W+8583ZINsKhC4WAoR5ZCEj4Il\nRam7b/XfWGS8RXVX4ij3rS3EdFRDy8V+4BgNNvtjY16ipAPMq4l119TG6uqNFgL4\nXHu4eDScTwKBgQCvBfrnJJsyFZvS+EcrmK0YYCNIH08yrsVZGoKlYAkbAto2KLA9\naTkHalzho7FmrmN86Q4zJVhPIml5JwRf+x0hS70xLrnfBEAL8nEKmnDKfzgsHFcf\nkG3zRxL+xk6SIjvgMMBAshU/AkGSWvn4nlMaINiTLrBhxLKT9IcdjViLIQKBgQC/\nCCMsCnvSvl0YU1WC388tEFtOI4eOX8h5JQkSalTNlDiyMJdzdIwiNXnb3CrN1dc2\nqaiC/WXEPnwP1PeOcj2cRqDdyZ8zE+x1CynpDcWpd4KEbsGyqw9D50xiikC2mWzy\nLbhQzY5J3CScfgBjo5YPymRFpNpg/GmtoYcojvzLRwKBgQDBVHOVtL/3MrAPgzCe\nijEpjn6x/w98U0rK6iEJ+E7agnlagmlX77WdcEv2SQEKY+Ed7m/NyzYR5hWx/H8g\nuO8YaHLy7IcaZHogwYqZ3kZXED8j4aoGNV0D3QcJxZ9M+7gDmNnF7VwQFCZDQte1\nfpUJtTCWoNGVUghv6gzVhlBm3A==\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-q3hd0@baby-shopping-list.iam.gserviceaccount.com",
            "client_id": "103051140327406425378",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-q3hd0%40baby-shopping-list.iam.gserviceaccount.com"
          }
    ),
    databaseURL: "https://baby-shopping-list.firebaseio.com"
});

const db = admin.firestore();

function compare(a: any, b: any) {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

export const productList = functions.https.onRequest(async (request: any, response: any) => {
    response.set('Access-Control-Allow-Origin', "*")
    const { volume } = request.query;

    const collection = await db.collection("products").get();

    if(!collection) return void response.json({ status: 500, message: "An unexpected error occurred." });

    const list: any[] = [];

    collection.forEach((doc: any) => {
        const product = doc.data();

        if(product.name)
            list.push({token: doc.id, ...product});
    });

    if (volume > 0) list.length = volume;

    return void response.json({ status: 200, data: list.sort(compare) });
});

export const productInfo = functions.https.onRequest(async (request: any, response: any) => {
    response.set('Access-Control-Allow-Origin', "*")
    const { token } = request.query;
    if(!token) return void response.json({ status: 400, message: "No product token provided." });

    const doc = await db.collection("products").doc(token).get();
    if(!doc.exists) return void response.json({ status: 404, message: "Product not found." });

    const product = await doc.data();
    //if(!product.exists) 

    return void response.json({ status: 200, data: product });
});

export const productCreate = functions.https.onRequest(async (request: any, response: any) => {
    response.set('Access-Control-Allow-Origin', "*")
    const { name, description, url, media_url, available=true } = request.query;
    if(!name || !description || !url || !media_url) return void response.json({ status: 400, message: "All data has to be provided." });

    const new_product = Object.freeze({
        name,
        description,
        url,
        media_url,
        available
    });

    const docRef = await db.collection("products").add(new_product);

    if(!docRef) return void response.json({ status: 500, message: "An unexpected error occurred." });


    return void response.json({ status: 200, data: { token: docRef.id } });
});

export const productDelete = functions.https.onRequest(async (request: any, response: any) => {
    response.set('Access-Control-Allow-Origin', "*")
    const { token } = request.query;
    if(!token) return void response.json({ status: 400, message: "No product token provided." });
    
    await db.collection("products").doc(token).delete();
    
    return void response.json({ status: 204 });
});

// export const productDeactivate = functions.https.onRequest(async (request: any, response: any) => {
//     const { token } = request.query;
//     if(!token) {
//          response.json({ status: 400, message: "No product token provided." });
//     }

//     await db.collection("products").doc(token);
// }); 