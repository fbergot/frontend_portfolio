type EmojiProps = {
   classEmoji: string;
   codePoint: number;
};

const Emoji = ({ classEmoji, codePoint }: EmojiProps) => {
   return <span className={classEmoji}>{String.fromCodePoint(codePoint)}</span>;
};

export default Emoji;
