import React, {useState} from "react";
import "./Dictionary.css"

export default function Dictionary() {

  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeywordChangeSet(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="searchbar">
        <input type="search" autofocus onChange={handleKeywordChangeSet}/>
      </form>
    </div>
  );
}
