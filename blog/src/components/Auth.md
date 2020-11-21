**Sign UP**
----
  Returns a message data whether user successfully is registered or not.

* **URL**

  /users/signup

* **Method:**

  `POST`
  
*  **URL Params**
    
    None

* **Data Params**

  * username
  * password

* **Success Response:**

  * **Code:** 200 
  *  **Content:** `{success:true, status: 'Registration Successful!'}`
 
* **Error Response:**

  * **Code:** 500
  * **Content:** `{name: "UserExistsError", message: "A user with the given username is already registered"}`
   

* **Sample Call:**

  ```javascript
    axios
    .post('localhost:5000/users/signup',{username:'your-user-id',password:'password'})
    .then(response){
        console.log(response.data.status);
    }
    .catch(error){
        console.log(error);
    }
  ```
  
  
  
  **Login**
----
 

* **URL**

  /users/login

* **Method:**

  `POST`
  
*  **URL Params**
    
    None

* **Data Params**

  * username
  * password

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{success:true,token:"token-id-comes-here",status: "You are successfully logged in!",user : "user-id-comes-here"`
 
* **Error Response:**

  * **Code:** 401 
  * **Content:** Unauthorized
   

* **Sample Call:**

  ```javascript
    axios
    .get('localhost:5000/users/login',{username:'username-here',password:'password-here'})
    .then(response){
        console.log(response.data.status);
    }
    .catch(error){
        console.log(error);
    }
  ```
