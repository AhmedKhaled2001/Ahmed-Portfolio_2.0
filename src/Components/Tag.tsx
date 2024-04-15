

interface Props
{
  tagName: String;
}

function Tag({tagName}: Props) {
  return (
    <div className="tag-background">
      <div>
        <p className="text-tag">{tagName}</p>
      </div>
    </div>
  );
}
export default Tag;
