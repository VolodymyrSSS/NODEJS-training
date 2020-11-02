import { addNewContact,
        getContacts,
        getContactWithID,
        updateContact,
        deleteContact
      } from '../controllers/crmController';

const routes = (app) => {
  app.route('/contact')
    .get((req, res, next) => {
      // middleware
      console.log(`Request from ${req.originalUrl}`)
      console.log(`Request type ${req.method}`)
      next()
    }, getContacts)

    // .post((req, res) => res.send('POST request successful!'))
    .post(addNewContact); // post endpoint

  app.route('/contact/:contactID')
    // get a specific contact
    .get(getContactWithID)
    // updating a specific contact
    .put(updateContact)
    // deleting a specific contact
    .delete(deleteContact);
  
}

export default routes;