# SPA

A super lightweight framework for building Single Page Applications in pure JavaScript. Bootstrap your idea, mvp, prototype, app or website faster than before.

## Why SPA?

A lot of developers dislike using complex, lumpy and slow dev frameworks like React, Vue and Angular. This SPA framework is a pure JavaScript alternative.
We do use the jQuery library for managing events and HTTP requests, alternatively you can easily replace this by native JS code.

One of the main reasons for dev frameworks like React/Vue/Angular is that historically JS was not very modular. A lot of front-end JS code was contained in a single file and could grow very large, a pain in the ass for maintenance, development and debugging.

But in recent years with the latest ES6 standard it is possible to build modular JS code, thanks to the import/export functionality which is now supported by all modern browsers. It's no longer necessary to use any of those complicated frameworks for building well designed apps. Using pure JavaScript is now faster and more efficient than ever before for development.

A final major reason many developers use over-complicated frameworks is for handling dynamic page navigations. This is something novice developers may have little knowledge of, but it's actually very easy.

If you're still wondering why we bother developing Single Page Apps: Speed! It's much better for user experience and easier to extend with advanced features such as selective caching and offline availability.

## Navigation

The core purpose of our SPA framework is dynamic navigation. This means loading content dynamically without refreshing/reloading the website. The demos below illustrate this well.

**Demo:** https://nevolin.be/SPA/

**Screenshot:**

![demo](/git_assets/spa1.png)

This is made possible by using asynchronous HTTP requests. Upon clicking a link, it quickly gets new data from the server and displays it on the page. The root `index.html` page contains a wrapper `<div class="content"></div>` which will contain all of the dynamically loaded content.

The advantage of this is that your SPA can be built fully modular in both HTML and JavaScript. A website usually consists of an HTML header, navigation menu, body and footer. These can again be split up in many parts depending on your case. And JavaScript can be built modularly thanks to the import/export features.

### Hash navigation
This is the default and recommended method for building navigation in an SPA. By clicking a link with `href=#home` that `#home` is then also added to the URL address. A JavaScript event `hashchange` is emitted, which we can use for loading content dynamically.

### URL navigation
An alternative method involves manipulating the URL address instead of the hash. We do this by capturing click events and preventing them from actually navigating, instead we use the `href=/contact` value for determining which content to load dynamically.

This method may be more desired for SEO purposes but it has a major downside. When you actually reload the page you get a 404 error because the path `/SPA/contact` does not actually exist on the server. The sole workaround for such errors is to add rewrite/redirection rules to your HTTP server.

## Support

For enquiries or issues get in touch with me:

Name: Ilya Nevolin

Email: ilja.nevolin@gmail.com
