import { startTransition, useOptimistic, useState } from 'react';

async function sendLikeToServer(postId) {
  await new Promise((r) => setTimeout(r, 700));

  if (Math.random() < 0.2) throw new Error('Network failed');
  console.log(`Sent a like for the post id ${postId}`);
  return { success: true };
}

export default function LikeButton({ postId, initialLikes = 0 }) {
  const [likes, setLikes] = useState(initialLikes);

  const [optimisticLikes, addOptimisticLike] = useOptimistic(likes, (currentLikes, delta) => currentLikes + delta);

  const handleLike = async () => {
    addOptimisticLike(1);

    try {
      await sendLikeToServer(postId);

      setLikes((prev) => prev + 1);
    } catch (err) {
      console.error('Like failed:', err);

      setLikes((s) => s);
    }
  };

  return (
    <div className="flex">
      <button onClick={handleLike}>❤️ {optimisticLikes}</button>
      <button onClick={() => startTransition(async () => handleLike())}>❤️ {optimisticLikes}</button>
    </div>
  );
}
