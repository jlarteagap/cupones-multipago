import React, { Component } from 'react';

// import { withRouter } from 'react-router-dom';
import ScanReader from './ScanReader';
const Scan = () => {
    return(
        <ScanReader />
    )
}
// class ScanQr extends Component {
//     state = {
//         legacyMode: false,
//         facingMode: "user",
//         inputData: '',
//         error: false,
//         modal: 0
//     }

//     qrReader1 = React.createRef();
//      /* formulario del scanner */ 
//     inputScan = e => {
//         this.setState({inputData: e.target.value})  
//     }
//     /* enviar datos via post*/ 

//     codeScan = e => {      
//         e.preventDefault();
//         const {inputData} = this.state
        
//         if (inputData === ''){
//             this.setState({
//                 error: true
//             })
//             return
//         } else{ this.setState({error: false, inputData: ''})}

//         const infoInput = {
//             data: this.state.inputData,
//         }

//         this.props.codeScaner(infoInput);

//         this.props.history.push("/seleccionar-delivery");
//     }
//       /* Scanner */ 
//     QrScanner = data => {
//         if (data) {
//           this.setState({
//             inputData: data,
//           })

//         }
//         if(this.state.modal === 0 && this.state.inputData.length >= '16'){
//             Swal.fire(
//                 'Código QR Correctamente!',
//                 'Se ha leído correctamente su código QR!',
//                 'success'
//                 )
//             this.setState({
//                 modal: +1
//             })
//         }
//       }
//       ScanError = err => {
//         this.setState(
//             {legacyMode: true}
//         )

//       }

//       openImageDialog() {
//         this.ref.qrReader1.openImageDialog()
//       }

//       camaraButton = () =>{
//         if(this.state.facingMode === "environment"){
//             this.setState({
//                 facingMode: "user"
//             })
//         } else {
//             this.setState({
//                 facingMode: "environment"
//             })
//         }
//       }

//     render(){
//         return(
//             
//         )
//     }
// }

export default Scan; 