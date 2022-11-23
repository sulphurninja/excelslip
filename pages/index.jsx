
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ExcelImport from '../components/ExcelImport'
import { useState, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'




export default function Home() {

  const [sheetData, setSheetData] = useState(null);
  const [sheet, setSheet] = useState(null);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'vote',
    onAfterPrint: () => alert('Success!')
  })
  const handleFileUploaded = (e) => {
    console.log("File Uploaded", e);
    if (e) {
      setSheet(Object.keys(e)[0])
    };
    setSheetData(e);
  };
  console.log(sheetData, 'sheetdata is here');


  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Voter Slip</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />   
      </Head>
      <Header />
      <div className="flex justify-between items-center bg-slate-100 border-y border-black py-2 lg:py">
        <div className='px-2 space-y-5'>
          <ExcelImport onFileUploaded={(e) => handleFileUploaded(e)} />
        </div>
        <div className='h-[35px] w-[80px] mr-auto ml-auto text-center cursor-pointer bg-black  rounded-lg'> 
        <button className='text-lg font-bold text-green-200' onClick={handlePrint}>Print !</button>
        </div>


      </div>

      {/* POSTS */}

      <section className='my-auto' >
        {sheetData &&
          <main ref={componentRef} className='ml-[20px]  break-after-page mt-[30px] grid grid-cols-2 gap-10 mx-auto '>
            {sheetData[sheet].map(({
              SECTION_NO, SLNOINPART, FM_NAME_V1, RLN_FM_NM_V1, PART_NO, LASTNAME_EN, GENDER, AGE, DOB, MOBILE_NO, PSBUILDING_NAME_EN, C_HOUSE_NO_V1, EPIC_NO }) => {
              return (
          /* BOX*/ <div className='border-black abs  ml-auto mr-auto border-2 w-[278px] left-[31px] top-[32px] h-[190px]'>
                  <div className=' left-[31px] text-center top-[32px] w-[278px] h-[20px]'> {/**nigam chunav */}
                    <h1 className=' text-xs ml-auto mr-auto  font-bold'> दिल्ली नगर निगम चुनाव-2023 </h1>
                  </div>
                  <div className=' border-black border-2  left-[37px] top-[50px] border-l-0 w-[276px] h-[25px]'>  {/**ward dabba */}

                    <div className=' w-[198px] h-[23px]' >

                      <h1 className='text-xs font-bold'>वार्ड संख्या: {SECTION_NO}-नरेला</h1></div> {/**end of ward sankhya */}

                    <div className='w-[80px] border-r-0 border-b-0   top-[232px]  border-2 border-black h-[23px] ml-[196px] mt-[-25px]    '> {/**PS no */}
                      <h3 className=' font-semibold'>PS NO 1</h3>

                    </div> {/**end PS NO */}

                  </div>{/**end ward dabba */}


                  {/**------------------------------------------------------------------------- */}
                  <div className=' w-[276px] h-[35px] border-2 absolute border-t-0 border-l-0 border-r-0 border-black '>  {/**matdan kendrA BIG BOX */}
                    <div className='w-[41px] border-2  border-t-0 border-l-0 border-black h-[35px] left-[31px]   top-[75px] '> {/**matdan kendrA DABBA */}
                      <h1 className='text-[11px]'>मतदान केंद्र</h1>
                    </div>  {/**END of matdan kendrA DABBA */}
                    <div className='  break-normal  w-[237px] h-[35px] left-[45px] top-[0px] '> {/**BOX OF TEXT of matdan kendra dabba */}
                      <h1 className=' mt-[-34px] ml-[45px] text-[12px]'>{PSBUILDING_NAME_EN}</h1>{/**TEXT of matdan kendra dabba */}
                    </div> {/**END of BOX OF TEXT of matdan kendra dabba */}
                  </div> {/**END of matdan kendrA BIG BOX */}

                  <div className='w-[278px] h-[97px] absolute'> {/**Credential BOX */}
                    <div className='w-[52px] left-[3px] h-[17px] absolute top-[34px]'> {/**kram no dabba*/}
                      <h1 className='text-xs'>क्रम सं. {SLNOINPART}</h1>
                    </div> {/**end of kram no dabba */}
                    <div className='w-[56px] h-[17px] top-[35px] left-[92px] absolute'> {/*Bhag dabba */}
                      {/* bhaag so. */}
                      <h1 className='text-xs'>भाग सं. {PART_NO}</h1>
                    </div>{/* end of Bhag dabba */}

                    <div className='w-[73px] h-[17px] top-[38px] left-[182px] absolute'> {/*roman dabba */}
                      <h1 className='text-xs'>{EPIC_NO}</h1>{/* XNXBS */}
                    </div>{/* end of roman dabba */}

                    <div className='w-[28px] h-[17px] top-[55px] left-[3px] absolute'> {/*naam dabba */}
                      <h1 className='text-[11px]'>नाम</h1>
                    </div>{/* end of naam dabba */}

                    <div className='break-normal w-[200px] h-[23px] top-[52px] left-[45px] absolute'> {/*naaav dabba */}
                      <h1 className='text-sm font-semibold'>{FM_NAME_V1}</h1>
                    </div>{/* end of naaav dabba */}

                    <div className='w-[28px] h-[17px] top-[77px] left-[3px] absolute'> {/*pati dabba */}
                      <h1 className='text-[11px]'>पति</h1>
                    </div>{/* end of pati dabba */}

                    <div className='w-[81px] h-[23px] top-[78px] left-[45px] absolute'> {/*pati name dabba */}
                      <h1 className='font-medium text-[11px]'>{RLN_FM_NM_V1}</h1>
                    </div>{/* end of pati name dabba */}

                    <div className='w-[28px] h-[17px] top-[99px] left-[3px]  absolute'> {/*makaan dabba */}
                      <h1 className='text-[11px]'>मकान</h1>
                    </div>{/* end of makaan dabba */}

                    <div className='w-[152px] h-[16px] top-[100px] left-[45px] absolute'> {/*makaan name dabba */}
                      <h1 className='text-[10px]'>{C_HOUSE_NO_V1}</h1>
                    </div>{/* end of makaan name dabba */}

                    <div className='w-[40px] h-[17px] left-[200px] top-[92px] absolute'> {/*mahila dabba */}
                      <h1 className='text-[12px] '> {GENDER}  </h1>
                    </div>{/* end of mahila dabba */}

                    <div className='-[40px] h-[17px] left-[220px] top-[92px]  absolute'> {/*mahila no dabba */}
                      <h1 className='text-[12px] '> {AGE}  </h1>
                    </div>{/* end of mahila no dabba */}

                    <div className='w-[19px] top-[112px] left-[3px] h-[17px] absolute'> {/*so.  dabba */}
                      <h1 className='text-[9px]'>सां.</h1>
                    </div>{/* end of so. dabba */}

                    <div className='w-[276px] text-center mr-auto ml-auto border-l-0 border border-black top-[162px] h-[15px] mt-[125px]'> {/*footer  dabba */}
                      <h1 className='text-[9px] '>मतदान दिनांक 04.12.2023 (रविवार) सुबह 8.00 से सायां 5.30 बजे तक</h1>
                    </div>{/* footer dabba */}







                  </div> {/**End of Credential BOX */}







                  {/* {sheetData[sheet].map(row=> <tr className='border-[10px]' key={row}><td>{c}</td>)}</tr>)} */}

                </div> /**Box END */
              )
            })}

          </main>
        }

      </section>

    </div>

  );
}

