import React from 'react';

const Test = () => {
  return (
    <div>
      <header>
        <h1>
          Tuka
        </h1>
      </header>

      <main>
        <section class="artists">
          <form class="search-artists">
            <input name="query" type="search" maxlength="100"/>
            <button type="submit">Search Artists</button>
          </form>
          <ul id="artist-results"></ul>
        </section>
      </main>
    </div>
  )
}

export default Test;