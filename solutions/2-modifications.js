import _ from 'lodash';

// BEGIN
const normalize = (lesson) => {
  if (lesson.name) {
    const first = lesson.name[0].toUpperCase();
    const rest = lesson.name.slice(1).toLowerCase();
    lesson.name = first + rest;
  }
  if (lesson.description) {
    lesson.description = lesson.description.toLowerCase();
  }
};

export default normalize;
// END