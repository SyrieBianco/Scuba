
export const fetchDives = (data) => (
  $.ajax({
    method: 'GET',
    url: '/api/dives',
    data
  })
);

export const fetchDive = id => (
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

export const deleteDive = dive => (
  $.ajax({
    method: 'DELETE',
    url: `/api/dives/${dive.id}`,
    data: {dive}
  })
);
