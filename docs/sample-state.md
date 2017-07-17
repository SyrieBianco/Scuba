{
  currentUser: {
    id: 1,
    username: "Syrie"
  },
  dives: {
    1: {
      id: 1
      user_id: 1
      title: "Sample dive",
      distance: "sample d",
      elevation: "sample e",
      notes: "it was great",
      initialTime: date object,
      endingTime: date object,
      date: date object
      initialAirLevel: integer
      endingAirLevel: integer
      comments -- BONUS
      photos: {
        1: {
          id: 1
          imageTitle: title
          imageURL: url
          notes: "notes"
          comments -- BONUS
        }
      }
    }
  },
  routes: {
    1: {
      id: 1
      user_id: 1,
      title: "Sample Route",
      distance: "sample d",
      elevation: "sample e",
      notes: "it was great",
      avgDuration: time object,
      comments -- BONUS
      featureTags -- BONUS
    }
  }
}
