import "./data-select.scss";
import { ChangeEvent } from "react";

interface Item {
  [key: string]: string | number;
}

interface Props {
  id?: string;
  name?: string;
  label?: string;
  keyValue: string;
  items: unknown[];
  keyLabel: string;
  allItemsLabel?: string;
  onSelect(value: string | number): void;
}

function renderItems(items: Item[], keyValue: string, keyLabel: string) {
  return items.map((item, index) => (
    <>
      <option key={index} value={item[keyValue]}>
        {item[keyLabel]}
      </option>
    </>
  ));
}

export function DataSelect({ items, label, id, name, keyValue, keyLabel, allItemsLabel, onSelect }: Props) {
  const onSelectHandler = (event: ChangeEvent) => onSelect((event.target as HTMLSelectElement).value);

  return (
    <div className="data-select">
      {label ? <label className="data-select__label">{label}</label> : null}

      <select onChange={onSelectHandler} className="data-select__field" name={name} id={id}>
        <option key="-1" value="all">
          {allItemsLabel || "All items"}
        </option>
        {renderItems(items as Item[], keyValue, keyLabel)}
      </select>
    </div>
  );
}
