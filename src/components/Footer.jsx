import { Fcolumn1 } from "./elements/Fcolumn1";
import { Fcolumn2 } from "./elements/Fcolumn2";
import { Fcolumn3 } from "./elements/Fcolumn3";


export const Footer = () => {
  return (
    <>
    <nav className="navbar fixed-bottom bg-dark border-bottom border-body text-white" data-bs-theme="dark">
        <div className="container-fluid">
            <div className="row">
                <div className="col-1">
                    <Fcolumn1/>
                </div>
                <div className="col-6">
                    <Fcolumn2/> 
                </div>
                <div className="col-5">
                    <Fcolumn3/>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}
