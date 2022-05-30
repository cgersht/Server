
const express = require('express')
const app = express()
const sql = require("mssql")

const sqlConfig = {
  server: '.',
  port: 1433,
  database: "PelesoftGeneral",
  //driver: "msnodesqlv8",
  options: {
    trustedConnection: true
  }
};

function getCustFromSQL(name) {
  return sql.connect(sqlConfig).then(pool => {
    //Stored procedure
    return pool.request()
      .input('Name', sql.NVarChar, name)
      // .output('output_parameter', sql.VarChar(50))
      .execute('spGetCustomersQuery')
  })
}






module.exports = { getCustFromSQL };
