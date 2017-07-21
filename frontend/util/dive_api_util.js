
export const fetchDives = (data, success, error) => (
  $.ajax({
    method: 'GET',
    url: '/api/dives',
    data
  })
);

export const fetchDive = (id, success, error) => (
  $.ajax({
    method: 'GET',
    url: `/api/dives/${id}`
  })
);

export const createDive = dive => (
  $.ajax({
    method: 'POST',
    url: '/api/dives',
    data: {dive}
  })
);

export const deleteDive = (id, success, error) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/dives/${id}`,
    success,
    error
  })
);
