# Mean-Stack-Tutorial
Trying my hands on MEAN Stack. 


Q. What is MEAN Stack?
A: M - MongoDB. Database
   E - ExpressJS. Framework for Node
   A - AngularJS. Frontend framework
   N - NodeJS. Server 

These four parts make up the MEAN stack. (All based on javaScript)
RESTful API: how are we gonna interact the data from our database.


CMD line stuff:

1. npm install express : add express module
2. node server : run the server


Code Stuff:

1. app.use(express.static(__dirname + "/public")); //static - html, javascript and CSS file. Telling the server to look for static files in 'public' directory.

2. <html ng-app> <!--The ng-app directive defines an AngularJS application. -->

3. <input ng-model="test"> <!-- The ng-model directive binds the value of HTML controls (input, select, textarea) to application data. -->

4. <table class="table" ng-control="AppCtrl"> <!--The ngController directive attaches a controller class to the view-->

5. <tr ng-repeat="contact in contactList"></tr> <!-- The ng-repeat directive repeats an HTML element:-->

5. var contactList = [person1, person2, person3];
    $scope.contactList = contactList; //allows to use variable contactlist in our view (index.html file)

    -- $scope allows to access (angularJS) variable into our view (index.html)