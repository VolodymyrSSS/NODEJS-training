import { addNewContact, getContacts, getContactWithID, updateContact, deleteContact } from '../controllers/crmController';

// to create a function to check the logged user before further proceed
import { login, register, loginRequired } from '../controllers/userControllers';


const routes = (app) => {
  app.route('/contact')
    .get((req, res, next) => {
      // middleware
      console.log(`Request from ${req.originalUrl}`)
      console.log(`Request type ${req.method}`)
      next()
    }, loginRequired, getContacts)

    // .post((req, res) => res.send('POST request successful!'))
    .post(loginRequired, addNewContact); // post endpoint

  app.route('/contact/:contactID')
    // get a specific contact
    .get(loginRequired,getContactWithID)
    // updating a specific contact
    .put(loginRequired, updateContact)
    // deleting a specific contact
    .delete(loginRequired, deleteContact);
  
  // user needs to register and than to login

  // registration route
  app.route('/auth/register')
    .post(register);

  // login route
  app.route('/login')
    .post(login);
}

export default routes;