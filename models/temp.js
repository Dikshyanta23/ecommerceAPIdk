[
  {
    $match: {
      product: new ObjectId("665bdd0fb6560f4515ccb727"),
    },
  },
  {
    $group: {
      _id: null,
      averageRating: {
        $avg: "$rating",
      },
      numOfReviews: {
        $sum: 1,
      },
    },
  },
];
