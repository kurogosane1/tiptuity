# Tiptuity
            
           ![code](https://cloud.githubusercontent.com/assets/20883272/25368066/b0161186-293f-11e7-857e-6a6ace609810.png)
            
Welcome to Tiptuity your cashless way of paying tips.
The future possibilities are coming and Tiptuity is going to take advantage of it. 

Tituity was created as a class project for our graduation but we have decided to take the project further. 
It had been developed by three awesome developmers who learnt coding in a very short amount of time.
The players are:
1. Alex Slayton github link: https://github.com/AlexSlayton,
2. Syed S Khurshid, github link : https://github.com/kurogosane1,
3. Faisal Narsi, github link: https://github.com/FaisalNarsi.

It is only through they're hardwork that we have been able to get this app so far and I would appreciate feedback as well. 

## To get started:
You need to first go to stripe.com and create a account there. They shall provide you the keys you need to begin to payment setup:
```
var keys = {
   testSecretKey : " ",
   testPublishableKey : "",
   liveSecretKey: "",
   livePublishableKey: " "
}

module.exports = keys;
```
In order for you to start using stripe you need to use the testSecret key to test on your own server.

After getting the test keys just do the code below:
```
npm install
```
it shall install all the dependencies for you.

You also need to create your own database in MySQL and whatever name and password you have created place the required information in the area below inside connection.js :
```
var connectionInfo = {
  host: "localhost",
  user: "root",
  password: " Your own password",
  database: "Your own database"
};
```
Advance users can set their own host and user.

Thats it. Your all ready started. 

Here is the webpage link to Tiptuity
Its a portal to the back end side 
tiptuity.herokuapp.com

the user name password for the sake of this demo is the following:
```
email: 123@me.com
password: 123
```
## Note this is a protype! 
### Future edits planned:
1. Right now the app requires storing credit card information. We don't want to hold any liability with the users data and therefore will change the code to avoid storing any data directly on our server. 

2. Create a user confirmation on when the user pays something, a confirmation and a option to change the amount to tip would change. 

3. Change the back end completely. Right now its not Finance friendly and will revamp the back end completely. This one will the longest and more finance knowledge would be required. 

4. Another goal is to learn swift. Swift is awesome to use and implementing it with apple pay is a feature I hope would change the world. Samung pay, google pay all would be a awesome feature to implement. 

5. Have a employee database where pictures and user information can be pulled so that many different pages don't have to be created for each employee. The user's information would be stored in a database. 


longterm goals we hope to utilize and if people are willing to work together then we can utilize this app anywhere. 















