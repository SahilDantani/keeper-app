import React from "react";
import Header from "../components/Header";
import Note from "../components/Note";
import Footer from "../components/Footer";
import "/public/styles.css"

function App(){
    return(
        <div>
            <Header />
            <Note />
            <Footer />
        </div>
    );
}

export default App;