# Aggregator in MongoDB

## Aggregator Opertors 

### 1. Match Operator

```javascript
    const matchOpertors= await User.aggregate([
    {
        $match:{
            isActive:true //filter out the values based on given condition
        }
    }
    ])
```

### 2. Count Operator

```javascript
const countOpertors= await User.aggregate([
    {
        $match:{
            isActive:true //filter out the values based on given condition
        }
    },
    {
        $count:"activeUsers" //count the output from first pipline and add activeUsers in Object
    }
])
```