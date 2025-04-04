import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../mutations/addComment";
import { Comment } from "../types/comment.type";
import { GET_CHARACTERS_BY_FILTER } from "../queries/getCharactersByFilter";

type CharacterCommentsProps = {
  characterId: number;
  comments: Comment[];
};

export const CharacterComments: React.FC<CharacterCommentsProps> = ({ characterId, comments }) => {
  const [comment, setComment] = useState("");

  const [addComment, { loading }] = useMutation(ADD_COMMENT, {
    onCompleted: () => {
      setComment("");
    },
    refetchQueries: [{ query: GET_CHARACTERS_BY_FILTER }],
  });

  const handleAddComment = async () => {
    if (!comment.trim()) return;
    await addComment({ variables: { characterId, text: comment } });
  };

  return (
    <div className="mt-6 pb-20">
      <h3 className="font-bold text-lg mb-2">Comments</h3>
      <textarea
        className="w-full p-2 border rounded"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
      />
      <button
        className="mt-2 bg-primary-100 text-primary-600 px-4 py-2 rounded disabled:opacity-50 hover:text-primary-700 hover:cursor-pointer"
        onClick={handleAddComment}
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Comment"}
      </button>

      <ul className="mt-4 space-y-2">
        {comments.map((comment) => (
          <li key={comment.id} className="p-3 bg-gray-100 rounded-lg border border-gray-300">
            <p className="text-gray-800">{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
