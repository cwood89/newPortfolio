import React from "react"

function Home() {
  return (
    <div id="main">
      <article class="post featured">
        <header class="major">
          <h2><a href="#">About Me</a></h2>
          <p>Im a proud father who enjoys working hard to provide for my family.</p>
        </header>
        <a href="#" class="image main"><img src="images/leiaandi.JPG" alt="Leia and I at the park." /></a>
        <ul class="actions special">
          <li><a href="about.html" class="button large">More About Me</a></li>
        </ul>
      </article>

      <section class="posts">
        <article>
          <header>
            <span class="date">April 24, 2017</span>
            <h2><a href="#">Sed magna<br />
              ipsum faucibus</a></h2>
          </header>
          <a href="#" class="image fit"><img src="images/pic02.jpg" alt="" /></a>
          <p>Im a proud father who enjoys working hard to provide for my family.</p>
          <ul class="actions special">
            <li><a href="#" class="button">Full Story</a></li>
          </ul>
        </article>
        <article>
          <header>
            <span class="date">April 22, 2017</span>
            <h2><a href="#">Primis eget<br />
              imperdiet lorem</a></h2>
          </header>
          <a href="#" class="image fit"><img src="images/pic03.jpg" alt="" /></a>
          <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis
						dolor imperdiet dolor mattis sagittis magna etiam.</p>
          <ul class="actions special">
            <li><a href="#" class="button">Full Story</a></li>
          </ul>
        </article>
      </section>
    </div>
  )
}

export default Home;