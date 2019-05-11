angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'reproduccion asexual',
    lastText: 'También llamada reproducción vegetativa, consiste en que de un organismo se desprende una sola célula o trozos del cuerpo de un individuo ya desarrollado que, por procesos mitóticos, son capaces de formar un individuo completo genéticamente idéntico a él. Se lleva a cabo con un solo progenitor y sin la intervención',
    face: 'img/ase.jpg'
  }, {
    id: 1,
    name: 'reproducción sexual',
    lastText: 'Forma de reproducción obtenida por la unión de una célula sexual masculina y una femenina o bien por el desarrollo de un huevo fecundado.\'',
    face: 'img/rep.jpg'
  }, {
    id: 2,
    name: 'informacion',
    lastText: 'La gametogénesis es la formación de gametos por medio de la meiosis1​a partir de células germinales.',
    face: 'img/gam.jpg'
  }, {
    id: 3,
    name: 'gametos',
    lastText: 'La célula resultante de la fusión de los gametos reúne los cromosomas de ambos, así que los gametos suelen ser células haploides',
    face: 'img/lk.jpg'
  }, {
    id: 4,
    name: 'reproduccion sexual y asexual ',
    lastText: 'Reproducción asexual: división de una célula u organismo en dos partes iguales',
    face: 'img/repro.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
