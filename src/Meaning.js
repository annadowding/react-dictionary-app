import React from "react";

export default function Meaning (props) {
    return (
      <div>
        <h2>{props.meaning.partOfSpeech}</h2>
        <p>{props.meaning.definition}</p>
        <p><strong>{props.meaning.example}</strong></p>
        <p><em>{props.meaning.synonyms}</em></p>
      </div>
    );
}