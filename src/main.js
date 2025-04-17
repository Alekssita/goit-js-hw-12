
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Image Search App</title>
  <link rel="stylesheet" href="./css/styles.css" />
</head>
<body>
  <div class="container">
    <form class="form">
      <label>
        <input type="text" name="search-text" placeholder="Search images..." required />
      </label>
      <button type="submit">Search</button>
    </form>

    <ul class="gallery"></ul>

    <button class="load-more">Load more</button>
    <span class="loader loader-pulse"></span>
  </div>

  <script type="module" src="./main.js"></script>
</body>
</html>