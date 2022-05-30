
const express = require('express');
const router = express.Router();
const { getCustFromSQL } = require('./dbService');


router.get('/getCustomers', function (req, res, next) {
    try {
        //     ---hardCoded
        res.send(
            [
                { CustomerID: 1111 ,
                    CustomerName: "Eaty" ,
                    DBName: "pelesoft" ,
                    remarks: "no" ,
                    Modules: "String" ,
                    VersionID: 0 ,
                    LastBackupPath: "01/05/2022" ,
                    SiteName: "String",
                    UppgradeStatus: 0 ,
                    IsBackup: false ,
                    PermittedIps: "String" ,
                    PrevVersitionId: 1245 ,
                    DependByDepartments: false },
                    { CustomerID: 2222 ,
                    CustomerName: "Yuti" ,
                    DBName: "pelesoft" ,
                    remarks: "no" ,
                    Modules: "String" ,
                    VersionID: 0 ,
                    LastBackupPath: "01/05/2022" ,
                    SiteName: "String",
                    UppgradeStatus: 0 ,
                    IsBackup: false ,
                    PermittedIps: "String" ,
                    PrevVersitionId: 1245 ,
                    DependByDepartments: false },
            ]
        )

        //      ---SQL
        // getCustFromSQL(name).then(({ recordset }) => {
        //     res.send(recordset)
        // }).catch(err => {
        //     console.log(err);
        // })
        
    }
    catch (err) {
        res.send([]);
    }
})

module.exports = router
