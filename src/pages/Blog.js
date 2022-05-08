import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
const Blog = () => {
  return (
    <>
      <Header />
      <div className=" mt-10 container mx-auto px-5">
        <ul>
          <li>
            <h2 className="text-2xl text-green_soft">
              Difference between javascript and nodejs ?
            </h2>
            <p className="py-6">
              <span className="block font-bold">node...</span>
              It is Javascript runtimee environment that lets Javascript to be
              Run on the server side. this is cross platform, and it thus allows
              the Javascript code to run outside any browser easily. There are
              various modules in node js , and it is mainly utilised in the
              process of web development.
              <span className="block font-bold">js</span>
              It is a scripting language, but Javascript is basically the ECMA
              scripts updated version. Javascript is mainly utilised in making
              the HTML web pages more dynamic and interactive. It is a high
              level language, and it makes use of the Oops concept. Yet this is
              based primarily on the concept prototype inheritance.
            </p>
          </li>
          <li>
            <h2 className="text-2xl text-green_soft">
              When should you use nodejs and when should you use mongodb ?
            </h2>
            <p className="py-6">
              <span className="block font-bold">
                When should we use Nodejs?
              </span>{" "}
              Any project needs a programming environment and a runtime library
              that offers basic programming tools/support and can compile and/or
              interpret our code. Nodejs is such as tool for the Javascript
              programming language. There are other similar tools for other
              languages such as Python, Java, PHP, C#, etc. So, if we want to
              write some kind of stand-alone program or server in Javascript,
              then we can use nodejs for it.
              <span className="block font-bold">
                When should we use MongoDB?
              </span>{" "}
              If our application needs the ability to persistently store data in
              a way that we can efficiently query or update it later, then we
              would typically use some form of database. There are dozens of
              popular databases. MongoDB is one such database. MariaDB, MySql,
              CouchDB, DynamoDB, Postgres are examples of other databases.
              Different databases have different strengths and different ways of
              using them so it's a whole different question to choose the
              right/best database for what we're doing.
            </p>
          </li>
          <li>
            <h2 className="text-2xl text-green_soft">
              Differences between sql and nosql databases. ?
            </h2>
            <p className="py-6">
              <span className="block font-bold">SQL</span>
              1/ SQL databases are a type of system software that supports
              management, analysis, capturing and querying the structured data
              in a relational format.
              <br />
              2/ A language used to communicate with databases for storage,
              deletion, updation, insertion and retrieval of data.
              <br />
              3/ SQL was developed in the year 1970 for flat file storage
              problems.
              <br />
              6/ SQL databases support Structured Query Languages.
              <span className="block font-bold">NoSQL</span>
              1/ NoSQL databases are a type of software that allows to maintain
              and retrieve structured, unstructured, polymorphic data for
              different purposes.
              <br />
              2/ A software to retrieve, store and manage scalability of
              databases.
              <br />
              3/ NoSQL was developed in 2000 as an enhanced version for SQL
              databases for unstructured and semi-structured data.
              <br />
              4/ NonSQL does not have any declarative query language.
              <br />
              5/ Supports document oriented, graph databases, key value
              pair-based.
              <br />
              6/ Horizontally Scalable , Changing small nodes with larger nodes
              to increase the capacity of the existing hardware and software.
            </p>
          </li>
          <li>
            <h2 className="text-2xl text-green_soft">
              What is the purpose of jwt and how does it work ?
            </h2>
            <p className="py-6">
              JSON Web Token is an open industry standard used to share
              information between two entities, usually a client (like your
              app’s frontend) and a server (your app’s backend). They contain
              JSON objects which have the information that needs to be shared.
              Each JWT is also signed using cryptography (hashing) to ensure
              that the JSON contents (also known as JWT claims) cannot be
              altered by the client or a malicious party. You may be wondering
              why the auth server can’t just send the information as a plain
              JSON object and why it needs to convert it into a “token”.
            </p>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
