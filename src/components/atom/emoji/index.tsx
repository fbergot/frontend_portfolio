type EmojiProps = {
   classEmoji: string;
   codePoint: number;
};

const Emoji = ({ classEmoji, codePoint }: EmojiProps) => {
   return <b className={classEmoji}>{String.fromCodePoint(codePoint)}</b>;
};

export default Emoji;
