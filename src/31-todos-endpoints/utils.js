const prepareFieldsToSQLQuery = (fields) =>
  Object.entries(fields)
    .map(([key, value]) => `${key}='${value}'`)
    .join(', ');

export default prepareFieldsToSQLQuery;
