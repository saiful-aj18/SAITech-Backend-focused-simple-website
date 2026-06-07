<%- include('partials/header') %>
      <h2 class="text-3xl font-bold mb-4">Welcome to Our Home Page</h2>
      <p class="mb-4 text-gray-700">
        This is a very simple website build with Express, EJS and tailwind CSS
      </p>

      <div class="bg-gray-50 p-6 border rounded shadow-sm mt-8">
        <h3 class="text-xl font-semibold mb-2">Some Content Layout</h3>
        <p class="text-gray-600">
          Here is some basic content between the header and footer, as you
          requested. It is kept extremely simple with just essential elements.
        </p>
      </div>

<%- include('partials/footer') %>

<%- include('partials/header') %>
      <h2 class="text-3xl font-bold mb-4">About Us</h2>
      <p class="text-gray-700"><%= content %></p>
    </main>

<%- include('partials/footer') %>

<%- include('partials/header') %>

<h2 class="text-3xl font-bold mb-4">Shop</h2>
<p class="mb-8 text-gray-700">Browse our simple list of products.</p>


<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    <% products.forEach(product => { %>
        <div class="border p-4 rounded bg-gray-50 shadow-sm flex flex-col">
            <img src="<%= product.image %>" class="h-64" alt="">
            <h3 class="text-3xl font-semibold mb-2"><%= product.name %></h3>
            <p class="text-green-600 font-bold text-lg mb-2">$<%= product.price %></p>
            <p class="text-gray-700 mb-6 flex-grow"><%= product.description %></p>
            <button class="bg-blue-600 text-white px–4 py-2 rounded hover:bg-blue-700 transition w-full">
                Add to Cart            
            </button>
        </div>
    <% }) %>

</div>


<%- include('partials/footer') %>

<%- include('partials/header') %>


<h2 class="text-3xl font-bold mb-4">Contact Us</h2>

<% if (typeof success !== 'undefined' && success) { %>
    <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6">
        <p class="font-bold">Success!</p>
        <p>Your message has been sent. Check your terminal console log.</p>
    </div>
<% } %>


<form action="/contact" class="max-w-md bg-gray-50 p-6 rounded border shadow-sm mt-4" method="POST">

    <div class="mb-4">
        <label for="name" class="block font-semibold mb-1 text-gray-700">Name: </label>
        <input type="text" id="name" name="name" required class="w-full border p-2 rounded focus:ring-blue-500 focus:broder-blue-500">
    </div>

    <div class="mb-4">
        <label for="email" class="block font-semibold mb-1 text-gray-700">Email: </label>
        <input type="email" id="email" name="email" required class="w-full border p-2 rounded focus:ring-blue-500 focus:broder-blue-500">
    </div>

    <div class="mb-4">
        <label for="message" class="block font-semibold mb-1 text-gray-700">Message: </label>
        <textarea id="message" name="message" rows="4" required class="w-full border p-2 rounded focus:ring-blue-500 focus:broder-blue-500"></textarea>
    </div>

    <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full mt-2 font-semibold">Submit</button>

</form>

<%- include('partials/footer') %>

  </main>

    <footer class="bg-gray-800 text-white p-4 text-center mt-auto">
        <p>&copy; 2026 My Simple Website. All right reserved</p>
    </footer>
  </body>
</html>

<--body class="bg-gray-100 text-gray-900 flex flex-col min-h-screen">
    <-header-- class="bg-teal-600 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl"><span class="text-cyan-300">SAI</span>Tech</h1>
        <nav class="space-x-4">
          <a href="/" class="hover:underline">Home</a>
          <a href="/about" class="hover:underline">About</a>
          <a href="/shop" class="hover:underline">Shop</a>
          <a href="/contact" class="hover:underline">Contact</a>
        </nav>
      </div>
    </-header-->