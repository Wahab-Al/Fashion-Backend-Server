import LineRight from '../../../assets/img/Categories/lineRight.svg'
import LineLeft from '../../../assets/img/Categories/lineLeft.svg'
import './topSales.css'

export default function TopSales() {
    return (
        <> 
            <div className="container sale-container bg-transparent top-sales rounded-5 mt-4 mb-4 m-auto d-md-flex justify-content-between align-items-center sale p-3" id='sale'>
                <div className=" border-start border-top border-warning rounded-bottom-5 w-100 w-md-75 p-5 shadow me-1 text-light bg-dark" id='sale-h2'>
                    <h2 className='text-center'>Sales <span className='sale-h2 w-25'>90%</span></h2>
                </div>
                <img className="ms-5" src={LineRight} width={150} height={400} alt="" id='sale-img'/>
                <img className="ms-5" src={LineLeft} width={150} height={400} alt="" id='sale-img-left'/>
            </div>
        </>
    )
}
// bg-body-tertiary