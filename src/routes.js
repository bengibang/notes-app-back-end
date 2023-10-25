// eslint-disable-next-line no-undef
const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler } = require('./handler');

const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },
    {
      method: 'GET',
      path: '/notes',
      // eslint-disable-next-line no-undef
      handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        // eslint-disable-next-line no-undef
        handler: getNoteByIdHandler,
      },
      {
        method: 'PUT',
        path: '/notes/{id}',
        handler: () => {},
      },
  ];
   
  // eslint-disable-next-line no-undef
  module.exports = routes;