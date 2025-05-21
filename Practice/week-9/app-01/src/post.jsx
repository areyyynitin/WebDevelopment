
const style ={width:200 , backgroundColor:"white",borderRadius:10,borderColor:"gray",borderWidth:1 ,padding:20}

export function PostComponent ({name,subtitle,time,image,description}) {
  return <div style={style}>
  <div style={{display:"flex"}}>
    <img src={image }
    style={{
      width:40,
      height:40,
      borderRadius:200
    }}/>

  <div style={{fontSize:10 ,marginLeft:10}}><b>{name}</b>
  <div>{subtitle} </div>
          {time !== undefined ?  <div style={{display:"flex"}}>
                  <div>{time}</div>
                  <img src='https://media.istockphoto.com/id/1031786258/vector/watch.jpg?s=612x612&w=0&k=20&c=U_7Euy34YQwrg2zgJw_VutYLUjDHYyKUr483e-w29RE=' style={{width:10,height:10}}l />
             </div> : null}
  </div>
 
   </div >
    <div style={{fontSize:12}}>{description}</div>
   </div>

}

// function BioComponent () {
//   return <div>
//     <div style={{width:200,backgroundColor:"white",padding:20,borderWidth:1,borderRadius:10}}>

//     <div >
//       <img src='https://media.licdn.com/dms/image/v2/D4D03AQG2NuAOy7jqdQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1708791116299?e=1753315200&v=beta&t=54_AXr8BSR1qsv24_Tr4CxlHRC58LfTBxq1k_kHx6c8'
//       style={{height:40,width:40,borderRadius:200 }}
//       />
//      </div>

//       <div style={{fontSize:10}}>
//         <div><b>Nitin Prajapat</b></div>
//         <div>BCA Student </div>
//         <div style={{paddingBottom:10}}>Mumbai,Maharashtra </div>
//       </div>


//       <div style={{display:"flex"}}>
//         <img src="https://media.licdn.com/dms/image/v2/D4D0BAQGVCv2OJ2mVIA/company-logo_100_100/company-logo_100_100/0/1718267813789/tilak_maharashtra_vidyapeeth_logo?e=1753315200&v=beta&t=NvYFaHdPTcveJM4r45Kk_u157jJHjck7bi9S0JPptO0" alt="LT" style={{borderRadius:200,height:20,}} />
//         <div style={{fontSize:10,paddingLeft:5,paddingTop:4}}>Tilak Maharashtra Vidyapeeth, Pune</div>
//       </div>

//     </div>
//   </div>
  
// }
