// default method:
$(window).on('load hashchange', function(e) {
  try {
    SPARouter_hash(window.location.hash);
  } catch (err) {
    console.error(err)
    SPANav('./views/500.html')
  }
});

// less recommended technique:
$(document).on('click', '.nav a', function(e) {
  e.preventDefault();
  try {
    const rootDir = '/SPA'
    SPARouter_url(e.target.pathname);
    history.pushState('', '', rootDir + e.target.pathname)
  } catch (err) {
    console.error(err)
    SPANav('./views/500.html')
  }
})

// default method:
function SPARouter_hash(page) {
  switch(page) {
    case '':
    case '#':
    case '#home':
      SPANav('./views/home.html');
      break;
    case '#about':
      SPANav('./views/about.html');
      break;
    case '#contact':
      SPANav('./views/contact.html');
      break;
    default:
      SPANav('./views/404.html');
  }
}

// less recommended technique:
function SPARouter_url(page) {
  switch(page) {
    case '':
    case '/':
    case '/home':
      SPANav('./views/home.html');
      break;
    case '/about':
      SPANav('./views/about.html');
      break;
    case '/contact':
      SPANav('./views/contact.html');
      break;
    default:
      SPANav('./views/404.html');
  }
}

function SPANav(to) {
   $.get(to, function(pageContent) {
      $('.content').html(pageContent);
    }).fail(failedGet)
}

function failedGet() {
  const refresh = '<a class="refreshpage" href=".">refresh page</a>'
  $('.content').html('Oops, something went wrong, make sure you are online.<br>' + refresh);
}
