# Jungle Devs - React Challenge #001

## Development Ambient

To see the application locally, use the `npm start` on source of the project. It will open a page on `localhost:3000/` to see the application.

## Deployed app

For the production environment, I deployed the application on Heroku, and it can be seen on `https://jungle-challenge.herokuapp.com/`.

## Points observed during development

* When I was creating the application, I thought to create a custom component for the text sections of the application. I didn't do this beacuse i wanted do the most simple code as possible. I thought, it is a simple application, and using only one component for the text sections would go create an extra complexity unecessary at this moment, with `CSS` and prop drilling.

* At the same thinking of a simple application, i didn't use some effects on `buttons` and `anchors`, I don't know what's the preference of the 'client' in this aspect, so i decided not to do this effects.

* On `anchor's` I put some IDs but it is not functional and on `buttons`, except for the form button, which make the request to API, i didn't put any function for them.

* On email input, I did an email evaluation, it only make the request to the API if the input has a valid email, having the structure email@email.com.

* On the request to the API, I put the response on console of the application.
