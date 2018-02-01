
/***************************************************************************************************/
/* LOG SCHEMA **************************************************************************************/
/***************************************************************************************************/
/** 
 * 
 * @constructor LogSchema
 * @memberof module:localDB
 *
 * @description
 * See source code for mor information
 *
 */
export default
  Log = {
    name: 'Log',
    primaryKey: 'id',
    properties: {
      id: 'string',
      name: 'string',
      error: 'string',
      date: 'date',
    }
  };
/***************************************************************************************************/
/***************************************************************************************************/

