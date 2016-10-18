

function makeRequest(url) {

    var promise = new Promise(httpPromise);

    function httpPromise(resolve, reject) {
        var httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            reject('Giving up :( Cannot create an XMLHTTP instance');
        }

        httpRequest.open('GET', url);
        httpRequest.send();

        httpRequest.addEventListener('load', httpResolve.bind(httpRequest));
        httpRequest.addEventListener('error', httpReject.bind(httpRequest));

        function httpResolve() {
            if (this.status >= 200 && this.status < 300) {
                // Performs the function "resolve" when this.status is equal to 2xx
                resolve(JSON.parse(this.response));
            } else {
                // Performs the function "reject" when this.status is different than 2xx
                reject(this.statusText);
            }
        }

        function httpReject() {
            reject(this.statusText);
        }

    }


    // Return the promise
    return promise;
}

//Reuse this for Lab 2
var callback = {
    success: function (data) {
        console.log(1, 'success', data);
        
        console.log(data.users[0]['_id']);
        
        displayList('ul.users', data.users);
        
    },
    successfull: function (data){
        console.log(data);
    },
    error: function (data) {
        console.log(2, 'error', data);
    }
};

function displayList(selector, list) {
    var dom = document.querySelector(selector);
    /* this document fragment is just for performance 
     * We create all the elements to add to the page
     * add them to the fragment, then add the fragment to
     * the page.  Much faster than just adding all the
     * elements to the page one at a time
     * 
     */
    var docfrag = document.createDocumentFragment(); // You can use this for Lab 2. 

    /* JavaScript now has built in foreach loops for arrays */
    list.forEach(function(value) {
        /* you can use the createElement tag to create any HTML element you want */
        var li = document.createElement("li");            
        li.textContent = value.name.first + ' ' + value.name.last;
        /* you can set any attribute using the function below for any Created element */
        li.setAttribute('class', 'link');
        /*you can even attach events to the element */
        li.addEventListener('click', getuser.bind(null,  value._id));
        docfrag.appendChild(li);
    });

    /* after the fragment is completed we can add it to the page */
    dom.appendChild(docfrag);
}
//Second Function to get the user information (Company, email, phone, etc)
function getuser(ID){
    makeRequest('./data/' + ID + '.json').then(callback.successfull, callback.error);
    
}
// Step 1: Get the date, Step 2: Make the call to the data, Step 3: Display the date
makeRequest('./data/users.json').then(callback.success, callback.error);
    //This makeRequest will show the results from the function to display the users information


            