import styles from "./Search.module.scss";
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";

export const Search = () => {
  return (
    <div className={styles.root}>
      <FiSearch className={styles.icon} />
       <MdClose className={styles.clear}
       // onClick={() => searchValue("")} 
       />
       {/* {searchValue && ( */}
       <input 
      // value={searchValur} 
      // onChange={e=> setSearchValue(e.target.value)} 
      type="text" placeholder="Search..." className={styles.input} /> 
      {/* )}  */}
    </div>
  );
};
