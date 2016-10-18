

function makeRequest(url) {
            
                var promise = new Promise( httpPromise );
                
                function httpPromise(resolve, reject) {
                    var httpRequest = new XMLHttpRequest();

                     if ( !httpRequest ) {
                       reject('Giving up :( Cannot create an XMLHTTP instance');
                     }
                     
                     httpRequest.open('GET', url);
                     httpRequest.send();
                     
                     httpRequest.addEventListener('load', httpResolve.bind(httpRequest));
                     httpRequest.addEventListener('error', httpReject.bind(httpRequest));
                     
                     function httpResolve() {                        
                        if ( this.status >= 200 && this.status < 300 ) {
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
              success: function(data) {
                console.log(1, 'success', data);
              },
              error: function(data) {
                console.log(2, 'error', data);
              }
            };
            
            makeRequest('./data/users.json').then(callback.success, callback.error);
            
            
            