import React, {useState} from "react";

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
      <form onSubmit={search}>
        <input type="search" autofocus onChange={handleKeywordChangeSet}/>
      </form>
    </div>
  );
}
