import { Double, Long } from "mongodb"
import {Schema, mongoose} from "mongoose"

const authorSchema=new Schema({
    "firstName": {
        "type": "String"
      },
      "lastName": {
        "type": "String"
      },
      "maidenName": {
        "type": "String"
      },
      "age": {
        "$numberInt": {
          "type": "Date"
        }
      },
      "gender": {
        "type": "String"
      },
      "email": {
        "type": "String"
      },
      "phone": {
        "type": "String"
      },
      "username": {
        "type": "String"
      },
      "password": {
        "type": "String"
      },
      "birthDate": {
        "type": "Date"
      },
      "image": {
        "type": "String"
      },
      "bloodGroup": {
        "type": "String"
      },
      "height": {
        "$numberInt": {
          "type": "Date"
        }
      },
      "weight": {
        "$numberDouble": {
          "type": "Date"
        }
      },
      "eyeColor": {
        "type": "String"
      },
      "hair": {
        "color": {
          "type": "String"
        },
        "type": {
          "type": "String"
        }
      },
      "domain": {
        "type": "String"
      },
      "ip": {
        "type": "String"
      },
      "address": {
        "address": {
          "type": "String"
        },
        "city": {
          "type": "String"
        },
        "coordinates": {
          "lat": Number,
          "lng": Number,
        },
        "postalCode": {
          "type": "Date"
        },
        "state": {
          "type": "String"
        }
      },
      "macAddress": {
        "type": "String"
      },
      "university": {
        "type": "String"
      },
      "bank": {
        "cardExpire": {
          "type": "Date"
        },
        "cardNumber": {
          "type": "String"
        },
        "cardType": {
          "type": "String"
        },
        "currency": {
          "type": "String"
        },
        "iban": {
          "type": "String"
        }
      },
      "company": {
        "address": {
          "address": {
            "type": "String"
          },
          "city": {
            "type": "String"
          },
          "coordinates": {
            "lat": Number,
            "lng": Number
          },
          "postalCode": {
            "type": "Date"
          },
          "state": {
            "type": "String"
          }
        },
        "department": {
          "type": "String"
        },
        "name": {
          "type": "String"
        },
        "title": {
          "type": "String"
        }
      },
      "ein": {
        "type": "String"
      },
      "ssn": {
        "type": "String"
      },
      "userAgent": {
        "type": "String"
      },
      "crypto": {
        "coin": {
          "type": "String"
        },
        "wallet": {
          "type": "String"
        },
        "network": {
          "type": "String"
        }
      }
},{timestamps:true})

export const Author=mongoose.model("Author",authorSchema)
