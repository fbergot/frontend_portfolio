const Emoji = ({ classEmoji, codePoint }) => {
   return <span className={classEmoji}>{String.fromCodePoint(codePoint)}</span>;
};

export default Emoji;
