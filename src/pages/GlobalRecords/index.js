// Globals
import React from "react";

import {fetchRecords} from "../../services/records/index"
import { useDispatch, useSelector } from "react-redux";

// Components
import { Record } from "components/Record";
import { Error } from "components/Error";

// Component
const GlobalRecords = () => {

  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const {records: {myData, failed, loading}} = store
  const load = loading && "Loading..." 

  React.useEffect( () => {
    dispatch(fetchRecords())
  },[])
 
  return (
    <div className="aura-page aura-global_records">
      <h1>Top Records of 2020</h1>

      <div className="aura-page-content">
        {
          load? load : !failed? myData.map((record) => {
          return <Record key={record.id} data={record} />;
        }) 
        : <Error myData={store.records}/> }
      </div>
    </div>
  );
} 

export { GlobalRecords };
