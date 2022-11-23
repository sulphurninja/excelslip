import React, { useState, useRef } from 'react'
import * as XLSX from 'xlsx';

const ExcelImport = (props:any) => {
    const [fileName, setFileName] = useState(null);
    const [sheetNames, setSheetNames] = useState([]);
    const [file, setFile] = useState(null);
    
    /* Structure of sheet Data
    {
        "Sheet1" :{},
        "Sheet2" :{},
    }
    */
    const [sheetData, setSheetData] = useState({});
    const fileRef = useRef();

    const acceptableFileName = ["xlsx", "xls"];

    const checkFileName =(name:any)=>{
        return acceptableFileName.includes(name.split(".").pop().toLowerCase());
    };

    const readDataFromExcel = (data:any) =>{
        const wb = XLSX.read(data);
        setSheetNames(wb.SheetNames=[]);

        var mySheetData = {};

        // Loop through the Sheets
        for(var i=0; i< wb.SheetNames.length; i++){
            let SheetName = wb.SheetNames[i];

            const worksheet = wb.Sheets[SheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            mySheetData[SheetName] = jsonData;

            console.log(SheetName);
        }

        setSheetData(mySheetData);

        return mySheetData;
        console.log(mySheetData);

        //Assign data from sheets into objects

        console.log(wb);
    };

    const handleFile =async (e:any)=>{
        const myFile = e.target.files[0];
        if(!myFile) return;

        if(!checkFileName(myFile.name)){
            alert('Invalid File Type');
            return;
        }

        //Read XLSX metadata

        const data = await myFile.arrayBuffer();
        const mySheetData = readDataFromExcel(data);
       

        readDataFromExcel(data);

       



        //Assign the Sheets
        setFile(myFile);

        setFileName(myFile.name)
        props.onFileUploaded(mySheetData);
    };

    const handleRemove = ()=>{
        setFile(null);
        setFileName(null);
        props.onFileUploaded(null);

        fileRef.current.value = "";
    };




  return (
    <div>
        {!fileName && <label className='font-wow font-semibold'>Filename: {fileName}</label>}
        {!fileName && <label className='font-wow'>Upload the Excel File</label>}
   
    <div>
        <input type="file" accept="xlsx, xls" multiple={false}  onChange={(e)=> handleFile(e)} ref={fileRef} />
        {fileName && (
            <h3 className=' font-extrabold font-wow cursor-pointer' onClick={handleRemove}>X</h3>
        )}
    </div>
    </div>
  )
}

export default ExcelImport