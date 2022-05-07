import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-3'>
            <h1 className='text-center text-primary fw-bold'>Blogs</h1>
            <div class="card text-left mb-3">
                <div class="card-body">
                    <h5 class="card-title">Difference between javascript and nodejs</h5>
                    <p class="card-text ">The difference between javascript and nodejs is JavaScript is a programming language beside nodejs is a runtime environment.JavaScript is mainly used for frontend development .But with the help of nodejs it can be used in server side development.JavaScript can run on server But using nodejs we can run it outside of the browser. JavaScript can run in any browser engine and nodejs parses and run by inside using of v8 engine. </p>
                </div>
            </div>
            <div class="card text-left mb-3">
                <div class="card-body">
                    <h5 class="card-title">When should you use nodejs and when should you use mongodb?</h5>
                    <p class="card-text ">The purpose of using nodejs is that every projects needs a programming language or environment.Nodejs is a javascript engine that fullfil thats need.by using this we can build servers and also can respond to web request. <br />
                        And MongoDB it is a database engine.We use it because if we want to store data efficiently. And also can update ,delete, add data at any time later.

                    </p>
                </div>
            </div>
            <div class="card text-left mb-3">
                <div class="card-body">
                    <h5 class="card-title">Differences between sql and nosql databases.</h5>
                    <p class="card-text ">The difference between sql and nosql is that Sql is storage system is using table and fixed row column system.And no sql database symstem is using json like object and key value pair symtem.Sql database have fixed schemas but nosql have dynamic schemas.Sql Is vertically scalable and nosql is horizontally scalable.Some examples SQL is MySQL,Oracle,PostgreSQL and examples of nosql is MONGODB,COUCHDB etc</p>
                </div>
            </div>
            <div class="card text-left mb-3">
                <div class="card-body">
                    <h5 class="card-title">What is the purpose of jwt and how does it work?</h5>
                    <p class="card-text ">JWT full meaning is JSON web token.The purpose of this to share information securely  between client and server.The way it works , When user wants to access a secured  resource, then send the JWT.Then the server's secured routes check for a valid JWT in the Authorization header, and if its available user are allowed to access the resources. </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;