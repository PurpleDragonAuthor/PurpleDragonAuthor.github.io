---
layout: page
title: Books
---

{% for book in site.books %}
  <div class="book-entry">
    <img class="book-cover" src="{{ book.cover | relative_url }}" alt="{{ book.title }}">
    <div class="book-details">
      <h3><a href="{{ book.url | relative_url }}">{{ book.title }}</a></h3>
      <p>{{ book.description }}</p>
      {% for link in book.buy_links %}
        <p><a href="{{ link.url }}">{{ link.name }}</a></p>
      {% endfor %}
    </div>
  </div>

  {% unless forloop.last %}
  <hr>
  {% endunless %}
{% endfor %}
