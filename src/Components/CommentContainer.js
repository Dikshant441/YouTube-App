import React from "react";

const commentsData = [
  {
    name: "Dikshant Singh",
    text: "this comment just for structure!!",
    replies: [],
  },
  {
    name: "Dikshant Singh",
    text: "this comment just for structure!! ",
    replies: [
      {
        name: "Dikshant Singh",
        text: "this comment just for structure!! ",
        replies: [],
      },
      {
        name: "Dikshant Singh",
        text: "this comment just for structure!! ",
        replies: [
          {
            name: "Dikshant Singh",
            text: "this comment just for structure!! ",
            replies: [
              {
                name: "Dikshant Singh",
                text: "this comment just for structure!! ",
                replies: [
                  {
                    name: "Dikshant Singh",
                    text: "this comment just for structure!! ",
                    replies: [
                      {
                        name: "Dikshant Singh",
                        text: "this comment just for structure!! ",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Dikshant Singh",
    text: "this comment just for structure!! ",
    replies: [],
  },
  {
    name: "Dikshant Singh",
    text: "this comment just for structure!! ",
    replies: [],
  },
  {
    name: "Dikshant Singh",
    text: "this comment just for structure!! ",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2 w-[1000px]">
      <h1 className="text-2xl font-bold">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
