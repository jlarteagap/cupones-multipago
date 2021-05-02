import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import Swal from 'sweetalert2'

const ScanReader = () => {
    const [data, setData] = useState('')
    const [facing, setFacing] = useState('user')
    const [modal, setModal] = useState(0)
    const [error, setError]= useState(false)
    const [legacy, setLegacy]= useState(false)

    const QrScanner = info => {
        if (info) {
            setData(info)
        }
        if (modal === 0 && data.length >= 3) {
            Swal.fire(
                'Código QR Correctamente!',
                'Se ha leído correctamente su código QR!',
                'success'
            )
            setModal(modal + 1)
        }
    }

    const codeScan = (e) => {
        e.preventDefault()

        if (data === '') {
            setError(true)
            return
        } else {
            setError(false)
            setData('')
        }

    }
    // const qrReader1 = React.createRef();
    // console.log("🚀 ~ file: ScanReader.js ~ line 39 ~ ScanReader ~ qrReader1", qrReader1)
    
    // const openImageDialog = qrReader1.openImageDialog()


    const CamaraButton = () => {
        if (facing === "environment") {
            setFacing("user")
        } else {
            setFacing("environment")
        }
    }
    const ScanError = err => {
        setLegacy(true)
    }
    return (
        <div className="col-12 col-md-6 scan__card">
            <div className="card ">
                <div className="card-body scan__card--inner">
                    <div className="card border-primary mb-4">
                        <QrReader
                            delay={300}
                            // onError={ScanError}
                            onScan={QrScanner}
                            className='card-body scanQr py-5 mx-auto'
                            // facingMode={facing}
                            // ref={qrReader1}
                            // legacyMode = {legacy}
                            style={{ width: '100%' }}
                        />
                        {/* {legacy ? (<React.Fragment>
                            <div className="scanError text-center pb-2">No podemos acceder a su cámara, por favor adjuntar codigo QR</div>
                            <input type="button" className="btn card-footer bg--blue text-center text-white" value="Adjuntar QR" onClick={() => openImageDialog()} />
                            </React.Fragment>) 
                            : 
                            (<input type="button" className="btn card-footer camaraMovil bg--blue text-center text-white" value="Cambiar de camara" onClick={CamaraButton()} />)}  */}
                    </div>

                    <form className="form-group mb-0" onSubmit={codeScan}>
                        <input 
                            className="form-control" 
                            type="text" placeholder="Código del vale" 
                            disabled 
                            onChange={data} 
                            value={data} />

                        {error ? (<div className="scanError">Ingrese un código valido</div>) : ('')}
                        <div className="col-12 px-0 pt-4">
                            <div className="row">
                                <div className="col-12">
                                    <button type="submit" className="btn bg--green btn-block text-white btn-block">
                                        Continuar
                                        </button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ScanReader