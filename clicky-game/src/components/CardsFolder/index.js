import React from "react";
import "./style.css";

// Create a function with all the cards for the user to see
function CardsFolder(props) {
    let cardsArray = [
        // Place 12 cards inside array for user to interact with
        <img key="1" id="1" src={require(`../../assets/Annie.jpg`)} onClick={props.clickImage} className="img-thumbnail" alt="Annie"/>,

        <img key="2" id="2" src={require(`../../assets/Braum.jpg`)} onClick={props.clickImage} className="img-thumbnail" alt="Braum"/>,

        <img key="3" id="3" src={require(`../../assets/Draven.jpg`)} onClick={props.clickImage} className="img-thumbnail" alt="Draven"/>,

        <img key="4" id="4" src={require(`../../assets/Fizz.jpg`)} onClick={props.clickImage} className="img-thumbnail" alt="Fizz"/>,

        <img key="5" id="5" src={require(`../../assets/Karthus.jpg`)} onClick={props.clickImage} className="img-thumbnail" alt="Karthus"/>,

        <img key="6" id="6" src={require(`../../assets/Leona.jpg`)} onClick={props.clickImage} className="img-thumbnail" alt="Leona"/>,

        <img key="7" id="7" src={require(`../../assets/Lucian.jpg`)} onClick={props.clickImage} className="img-thumbnail" alt="Lucian"/>,

        <img key="8" id="8" src={require(`../../assets/Malphite.jpg`)} onClick={props.clickImage} className="img-thumbnail" alt="Malphite"/>,

        <img key="9" id="9" src={require(`../../assets/Teemo.jpg`)} onClick={props.clickImage} className="img-thumbnail" alt="Teemo"/>,

        <img key="10" id="10" src={require(`../../assets/Varus.jpg`)} onClick={props.clickImage} className="img-thumbnail" alt="Varus"/>,

        <img key="11" id="11" src={require(`../../assets/Vi.jpg`)} onClick={props.clickImage} className="img-thumbnail" alt="Vi"/>,
        
        <img key="12" id="12" src={require(`../../assets/Volibear.jpg`)} onClick={props.clickImage} className="img-thumbnail" alt="Volibear"/>,
                    ];


// Create function to shuffle the cards so they don't stay in the same place
function shuffle(champs) {
    let counter= champs.length;
    let index;
    let temp;
        while(counter>0) {
            index= Math.floor(Math.random() * counter);
            temp = champs[counter];
            champs[counter] = champs[index];
            champs[index] = temp;
            counter--;
        };
    return champs;
};

let champions = shuffle(cardsArray);

    return(
        <main className="champions">

        <div className="myContainer">

            {champions}

        </div>

        </main>
    );
    };

export default CardsFolder;