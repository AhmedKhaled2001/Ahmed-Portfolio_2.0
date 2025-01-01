
interface Props {
  items: string[];
  icon: string; // URL or path to the image to display as the icon
}

function CheckList({ items, icon }: Props) {
  return (
    <ul className="checklist">
      {items.map((item, index) => (
        <li key={index} className="checklist-item">
          <img src={icon} alt="Check Icon" className="checklist-icon" />
          <span className="checklist-text">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default CheckList;
