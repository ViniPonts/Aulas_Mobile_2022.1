import { useEffect } from 'react';
import SQLite from 'react-native-sqlite-storage';
import React, { useState, useEffect } from 'react';

const db = SQLite.openDatabase(
    {
    name: 'MainDB',
    location: 'default',
    },
    () => { } ,
    error => {console.log(error) }
);

const sqlCreate= 'CREAT TABLE IF NOT EXISTS USER (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR (200))';

const sqlInsert = 'INSERT INTO USER (name)VALUES(?)';



useEffect(()=> {
    createTable();
})

const createTable= ()=> {
    db.transaction((tx) => {
        tx.executeSql(
            "CREATE TEBLE IF NOT EXISTS"
            +"Users"
            +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT);"
        )
    })
}