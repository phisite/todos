import { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";
import { TodoContextType } from "../@types/@types.todo";
import classes from "./Filter.module.css";

export const Filter = () => {
  const { filter, setFilter } = useContext(TodoContext) as TodoContextType;
  const [dropdownFlag, toggleDropdownFlag] = useState(false);

  const handleDropdownClick = (value: typeof filter) => {
    setFilter(value);
    toggleDropdownFlag(false);
  };

  return (
    // <select
    //   defaultValue="all"
    //   onChange={(e) => setFilter(e.target.value as typeof filter)}
    // >
    //   <option value="all">All</option>
    //   <option value="done">Done</option>
    //   <option value="undone">Undone</option>
    // </select>
    <div className={classes.dropdownContainer}>
      <button
        className={classes.dropdownToggler}
        onClick={() => toggleDropdownFlag(!dropdownFlag)}
      >
        <span className={classes.text}>
          {(filter.charAt(0).toUpperCase() + filter.slice(1)) as string}
        </span>
        <span className={classes.caret}></span>
      </button>
      <div className={dropdownFlag ? classes.dropdown : classes.hidden}>
        <ul>
          <li>
            <button
              className={classes.dropdownSelector}
              onClick={() => handleDropdownClick("all")}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={classes.dropdownSelector}
              onClick={() => handleDropdownClick("done")}
            >
              Done
            </button>
          </li>
          <li>
            <button
              className={classes.dropdownSelector}
              onClick={() => handleDropdownClick("undone")}
            >
              Undone
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
