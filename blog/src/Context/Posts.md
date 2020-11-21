**Get Posts**
----
  Returns json data of posts.

* **URL**

  /posts/

* **Method:**

  `GET`
  
*  **URL Params**
    
    None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[
    {
        "tags": [
            "first_post",
            "html",
            "css",
            "bootstrap",
            "anasvakyathodi"
        ],
        "_id": "5f7bc01a8ddada36ac15af79",
        "title": "First Post",
         "html": "<h1>hello <\\h1>",
        "createdAt": 1601945626366,
        "__v": 0
    },
    {...`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
   

* **Sample Call:**

  ```javascript
    axios
    .get('localhost:5000/posts/')
    .then(response){
        console.log(response.data);
    }
    .catch(error){
        console.log(error);
    }
  ```
