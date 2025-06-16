const commentData = [
  {
    name: "Sandeep K",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    replies: [],
  },
  {
    name: "Rajveer Singh",
    text: "Great point, Sandeep K! Here's what I think...",
    replies: [
      {
        name: "Navjot Kaur",
        text: "I agree with Rajveer. Well said!",
        replies: [],
      },
      {
        name: "Simranjit Singh",
        text: "Interesting perspective. But have you considered this?",
        replies: [
          {
            name: "Gurpreet Kaur",
            text: "Yes, Simranjit — that's a valid concern.",
            replies: [
              {
                name: "Harleen Kaur",
                text: "Adding to Gurpreet's point — here's another angle.",
                replies: [
                  {
                    name: "Manpreet Singh",
                    text: "Exactly, Harleen! Completely agree.",
                    replies: [],
                  },
                  {
                    name: "Jagmeet Kaur",
                    text: "True that. Nice observation, Harleen.",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Inderpreet Singh",
            text: "Good point, Simranjit!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Mandeep Kaur",
    text: "Here's my take on this topic.",
    replies: [],
  },
];

export default commentData;
