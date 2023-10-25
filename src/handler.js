// eslint-disable-next-line no-undef
const { nanoid } = require('nanoid');
// eslint-disable-next-line no-undef
const notes = require('./notes');

// eslint-disable-next-line no-unused-vars
const addNoteHandler = (request, h) => {
    // eslint-disable-next-line no-unused-vars
    const { title, tags, body } = request.payload;
    // eslint-disable-next-line no-unused-vars, no-undef
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    // eslint-disable-next-line no-unused-vars
    const updatedAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
      };
      // eslint-disable-next-line no-undef
      notes.push(newNote);
      // eslint-disable-next-line no-unused-vars
      const isSuccess = notes.filter((note) => note.id === id).length > 0;
      if (isSuccess) {
        const response = h.response({
          status: 'success',
          message: 'Catatan berhasil ditambahkan',
          data: {
            noteId: id,
          },
        });
        response.code(201);
        return response;
      }
      const response = h.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
      });
      response.code(500);
      return response;
    
};

// eslint-disable-next-line no-unused-vars
const getNoteByIdHandler = (request, h) => {
    const { id } = request.params;

    const note = notes.filter((n) => n.id === id)[0];

    if (note !== undefined) {
        return {
          status: 'success',
          data: {
            note,
          },
        };
      }
      const response = h.response({
        status: 'fail',
        message: 'Catatan tidak ditemukan',
      });
      response.code(404);
      return response;
};

// eslint-disable-next-line no-unused-vars
const getAllNotesHandler = () => ({
    status: 'success',
    data: {
      notes,
    },
  });
// eslint-disable-next-line no-undef
module.exports = { addNoteHandler, getAllNotesHandler, getNoteByIdHandler };